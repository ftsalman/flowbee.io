import React from "react";
import { FiCheck } from "react-icons/fi";

export const ArticleBody = ({ displayContent }) => {
  // Pre-process HTML content to ensure h2 and h3 have IDs for the Table of Contents
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(displayContent);
  let processedContent = displayContent.replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ");

  if (isHtml) {
    processedContent = processedContent.replace(
      /<(h[23])([^>]*)>(.*?)<\/\1>/gi,
      (match, tag, attrs, content) => {
        if (/id=/i.test(attrs)) return match; // already has ID
        // Create clean ID from text content
        const text = content.replace(/<[^>]+>/g, ""); // strip inner tags
        const id =
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `heading-${Math.random().toString(36).substr(2, 5)}`;
        return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
      }
    );
  }

  return (
    <div className="article-prose-content prose max-w-none text-[#5A5A5A] text-[17px] leading-[1.8] font-normal break-words overflow-hidden [&_p]:mb-7 last:[&_p]:mb-0 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-neutral-900 [&_h1]:mt-12 [&_h1]:mb-6 [&_h2]:scroll-mt-24 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:text-neutral-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:scroll-mt-24 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-neutral-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_a]:text-blue-600 [&_a]:font-medium [&_a]:no-underline [&_a]:transition-colors hover:[&_a]:underline hover:[&_a]:text-blue-700">
      {isHtml ? (
        <div
          className="whitespace-pre-wrap [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:rounded-xl [&_video]:w-full [&_video]:rounded-xl [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:pl-1 [&_li]:mb-1.5 [&_.ql-align-center]:text-center [&_.ql-align-right]:text-right [&_.ql-align-justify]:!text-left"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div className="whitespace-pre-wrap">
          {displayContent
            .replace(/&nbsp;/g, " ")
            .replace(/\u00A0/g, " ")
            .split("\n\n")
            .map((para, idx) => {
              if (para.trim().startsWith("# ")) {
                const text = para.replace("# ", "").trim();
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <h2
                    key={idx}
                    id={id}
                    className="text-2xl sm:text-3xl font-extrabold text-neutral-900 pt-8 pb-2 border-b border-gray-100 tracking-tight"
                  >
                    {text}
                  </h2>
                );
              }
              if (para.trim().startsWith("## ")) {
                const text = para.replace("## ", "").trim();
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <h3
                    key={idx}
                    id={id}
                    className="text-xl sm:text-2xl font-bold text-neutral-900 pt-6 tracking-tight flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#CA8A04] inline-block" />
                    <span>{text}</span>
                  </h3>
                );
              }
              if (para.trim().startsWith("- ")) {
                const items = para.split("\n").filter((l) => l.trim().startsWith("- "));
                return (
                  <ul key={idx} className="space-y-3 pl-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheck className="text-[#CA8A04] mt-1 flex-shrink-0" size={16} />
                        <span
                          className="text-neutral-700"
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace("- ", "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (/^\d+\.\s/.test(para.trim())) {
                const items = para.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
                return (
                  <ol key={idx} className="space-y-4 my-6 pl-4 border-l-2 border-[#FFD400]">
                    {items.map((item, i) => (
                      <li key={i} className="text-neutral-700">
                        <strong className="font-bold text-black mr-2">#{i + 1}</strong>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^\d+\.\s/, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                          }}
                        />
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p
                  key={idx}
                  className="text-neutral-700 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                  }}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
