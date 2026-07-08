import { Button } from "../../../lib/turtle-ui/components";
import { cn } from "../../../lib/turtle-ui/utils";
import { IconLogout } from "../../assets/icons/interfaceIcons2";
import { useSidebar } from "../../hooks/useSidebar";
import { LogoutWrapper } from "../LogoutWrapper";

export const SidebarLogoutBtn = () => {
  const { isExpanded } = useSidebar();

  const getClassess = () => {
    let classess =
      "h-10 px-2.5 text-start min-w-10 flex-shrink-0 flex items-center justify-start gap-2 duration-300 border-0";

    classess += isExpanded ? "w-full" : "w-10";

    return cn(
      classess,
      "text-xs bg-red-50 hover:bg-red-100 text-red-400 duration-300 border-0"
    );
  };

  return (
    <LogoutWrapper>
      {({ onClick }) => (
        <Button variant="danger" className={getClassess()} onClick={onClick}>
          <div className="min-w-6 flex justify-center">
            <IconLogout size="20" />
          </div>
          <div
            className={`${
              isExpanded ? "w-full not-sr-only" : "w-0 sr-only"
            }  flex items-center justify-between gap-2  duration-300`}
          >
            <div className="flex-grow line-clamp-1 break-all text-sm">Logout</div>
          </div>
        </Button>
      )}
    </LogoutWrapper>
  );
};
