import { useState } from "react";
import { IconSpark } from "../../assets/icons/interfaceIcons2";
import { useSidebar } from "../../hooks/useSidebar";
import { Button } from "../../lib/turtle-ui/components";
import { ContactAdminModal } from "../pricing/ContactAdminModal";
import { useUserSubscription } from "../../hooks/api hooks/useUserSubscription";
import { ActionPendingState } from "../ActionPendingState";

export const SidebarUpgradeBtn = () => {
  const { isExpanded } = useSidebar();

  const [isDwrOpen, setIsDwrOpen] = useState(false);

  const { fetchStatus, onUpgBtnClick } = useUserSubscription();

  return (
    <>
      <Button
        variant="tertiary"
        className="w-full px-3 h-10 min-w-10 truncate break-inside-avoid rounded-xl bg-gradient-to-r from-[#E10000]/70 to-[#FCB104]/70 text-white font-semibold upgrade-pro-btn border-0"
        onClick={onUpgBtnClick}
      >
        {isExpanded && (
          <p className="whitespace-nowrap line-clamp-1">Upgrade Now</p>
        )}
        <IconSpark size="20" />
      </Button>

      {isDwrOpen && <ContactAdminModal onClose={() => setIsDwrOpen(false)} />}

      {fetchStatus === "loading" && <ActionPendingState />}
    </>
  );
};
