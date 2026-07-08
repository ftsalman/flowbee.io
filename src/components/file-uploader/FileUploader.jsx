// import React, { useState, useEffect } from "react";
// import {
//   IconDelete,
//   IconDraft,
//   IconImage,
//   IconMovie,
//   IconMusicNote,
// } from "../../assets/icons/InterfaceIcons";
// import { Button } from "../ui/button/Button";
// import { uploadFile } from "../../services/api/file";
// import { validFileTypes } from "../../utils/nodePropertyUtils";
// import { useToast } from "../../hooks/useToast";

// const FileUploader = ({ stateUpdater, selectedNode }) => {
//   const MAIN_BASE_URL = import.meta.env.VITE_BASE_URL || "";
//   const { showToast } = useToast();

//   const nodeTypeToFileType = {
//     pictureMessage: "image",
//     buttonOptionMessage: "image",
//     videoMessage: "video",
//     audioMessage: "audio",
//     documentMessage: "document",
//     igPictureMessage: "image",
//     igVideoMessage: "video",
//     igAudioMessage: "audio",
//   };

//   // Set correct file type from selectedNode type
//   const fileType = nodeTypeToFileType[selectedNode?.type] || "image";

//   const [currentFile, setCurrentFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   useEffect(() => {
//     if (selectedNode?.data?.title) {
//       setCurrentFile(`${MAIN_BASE_URL}/${selectedNode.data.title}`);
//     } else {
//       setCurrentFile(null);
//     }
//   }, [selectedNode, selectedNode?.data?.title]);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     // Validate file type and size
//     const { types, maxSize } = validFileTypes[fileType] || {};
//     if (!types?.includes(file.type)) {
//       showToast({
//         variant: "danger",
//         head: "Invalid File Type",
//         descp: `Unsupported file type. Please upload a valid ${fileType}.`,
//       });
//       // alert(`Unsupported file type. Please upload a valid ${fileType}.`);
//       return;
//     }

//     if (file.size > maxSize) {
//       showToast({
//         variant: "danger",
//         head: "Invalid File Size",
//         descp: `File size exceeds the maximum allowed size of ${
//           maxSize / (1024 * 1024)
//         } MB.`,
//       });
//       // alert(
//       //   `File size exceeds the maximum allowed size of ${
//       //     maxSize / (1024 * 1024)
//       //   } MB.`
//       // );
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file, file.name);

//     setIsUploading(true);

//     try {
//       const response = await uploadFile(formData);
//       if (response?.filePath) {
//         const uploadedFileUrl = `${MAIN_BASE_URL}/${response.filePath}`;
//         setCurrentFile(uploadedFileUrl);

//         // Use stateUpdater to update node's title property
//         stateUpdater(selectedNode?.id, "title", response.filePath);
//       } else {
//         showToast({
//           variant: "danger",
//           head: "Upload Failed",
//           descp: "File upload failed. Please try again.",
//         });
//         // alert("File upload failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("File upload failed", error);
//     } finally {
//       setIsUploading(false);
//     }

//     event.target.value = ""; // Reset input
//   };

//   const clearFile = () => {
//     setCurrentFile(null);
//     stateUpdater(selectedNode?.id, "title", "");
//   };

//   const renderPreview = () => {
//     if (!currentFile) return null;

//     return (
//       <div key={currentFile}>
//         {" "}
//         {/* This forces React to refresh when currentFile changes */}
//         {fileType === "image" && (
//           <img
//             src={currentFile}
//             alt="Uploaded Preview"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         )}
//         {fileType === "video" && (
//           <video key={currentFile} controls className="w-full rounded-lg">
//             <source src={currentFile} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//         {fileType === "audio" && (
//           <audio key={currentFile} controls className="w-full">
//             <source src={currentFile} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         )}
//         {fileType === "document" && (
//           <div className="flex flex-col items-center gap-3 text-black">
//             <IconDraft size={24} />
//             <a
//               href={currentFile}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-brand-600 underline text-xs"
//             >
//               View Document
//             </a>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center rounded-xl">
//       <div className="w-full flex flex-col gap-3">
//         {currentFile ? (
//           renderPreview()
//         ) : (
//           <div className="flex flex-col gap-3 items-center justify-center w-full">
//             {fileType === "image" && <IconImage color="#000" size="24" />}
//             {fileType === "video" && <IconMovie color="#000" size="24" />}
//             {fileType === "audio" && <IconMusicNote color="#000" size="24" />}
//             {fileType === "document" && <IconDraft color="#000" size="24" />}
//           </div>
//         )}

//         <Button
//           onClick={() =>
//             document.getElementById(`file-input-${selectedNode?.id}`).click()
//           }
//           variant="secondary"
//           className="w-full border-[#23a455] text-[#23a455]"
//         >
//           {isUploading ? `Uploading ${fileType}...` : `Upload ${fileType}`}
//         </Button>
//       </div>

//       {currentFile && (
//         <button
//           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//           onClick={clearFile}
//           title="Clear File"
//         >
//           <IconDelete size={16} />
//         </button>
//       )}

//       <input
//         id={`file-input-${selectedNode?.id}`}
//         type="file"
//         accept={
//           fileType === "image"
//             ? "image/jpeg,image/png"
//             : fileType === "video"
//             ? "video/mp4"
//             : fileType === "audio"
//             ? "audio/aac,audio/amr,audio/mpeg,audio/mp4,audio/ogg,audio/wav,audio/*"
//             : fileType === "document"
//             ? ".pdf,.doc,.docx,.ppt,.pptx"
//             : "*"
//         }
//         className="hidden"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// };

// export default FileUploader;

import React, { useState, useEffect } from "react";
import {
  IconDelete,
  IconDraft,
  IconImage,
  IconMovie,
  IconMusicNote,
} from "../../assets/icons/InterfaceIcons";
import { Button } from "../../lib/turtle-ui/components";
import { uploadFile } from "../../services/api/file";
import { validFileTypes } from "../../utils/nodePropertyUtils";
import { useToast } from "../../hooks/useToast";

const FileUploader = ({ stateUpdater, selectedNode }) => {
  const MAIN_BASE_URL = import.meta.env.VITE_BASE_URL || "";
  const { showToast } = useToast();

  /* ================= Node → Allowed File Types ================= */
  const nodeTypeToFileType = {
    pictureMessage: ["image"],
    // buttonOptionMessage: ["image", "video"], //  image + video
    buttonOptionMessage: ["image", "video", "document"],

    videoMessage: ["video"],
    audioMessage: ["audio"],
    documentMessage: ["document"],
    igPictureMessage: ["image"],
    igVideoMessage: ["video"],
    igAudioMessage: ["audio"],
  };

  const allowedFileTypes = nodeTypeToFileType[selectedNode?.type] || ["image"];

  const [currentFile, setCurrentFile] = useState(null);
  const [uploadedType, setUploadedType] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fileTypeToTitleType = {
    image: "I",
    video: "V",
    document: "D",
  };

  /* ================= Load Existing File (Edit Mode) ================= */
  useEffect(() => {
    if (selectedNode?.data?.title) {
      const fileUrl = `${MAIN_BASE_URL}/${selectedNode.data.title}`;
      setCurrentFile(fileUrl);

      if (selectedNode.data.title.match(/\.(mp4|webm)$/i)) {
        setUploadedType("video");
      } else if (selectedNode.data.title.match(/\.(mp3|wav|ogg)$/i)) {
        setUploadedType("audio");
      } else if (selectedNode.data.title.match(/\.(pdf|doc|docx)$/i)) {
        setUploadedType("document");
      } else {
        setUploadedType("image");
      }
    } else {
      setCurrentFile(null);
      setUploadedType(null);
    }
  }, [selectedNode]);

  /* ================= Handle File Upload ================= */
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate type
    const matchedType = allowedFileTypes.find((type) =>
      validFileTypes[type]?.types.includes(file.type)
    );

    if (!matchedType) {
      showToast({
        variant: "danger",
        head: "Invalid File Type",
        descp: "Unsupported file type. Please upload a valid image or video.",
      });
      return;
    }

    // Validate size
    if (file.size > validFileTypes[matchedType].maxSize) {
      showToast({
        variant: "danger",
        head: "Invalid File Size",
        descp: `File size exceeds the allowed limit.`,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file, file.name);

    setIsUploading(true);

    try {
      const response = await uploadFile(formData);

      if (response?.filePath) {
        const uploadedFileUrl = `${MAIN_BASE_URL}/${response.filePath}`;
        setCurrentFile(uploadedFileUrl);
        setUploadedType(matchedType);

        // Update node data
        // stateUpdater(selectedNode?.id, "title", response.filePath);
        stateUpdater(selectedNode?.id, "title", response.filePath);

        // set titleType only for button option message
        if (selectedNode?.type === "buttonOptionMessage") {
          stateUpdater(
            selectedNode?.id,
            "titleType",
            fileTypeToTitleType[matchedType] || "I"
          );
        }
      } else {
        showToast({
          variant: "danger",
          head: "Upload Failed",
          descp: "File upload failed. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      showToast({
        variant: "danger",
        head: "Upload Error",
        descp: "Something went wrong while uploading.",
      });
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  /* ================= Clear File ================= */
  const clearFile = () => {
    setCurrentFile(null);
    setUploadedType(null);
    // stateUpdater(selectedNode?.id, "title", "");
    stateUpdater(selectedNode?.id, "title", "");

    if (selectedNode?.type === "buttonOptionMessage") {
      stateUpdater(selectedNode?.id, "titleType", "I");
    }
  };

  const getUploadButtonLabel = (types = []) => {
    if (types.length === 1) {
      return `Upload ${types[0].charAt(0).toUpperCase() + types[0].slice(1)}`;
    }
    return "Upload File";
  };
  const renderUploadIcon = (allowedFileTypes = []) => {
    if (allowedFileTypes.length !== 1) {
      return <IconDraft color="#000" size={24} />; // generic file icon
    }

    switch (allowedFileTypes[0]) {
      case "image":
        return <IconImage color="#000" size={24} />;
      case "video":
        return <IconMovie color="#000" size={24} />;
      case "audio":
        return <IconMusicNote color="#000" size={24} />;
      case "document":
        return <IconDraft color="#000" size={24} />;
      default:
        return <IconDraft color="#000" size={24} />;
    }
  };

  /* ================= Preview ================= */
  const renderPreview = () => {
    if (!currentFile) return null;

    return (
      <div key={currentFile}>
        {uploadedType === "image" && (
          <img
            src={currentFile}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        )}

        {uploadedType === "video" && (
          <video controls className="w-full rounded-lg">
            <source src={currentFile} type="video/mp4" />
          </video>
        )}

        {uploadedType === "audio" && (
          <audio controls className="w-full">
            <source src={currentFile} />
          </audio>
        )}

        {uploadedType === "document" && (
          <div className="flex flex-col items-center gap-3">
            <IconDraft color="#000" size={24} />
            <a
              href={currentFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline text-xs"
            >
              View Document
            </a>
          </div>
        )}
      </div>
    );
  };

  /* ================= UI ================= */
  return (
    <div className="relative w-full flex flex-col items-center justify-center rounded-xl">
      <div className="w-full flex flex-col gap-3">
        {currentFile ? (
          renderPreview()
        ) : (
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            {renderUploadIcon(allowedFileTypes)}
          </div>
        )}

        <Button
          disabled={isUploading}
          onClick={() =>
            document.getElementById(`file-input-${selectedNode?.id}`).click()
          }
          variant="secondary"
          className="w-full border-[#23a455] text-[#23a455]"
        >
          {isUploading ? (
            <p className="text-[#23a455]">Uploading...</p>
          ) : (
            getUploadButtonLabel(allowedFileTypes)
          )}
        </Button>
      </div>

      {currentFile && (
        <button
          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
          onClick={clearFile}
        >
          <IconDelete size={16} />
        </button>
      )}

      <input
        id={`file-input-${selectedNode?.id}`}
        type="file"
        className="hidden"
        // accept={
        //   allowedFileTypes.includes("image") &&
        //   allowedFileTypes.includes("video")
        //     ? "image/*,video/mp4"
        //     : allowedFileTypes.includes("image")
        //     ? "image/*"
        //     : allowedFileTypes.includes("video")
        //     ? "video/mp4"
        //     : allowedFileTypes.includes("audio")
        //     ? "audio/*"
        //     : allowedFileTypes.includes("document")
        //     ? ".pdf,.doc,.docx,.ppt,.pptx"
        //     : "*"
        // }
        accept={allowedFileTypes
          .map((type) => {
            switch (type) {
              case "image":
                return "image/*";
              case "video":
                return "video/mp4,video/x-m4v,video/*";
              case "audio":
                return "audio/*";
              case "document":
                return ".pdf,.doc,.docx,.ppt,.pptx,.txt";
              default:
                return "";
            }
          })
          .filter(Boolean)
          .join(",")}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
