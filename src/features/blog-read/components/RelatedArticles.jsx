import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { DataList } from "../../../../lib/turtle-ui/components/list/DataList";
import { BlogCard } from "../../blog/components/BlogCard";

export const RelatedArticles = ({ relatedPosts }) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-center sm:text-left">
        <div>
          <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
            Keep Reading
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Related Articles You Might Enjoy
          </h3>
        </div>
        <Link to="/blog">
          <Button size="sm" className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !rounded-xl !px-6 !py-2.5 shadow-[3px_3px_0px_0px_#C9A000] active:scale-95 transition-all w-full sm:w-auto">
            View All Posts →
          </Button>
        </Link>
      </div>

      <DataList
        data={relatedPosts}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        render={(relPost) => (
          <BlogCard key={`related-${relPost.id}`} post={relPost} />
        )}
      />
    </section>
  );
};
