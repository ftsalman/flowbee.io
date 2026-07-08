import { IconCheveronLeft } from "../../assets/icons/InterfaceIcons";
import { useI18Next } from "../../hooks/usei18next";
import { useSidebar } from "../../hooks/useSidebar";

export const SidebarToggleBtn = () => {
  const { isExpanded, onCollapse } = useSidebar();
  const { isRtl } = useI18Next();

  const positionClasses = isRtl
    ? "top-1/2 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2"
    : "top-1/2 right-0 z-50 transform translate-x-1/2 -translate-y-1/2";

  const getIconClass = () => {
    if (isExpanded) {
      return isRtl ? "rotate-180" : "rotate-0";
    } else {
      return isRtl ? "rotate-0" : "rotate-180";
    }
  };

  return (
    <button
      className={`absolute hidden md:flex ${positionClasses} size-7 p-1 rounded-full items-center justify-center bg-white border border-gray-200 shadow-sm text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200`}
      onClick={() => onCollapse()}
    >
      <span className={`${getIconClass()} duration-300`}>
        <IconCheveronLeft size="14" />
      </span>
    </button>
  );
};
