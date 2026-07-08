import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavGroupCollapsedMenu } from "./SidebarNavGroupCollapsedMenu";
import { SidebarNavGroupExpandedMenu } from "./SidebarNavGroupExpandedMenu";
import { SidebarNavItem } from "./SidebarNavItem";
import PropTypes from "prop-types";
import { AppMenu } from "../app-menu/AppMenu";

export const SidebarNavGroup = ({
  menuList = null,
  showMenu = false,
  onCloseMenu = undefined,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  return (
    <div className="relative min-w-full w-full">
      {isExpanded ? (
        <SidebarNavItem showExpandIcon {...rest} />
      ) : (
        <AppMenu
          iniXPosition="right"
          iniYPosition="bottom"
          renderToggler={(props) => {
            return (
              <SidebarNavItem
                showExpandIcon
                {...props}
                {...rest}
                onClick={(e) => {
                  rest.onClick(e);
                  props.onClick(e);
                }}
              />
            );
          }}
          renderMenu={(menuProps) => {
            return (
              <SidebarNavGroupCollapsedMenu
                containerClass="absolute z-50 w-fit max-w-[420px] flex-shrink-0 absolute z-50 rounded-xl ml-[40px]"
                containerProps={{ ...menuProps }}
                menuList={menuList}
                onClick={(...props) => {
                  onCloseMenu(...props);
                  menuProps.onMenuClose();
                }}
              />
            );
          }}
        />
      )}

      {isExpanded && showMenu && (
        <SidebarNavGroupExpandedMenu
          menuList={menuList}
          onClick={onCloseMenu}
        />
      )}
    </div>
  );
};

SidebarNavGroup.propTypes = {
  menuList: PropTypes.array,
  showMenu: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};
