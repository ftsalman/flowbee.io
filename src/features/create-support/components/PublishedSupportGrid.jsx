import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";

export const PublishedSupportGrid = ({
  publishedArticles,
  handleEditArticle,
  handleDeleteArticle,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 mt-12">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-0.5">
            Admin Storage
          </span>
          <h3 className="text-xl font-extrabold text-neutral-900">
            Published Custom Articles ({publishedArticles.length})
          </h3>
        </div>
        <Link to="/support">
          <Button
            size="sm"
            className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !rounded-xl !px-4 !py-2 shadow-[2px_2px_0px_0px_#C9A000] transition-all"
          >
            View All Live →
          </Button>
        </Link>
      </div>

      {publishedArticles.length === 0 ? (
        <div className="text-center py-12 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
          <div className="text-3xl mb-2">📭</div>
          <h4 className="font-bold text-neutral-800">
            No custom support articles published yet
          </h4>
          <p className="text-xs text-neutral-500 mt-1">
            Use the editor above to publish your very first support article to the live site!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedArticles.map((post) => (
            <Card
              key={post.id}
              className="bg-[#FAFBFD] border border-gray-200 rounded-2xl p-4 flex flex-col justify-between gap-4 relative group"
            >
              <div className="flex items-start gap-3">
                <img
                  src={post.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"}
                  alt={post.title}
                  className="w-16 h-16 rounded-xl object-cover border border-gray-200 flex-shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#CA8A04] uppercase block mb-0.5">
                    {post.categoryLabel || post.categoryId || "Support"}
                  </span>
                  <h4 className="font-bold text-sm text-neutral-900 line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <span className="text-[11px] text-neutral-400 mt-1 block">
                    Published on {post.createdDate || post.createdAt?.substring(0, 10)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                  <span>●</span> Live on Site
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEditArticle(post)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline px-2 py-1 rounded hover:bg-blue-50 transition-all"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteArticle(post.id)}
                    className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline px-2 py-1 rounded hover:bg-red-50 transition-all"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
