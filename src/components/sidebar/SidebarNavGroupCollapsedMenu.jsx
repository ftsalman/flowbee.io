import { Menu } from "../../../lib/turtle-ui/components";
import { cn } from "../../../lib/turtle-ui/utils";
import { SidebarNavGroupMenuItem } from "./SidebarNavGroupMenuItem";
import PropTypes from "prop-types";

export const SidebarNavGroupCollapsedMenu = ({
  menuList = [],
  ref = null,
  containerClass = "",
  containerProps = {},
  ...rest
}) => {

  return (
    <Menu
      className={cn("flex flex-col gap-1", containerClass)}
      {...containerProps}
    >
      {menuList?.map(({ path, label, id, tag }) => (
        <SidebarNavGroupMenuItem
          key={id}
          label={label}
          path={path}
          tag={tag}
          {...rest}
          onClick={(e) => rest.onClick(e, path)}
        />
      ))}
    </Menu>
  );
};
SidebarNavGroupCollapsedMenu.propTypes = {
  menuList: PropTypes.array,
  ref: PropTypes.any,
  containerClass: PropTypes.string,
  containerProps: PropTypes.object,
};
