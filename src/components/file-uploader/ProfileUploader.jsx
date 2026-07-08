import React, { useEffect, useRef, useState } from "react";
import {
  IconClose,
  IconEdit,
  IconUpload,
} from "../../assets/icons/interfaceIcons2";

const ProfileUploader = ({
  profileImage,
  setProfileImage,
  setSelectedFile,
  removeImageFormField,
}) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(profileImage);

  // Handle Image Selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setPreviewImage(URL.createObjectURL(file));
    setSelectedFile(file);
    event.target.value = "";
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setPreviewImage("");
    setProfileImage("");
    setSelectedFile(null);
    removeImageFormField();
  };

  useEffect(() => {
    setPreviewImage(profileImage);
  }, [profileImage]);

  return (
    <div className="relative flex items-center gap-4">
      <div className="relative group">
        {/* Show Preview or Default Image */}
        <img
          src={previewImage || "/images/profile-default.png"}
          alt="Profile"
          className="size-16 flex-shrink-0 object-cover rounded-full border border-gray-200"
          onError={(e) => (e.target.src = "/images/profile-default.png")}
        />

        {/* Show Upload Button When No Image */}
        {!previewImage ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition">
            <button
              className="bg-white p-1 rounded-full shadow-md"
              onClick={triggerFileInput}
              type="button"
            >
              <IconUpload />
            </button>
          </div>
        ) : (
          // If an image exists, show Edit & Remove on hover
          <>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition">
              <button
                className="bg-white p-1 rounded-full shadow-md"
                onClick={triggerFileInput}
                type="button"
              >
                <IconEdit />
              </button>
            </div>

            <button
              className="absolute top-0 right-0 bg-red-500 text-white size-5 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 opacity-0 group-hover:opacity-100 transition"
              onClick={removeImage}
              type="button"
            >
              <IconClose />
            </button>
          </>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileUploader;
