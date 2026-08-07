import React from "react";

export const ArticleHero = ({ post }) => {
  return (
    <>
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-neutral-900 tracking-tight leading-[1.2] mb-6 break-words">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-base sm:text-lg text-neutral-500 leading-relaxed font-normal mb-8">
        {post.excerpt}
      </p>

      {/* Author Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-4 text-sm mb-10">
        
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-lg overflow-hidden">
            {post.authorImage ? (
              <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
            ) : (
              (post.author || "J")[0]
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-neutral-400 leading-none">Written by</span>
            <span className="font-bold text-neutral-900 leading-none">
              {post.author || "Jane Smith"}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-4 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium text-neutral-600 bg-transparent">
            {post.categoryLabel || "Insights"}
          </span>
          <span className="px-4 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium text-neutral-600 bg-transparent">
            {post.date || "March 5, 2024"}
          </span>
          <span className="px-4 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium text-neutral-600 bg-transparent">
            {post.readTime || "4 min read"}
          </span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="rounded-3xl overflow-hidden bg-gray-100 w-full mb-12 relative aspect-[16/10]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};
