import { useSidebar } from "../../hooks/useSidebar";
import { SidebarToggleBtn } from "./SidebarToggleBtn";
import {
  SidebarBodyWrapper,
  SidebarContentWrapper,
  SidebarWrapper,
} from "./SidebarWrappers";
import { SidebarNavList } from "./SidebarNavList";
import { SIDEBAR_DATA } from "../../constants/SidebarData";
import { SidebarPartnerCard } from "./SidebarPartnerCard";
import { useState } from "react";

export const Sidebar = () => {
  const [currMenu, setCurrMenu] = useState(null);
  const { isOpen, isExpanded, onCollapse, onToggle, closeSidebar } =
    useSidebar();

  const sidebarData = SIDEBAR_DATA;

  const handleGroupClick = (e, path) => {
    e.preventDefault();
    setCurrMenu((prev) => (prev === path ? null : path));
    if (!isExpanded) {
      return;
    }
  };

  return (
    <SidebarWrapper>
      <SidebarToggleBtn />

      {/* ── Logo ─────────────────────────────────── */}
      <div className="px-5 py-6 flex items-center gap-3 border-b-0 flex-shrink-0">
        <div className="size-11 rounded-full bg-[#60E28B] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(96,226,139,0.5)]">
          <span className="text-[#0B1A14] font-black text-xl leading-none">f</span>
        </div>
        {isExpanded && (
          <div className="overflow-hidden">
            <p className="text-[#1B2533] font-black text-[22px] leading-tight truncate">flowbee.io</p>
            <p className="text-gray-400 font-medium text-[13px] leading-tight truncate">Referral Program</p>
          </div>
        )}
      </div>

      {/* ── Nav + Partner card ───────────────────── */}
      <SidebarBodyWrapper>
        <SidebarContentWrapper>
          <SidebarNavList
            currMenu={currMenu}
            onGroupClick={handleGroupClick}
            onCloseMenu={(e, path, type) => {
              if (type === "expanded") {
                closeSidebar();
              } else {
                setCurrMenu(null);
              }
            }}
            sidebarData={sidebarData}
          />
        </SidebarContentWrapper>
        {/* Partner card at bottom */}
        <SidebarContentWrapper className="sticky bottom-0 mt-auto  pt-2 border-t-0">
          <SidebarPartnerCard />
        </SidebarContentWrapper>
      </SidebarBodyWrapper>
    </SidebarWrapper>
  );
};
