import { useSidebar } from "../../hooks/useSidebar";
import { NavLink } from "react-router-dom";
import { IconCheverontDown } from "../../assets/icons/InterfaceIcons";
import PropTypes from "prop-types";
import { cn } from "../../../lib/turtle-ui/utils";

export const SidebarNavItem = ({
  onClick = undefined,
  label = null,
  icon = null,
  path = null,
  showExpandIcon = false,
  showBadge = false,
  tag = null,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  const getClasses = ({ isActive }) => {
    const base =
      "h-12 px-4 min-w-12 flex-shrink-0 flex items-center justify-start gap-3 duration-200 rounded-[14px] border-0 no-underline text-[15px]";
    const width = isExpanded ? "w-full" : "w-12";

    if (isActive) {
      return cn(base, width, "bg-[#0B1A14] text-white font-black shadow-lg shadow-black/10");
    }
    return cn(
      base,
      width,
      "text-[#5C6479] font-black hover:bg-gray-100/80 hover:text-[#1B2533]"
    );
  };

  return (
    <NavLink to={path} onClick={onClick} className={getClasses} {...rest}>
      {!isExpanded && showBadge && (
        <div className="absolute top-2.5 right-3 size-2 flex-shrink-0 rounded-full bg-red-500"></div>
      )}
      {icon && (
        <div className="min-w-6 flex justify-center flex-shrink-0">{icon}</div>
      )}
      <div
        className={`${
          isExpanded ? "w-full not-sr-only" : "w-0 sr-only"
        } flex items-center justify-between gap-2 duration-300`}
      >
        <div className="flex items-center gap-2 flex-grow line-clamp-1 break-all">
          <p className="flex-grow line-clamp-1">{label}</p>
        </div>

        {showExpandIcon && (
          <div className="flex-shrink-0 opacity-60">
            <IconCheverontDown />
          </div>
        )}

        {showBadge && (
          <div className="size-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
        )}
      </div>
    </NavLink>
  );
};

SidebarNavItem.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
  showExpandIcon: PropTypes.bool,
  showBadge: PropTypes.bool,
  tag: PropTypes.string,
};
