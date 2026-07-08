import { useSelector } from "react-redux";
import { SidebarNavGroup } from "./SidebarNavGroup";
import { SidebarNavItem } from "./SidebarNavItem";
import PropTypes from "prop-types";
import { useSidebar } from "../../hooks/useSidebar";

export const SidebarNavList = ({
  onGroupClick = undefined,
  currMenu = "",
  onCloseMenu = undefined,
  sidebarData = [],
}) => {

  const { closeSidebar } = useSidebar();

  return (
    <>
      {sidebarData.map((item) => {
        const { id, path, label, icon, hasSubMenu, subMenu, tag } = item;

        const menuProps = {
          path: path,
          label: label,
          icon: icon,
        };

        if (hasSubMenu) {
          return (
            <SidebarNavGroup
              key={id}
              onClick={(e) => onGroupClick(e, path)}
              onCloseMenu={onCloseMenu}
              menuList={subMenu}
              showMenu={currMenu === path}
              {...menuProps}
            />
          );
        }

        return (
          <SidebarNavItem
            key={id}
            tag={tag}
            {...menuProps}
            onClick={() => closeSidebar()}
          />
        );
      })}
    </>
  );
};

SidebarNavList.propTypes = {
  onGroupClick: PropTypes.func,
  setCurrMenu: PropTypes.func,
  currMenu: PropTypes.string,
  onCloseMenu: PropTypes.func,
  sidebarData: PropTypes.array,
};
