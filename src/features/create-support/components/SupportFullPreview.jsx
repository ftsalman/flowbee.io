import React from "react";
import { motion } from "framer-motion";

export const SupportFullPreview = ({ previewArticle, setActiveTab }) => {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm max-w-4xl mx-auto space-y-8">
      <div className="border-b border-gray-200 pb-8 space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FFD400]/20 text-neutral-800 border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider">
          {previewArticle.categoryLabel}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
          {previewArticle.title || "Untitled Article"}
        </h1>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="flex items-center gap-3">
            {previewArticle.authorImage ? (
              <img src={previewArticle.authorImage} alt="Author" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-500 font-bold">
                {previewArticle.author ? previewArticle.author.charAt(0) : "?"}
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">
                {previewArticle.author || "Flowbee Support Team"}
              </span>
              <span className="text-[13px] text-gray-500">
                {previewArticle.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {previewArticle.image && (
        <div className="rounded-2xl overflow-hidden max-h-[420px] shadow-sm border border-gray-200 bg-white">
          <img
            src={previewArticle.image}
            alt="Cover"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      )}

      <div className="prose prose-lg prose-gray max-w-none text-neutral-800 space-y-4 text-base leading-relaxed font-normal [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:pl-1 [&_li]:mb-1.5 whitespace-pre-wrap ql-editor">
        <div dangerouslySetInnerHTML={{ __html: previewArticle.content || "<p>Your article content will appear here.</p>" }} />
      </div>

      <div className="pt-8 border-t border-gray-200 text-center">
        <button
          onClick={() => setActiveTab({ id: "editor", label: "📝 Editor" })}
          className="bg-[#FFD400] text-black font-extrabold rounded-xl px-8 py-3 shadow-[3px_3px_0px_0px_#C9A000] hover:bg-[#E6BF00] hover:shadow-[1px_1px_0px_0px_#C9A000] active:scale-[0.98] transition-all"
        >
          ← Return to Editor
        </button>
      </div>
    </div>
  );
};
