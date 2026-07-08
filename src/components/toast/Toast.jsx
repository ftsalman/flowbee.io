import PropTypes from "prop-types";
import { IconBellAlt, IconCross, IconInfo, IconTick } from "../../assets/icons/interfaceIcons2";
import { cn } from "../../../lib/turtle-ui/utils";



const ICON_VARIANTS = {
  success: {
    className: "bg-green-200 text-green-500",
    icon: <IconTick size="42" />,
    head: "Success!",
    descp: "Operation completed successfully.",
  },
  danger: {
    className: "bg-red-100 text-red-400",
    icon: <IconCross size="32" />,
    head: "Error!",
    descp: "An error occurred.",
  },
  warning: {
    className: "bg-yellow-200",
    icon: "⚠️",
    head: "Warning!",
    descp: "Please be cautious.",
  },
  info: {
    className: "bg-blue-100 text-blue-400",
    icon: <IconInfo size="32" />,
    head: "Information",
    descp: "Here is some information.",
  },
  default: {
    className: "bg-gray-200",
    icon: <IconInfo size="32" />,
    head: "Notice",
    descp: "This is a default notification.",
  },
  notification: {
    className: "bg-green-200 text-green-500",
    icon: <IconBellAlt filled size="28" />,
    head: "Notification",
    descp: "This is a default notification.",
  },
};

export const Toast = ({
  head = null,
  descp = null,
  variant = "default",
  customIcon = "",
  hideIcon = false,
  hideHead = false,
  hideDescp = false,
  showHeadDivider = false,
  showDescpDivider = false,
}) => {
  const toastVariant = ICON_VARIANTS[variant] ?? ICON_VARIANTS.default;

  return (
    <div className="select-none w-full h-fit flex items-center gap-2.5">
      {!hideIcon && (
        <div
          className={cn(
            "size-10 flex flex-shrink-0 items-center justify-center text-2xl rounded-md bg-gray-200",
            toastVariant?.className
          )}
        >
          {customIcon ? customIcon : toastVariant?.icon}
        </div>
      )}
      <div className="flex-grow">
        {!hideHead && (
          <p
            title={head || toastVariant?.head}
            className="text-sm break-words font-medium text-gray-800"
          >
            {head || toastVariant?.head}
            {showHeadDivider && <span className="border-b border-gray-300" />}
          </p>
        )}
        {hideDescp == false && (
          <p
            title={descp || toastVariant?.descp}
            className="break-all mt-[1px] text-xs font-medium text-gray-400"
          >
            {descp || toastVariant?.descp}
            {showDescpDivider && <span className="border-b border-gray-300" />}
          </p>
        )}
      </div>
    </div>
  );
};

Toast.propTypes = {
  head: PropTypes.string,
  descp: PropTypes.string,
  variant: PropTypes.oneOf(["success", "danger", "warning", "info", "default"]),
  customIcon: PropTypes.string,
  hideIcon: PropTypes.bool,
  hideHead: PropTypes.bool,
  hideDescp: PropTypes.bool,
  showHeadDivider: PropTypes.bool,
  showDescpDivider: PropTypes.bool,
};
