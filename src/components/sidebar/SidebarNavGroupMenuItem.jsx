import { NavLink } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar";
import PropTypes from "prop-types";
import { buttonVariants } from "../../../lib/turtle-ui/components/button/buttonVariants";
import { cn } from "../../../lib/turtle-ui/utils";

export const SidebarNavGroupMenuItem = ({
  label = null,
  path = null,
  tag = null,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  const getClassess = ({ isActive }) => {
    let classess =
      "h-9 px-2 min-w-10 flex-shrink-0 flex items-center justify-start gap-1 duration-300 border-0";

    classess += isExpanded ? "w-full" : "w-10";

    return cn(
      buttonVariants({
        size: "xs",
        variant: isActive ? "accent-gradient" : "tertiary",
        className: "text-sm hover:bg-brand-primary-100 duration-300 border-0",
      }),
      classess
    );
  };

  return (
    <NavLink to={path} className={getClassess} {...rest}>
      <div className="flex items-center gap-2 flex-grow line-clamp-1 break-all">
        <p className="flex-grow line-clamp-1">{label}</p>

        {/* {tag && (
          <Tag
            className="flex-shrink-0 gap-1 px-1 bg-yellow-50"
            size="xs"
            variant="yellow"
          >
            <IconStars2 size={11} isFilled/> {tag}
          </Tag>
        )} */}
      </div>
    </NavLink>
  );
};

SidebarNavGroupMenuItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  tag: PropTypes.string,
};
