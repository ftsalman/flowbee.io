import { cn } from "../../../lib/turtle-ui/utils";
import { useI18Next } from "../../hooks/usei18next";
import { useSidebar } from "../../hooks/useSidebar";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN_SIZES } from "../../utils/utils";
import PropTypes from "prop-types";

export const SidebarWrapper = ({ children = null }) => {
  const { isOpen, isExpanded, onToggle } = useSidebar();
  const { isRtl } = useI18Next();
  const screeSize = useWindowSize();

  const isSmallDevice = screeSize.width < SCREEN_SIZES.md;

  const sidebarWidth = isExpanded
    ? "w-[280px] sm:w-[17rem]"
    : "w-[280px] sm:w-[4.5rem]";

  const getTransitions = () => {
    if (isSmallDevice) {
      if (isRtl) {
        if (isOpen) return "translate-x-0";
        else return "translate-x-full";
      } else {
        if (isOpen) return "translate-x-0";
        else return "-translate-x-full";
      }
    }
    return "";
  };

  return (
    <div className="flex h-full">
      <div
        className={`${getTransitions()} fixed md:relative top-0 ${
          isRtl ? "right-0" : "left-0"
        } h-full z-50 ${sidebarWidth} flex-shrink-0 flex flex-col ${
          isRtl ? " border-l md:border-l-0" : " border-r md:border-r-0"
        } border-gray-100 duration-300 bg-[#FAFAFA]`}
      >
        {children}
      </div>
      {isOpen && (
        <div
          onClick={() => onToggle()}
          className="fixed inset-0 z-[49] md:hidden flex-grow bg-black/50 transition-opacity duration-300 backdrop-blur-sm"
        ></div>
      )}
    </div>
  );
};

SidebarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SidebarContentWrapper = ({ children, className = "" }) => (
  <div className={cn("p-4 pt-3 flex flex-col gap-2", className)}>
    {children}
  </div>
);

SidebarContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SidebarBodyWrapper = ({ children }) => {
  return (
    <div
      className={`relative flex flex-col gap-3 flex-1 duration-300 panel-scrollbar overflow-y-auto overflow-x-hidden`}
    >
      {/* Top fade overlay matching light sidebar bg */}
      <div className="sticky top-0 left-0 h-0 w-full z-50 bg-gradient-to-b from-[#FAFAFA] to-transparent pointer-events-none flex-shrink-0"></div>
      {children}
    </div>
  );
};

SidebarBodyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
