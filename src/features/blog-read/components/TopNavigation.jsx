import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { FiArrowLeft, FiLink, FiCheck, FiTwitter, FiLinkedin } from "react-icons/fi";

export const TopNavigation = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#FAFBFD] border-b border-gray-200/80 sticky top-0 z-40 backdrop-blur-md bg-white/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-neutral-600 hover:text-black transition-colors"
        >
          <FiArrowLeft size={14} /> 
          <span className="hidden sm:inline">Back to All Articles</span>
          <span className="sm:hidden">Back</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400 hidden sm:inline">Share article:</span>
          <Button
            onClick={handleCopyLink}
            className="!px-3 !py-1.5 !rounded-lg !border !border-gray-300 !bg-white hover:!bg-gray-50 !text-xs !font-bold !text-neutral-700 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            {copied ? <FiCheck className="text-green-600" size={14} /> : <FiLink size={14} />}
            <span>{copied ? "Copied!" : ""}</span>
            <span className="hidden sm:inline">{copied ? "" : "Copy Link"}</span>
          </Button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title || '')}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-neutral-700 shadow-sm transition-all flex items-center justify-center"
            title="Share on X / Twitter"
          >
            <FiTwitter size={14} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-neutral-700 shadow-sm transition-all flex items-center justify-center"
            title="Share on LinkedIn"
          >
            <FiLinkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
