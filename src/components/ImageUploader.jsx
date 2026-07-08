import PropTypes from "prop-types";
import { useRef } from "react";
// Utils
// Components
import {
  IconDelete,
  IconEdit,
  IconUpload,
} from "../assets/icons/InterfaceIcons";
import { Button } from "../../lib/turtle-ui/components";
import { cn } from "../../lib/turtle-ui/utils";

export const ImageUploader = ({
  className = "",
  fileUrl = "",
  onChange = () => {},
  fileProps = {},
  fallBackImg = "/images/empty-image.png",
}) => {
  const fileRef = useRef(null);

  return (
    <>
      {!fileUrl ? (
        <EmptyState
          className={className}
          onClick={() => fileRef.current.click()}
        />
      ) : (
        <>
          <div className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "size-20 flex items-center justify-center rounded-full overflow-clip border border-gray-200 bg-gray-50 hover:bg-gray-100",
                className
              )}
            >
              <img
                src={fileUrl || fallBackImg}
                alt="uploaded-image"
                className="object-cover"
                onError={(e) => (e.target.src = fallBackImg)}
              />
            </div>

            <div className="flex items-center justify-center gap-1.5">
              <Button
                className="size-6 p-1 rounded-md border border-gray-200 text-blue-600 hover:bg-blue-50"
                variant="tertiary"
                onClick={() => fileRef.current.click()}
                title="Change"
              >
                <IconEdit />
              </Button>
              <Button
                className="size-6 p-1 rounded-md border border-gray-200 text-red-500 hover:bg-red-50"
                variant="tertiary"
                onClick={() => onChange(null)}
                title="Delete"
              >
                <IconDelete />
              </Button>
            </div>
          </div>
        </>
      )}

      <input
        type="file"
        ref={fileRef}
        hidden
        onChange={(e) => {
          onChange(e.target.files[0]);
          fileRef.current.value = null;
        }}
        accept="image/*"
        {...fileProps}
      />
    </>
  );
};

ImageUploader.propTypes = {
  className: PropTypes.string,
  fileUrl: PropTypes.string,
  onChange: PropTypes.func,
  fileProps: PropTypes.object,
  fallBackImg: PropTypes.string,
};

const EmptyState = ({ className = "", onClick = () => {} }) => (
  <div
    className={cn(
      "size-20 flex items-center justify-center rounded-full overflow-clip border border-gray-200 bg-gray-50 hover:bg-gray-100",
      className
    )}
    role="button"
    tabIndex={0}
    onClick={onClick}
  >
    <IconUpload size="24" />
  </div>
);

EmptyState.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
