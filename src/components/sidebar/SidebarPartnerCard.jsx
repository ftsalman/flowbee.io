import { useState } from "react";
import { useSelector } from "react-redux";
import { useSidebar } from "../../hooks/useSidebar";
import { useMemberCode } from "../../hooks/useMemberCode";
import { Button } from "../../lib/turtle-ui/components";

export const SidebarPartnerCard = () => {
  const { isExpanded } = useSidebar();
  const memberCode = useMemberCode();
  const userName = useSelector((state) => state.user.userName);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!memberCode) return;
    navigator.clipboard.writeText(memberCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  if (!isExpanded) {
    return (
      <Button
        onClick={handleCopy}
        title={`Copy ${memberCode}`}
        variant="success"
        size="sm"
        className="mx-auto size-12 !p-0 flex items-center justify-center flex-shrink-0"
      >
        {isCopied ? "✓" : "C"}
      </Button>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[20px] bg-[#112F1F] p-5 space-y-4 shadow-lg border border-[#234A35]">
      {/* Subtle green glow behind */}
      <div className="absolute right-[-20%] top-[-10%] w-[120px] h-[120px] rounded-full bg-[#184F31] blur-xl opacity-70 pointer-events-none" />
      
      {/* Content wrapper relative to stay above absolute elements */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Badge */}
        <div className="flex items-center">
          <span className="inline-flex items-center gap-1.5 bg-[#2B4B39] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2.5 6 5 8.5 9.5 3"></polyline>
            </svg>
            Verified Partner
          </span>
        </div>

        {/* Name */}
        <p className="text-white font-black text-lg leading-tight tracking-wide mt-1">
          {userName ? `${userName} Partner Account` : "Partner Account"}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-[13px] leading-relaxed pr-2">
          Share your code, track referrals, and request monthly affiliate commission.
        </p>

        {/* Copy Button */}
        <Button
          onClick={handleCopy}
          variant="success"
          size="md"
          className="w-full mt-2"
        >
          {isCopied ? "Copied!" : `Copy ${memberCode || ""} Code`}
        </Button>
      </div>
    </div>
  );
};
