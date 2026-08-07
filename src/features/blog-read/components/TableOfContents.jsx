import React, { useEffect, useState } from "react";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { Link } from "react-router-dom";
import { FiLink, FiTwitter, FiLinkedin } from "react-icons/fi";

export const TableOfContents = ({ title }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let observer;
    let mutationObserver;

    const scanHeadings = () => {
      const articleBody = document.querySelector("article");
      if (!articleBody) return;

      const elements = Array.from(articleBody.querySelectorAll(".article-prose-content h2, .article-prose-content h3, .faq-heading"));
      const parsedHeadings = elements.map((elem, index) => {
        let id = elem.id;
        if (!id) {
          id = (elem.textContent || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `heading-${index}`;
          elem.id = id;
        }
        
        let text = (elem.textContent || "").replace(/^#+\s/, "");
        if (elem.classList.contains("faq-heading")) {
          text = "FAQ";
        }
        
        return {
          id,
          text,
          level: elem.tagName.toLowerCase() === "h2" ? 2 : 3,
        };
      });

      setHeadings(parsedHeadings);

      // Intersection Observer for highlighting the active heading
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -60% 0px" }
      );

      elements.forEach((elem) => observer.observe(elem));
    };

    // Initial scan with a small delay for first render
    const timeout = setTimeout(() => {
      scanHeadings();
      
      // Setup MutationObserver to watch for any late-rendered elements (like FAQs or dynamic content)
      const articleBody = document.querySelector("article");
      if (articleBody) {
        mutationObserver = new MutationObserver(() => {
          scanHeadings();
        });
        mutationObserver.observe(articleBody, { childList: true, subtree: true });
      }
    }, 150);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [title]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] flex flex-col hidden lg:flex w-72 flex-shrink-0">
      <h4 className="text-[12px] font-extrabold text-neutral-800 uppercase tracking-widest mb-6">
        Table of Contents
      </h4>
      <div className="overflow-y-auto flex-1 pr-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <nav className="flex flex-col gap-4">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`text-[13px] text-left transition-all block leading-relaxed ${
                activeId === heading.id
                  ? "text-[#CA8A04] font-extrabold"
                  : "text-neutral-500 hover:text-neutral-900 font-medium"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(heading.id);
                if (target) {
                  // Fallback to scrollIntoView which works universally
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-4 pt-6 flex flex-col gap-6">
        <a href="https://app.flowbee.io/auth/register" target="_blank" rel="noopener noreferrer">
          <Button className="w-full !bg-[#FFD400] hover:!bg-[#E6BF00] active:scale-[0.98] !text-black !font-extrabold !py-3 !rounded-xl transition-all shadow-[4px_4px_0px_0px_#C9A000] hover:shadow-[2px_2px_0px_0px_#C9A000] text-sm flex items-center justify-center border-none">
            Get Started
          </Button>
        </a>
        <div>
          <h4 className="text-[11px] font-bold text-neutral-800 uppercase tracking-widest mb-3">
            Share
          </h4>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              className="!px-3 !py-1.5 !rounded-lg !border !border-gray-300 !bg-white hover:!bg-gray-50 !text-xs !font-bold !text-neutral-700 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <FiLink size={14} />
              <span>Copy Link</span>
            </Button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title || "")}&url=${encodeURIComponent(window.location.href)}`}
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
    </div>
  );
};
