import { useRef, useState } from "react";

// API

import { apiUploadFile } from "../../services/api/generalApi";

// Hooks

import { useToast } from "../../hooks/useToast";

// Components

import { IconUpload } from "../../assets/icons/interfaceIcons2";
import { Button } from "../../../lib/turtle-ui/components";
import { IconTextBox } from "../../components//IconTextBox";
import Spinner from "../../components/Spinner";

export const MediaUploadInput = ({
  value = "",
  id = "file",
  name = "file",
  onChange = () => {},
  onUpload = () => {},
  customValidation = undefined,
  fileInputProps = {},
  iconTextBoxProps = {},
}) => {
  // States

  const [isUploading, setIsUploading] = useState(false);

  // Refs

  const fileInputRef = useRef(null);

  //  Hooks

  const { showToast } = useToast();

  // Funcs

  const handleFileUpload = async (file) => {
    if (!file) return null;

    if (!(file instanceof File)) return null;

    try {
      const fileFormData = new FormData();
      fileFormData.append("file", file, file.name);

      const response = await apiUploadFile(fileFormData);

      return response?.filePath;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (customValidation) {
      const isValid = customValidation?.(file);
      if (!isValid) return;
    } else {
      if (!file?.type?.startsWith("video/")) {
        showToast({
          variant: "danger",
          head: "Invalid File Type",
          descp: "Please select a video file",
        });
        return;
      }
    }

    try {
      setIsUploading(true);

      const videoUrl = await handleFileUpload(file);

      onUpload(videoUrl || "");
    } catch (error) {
      showToast({
        variant: "danger",
        head: "Something went wrong!",
        descp: error?.message,
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {/* Input Box */}

      <IconTextBox
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-0.5"
        placeholder="https://trazi.com/your-video.mp4"
        suffixPointerEvents
        suffixClassName="right-1.5"
        suffix={
          <Button
            className="h-8 px-1.5 gap-1.5 flex-shrink-0 rounded-md  shadow-none text-xs bg-blue-50 text-blue-600 hover:bg-blue-100/50 border-blue-200 focus:ring-blue-100"
            variant="secondary"
            onClick={() => fileInputRef?.current?.click?.()}
            disabled={isUploading}
          >
            {isUploading ? (
              <div className="flex items-center gap-1.5">
                <Spinner spinnerProps={{ size: "13" }} className="w-fit" />
                Uploading...
              </div>
            ) : (
              <>
                <IconUpload />
                <span>Upload</span>
              </>
            )}
          </Button>
        }
        {...iconTextBoxProps}
      />

      {/* File */}

      <input
        type="file"
        id={id}
        name={name}
        ref={fileInputRef}
        hidden
        onChange={(e) => {
          handleFileChange(e);
          fileInputRef.current.value = "";
        }}
        accept="video/*"
        {...fileInputProps}
      />
    </>
  );
};
