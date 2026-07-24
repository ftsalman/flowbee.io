import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import { Button } from "../../../../lib/turtle-ui/components";
import {
  BLOG_CATEGORIES,
  LATEST_POSTS,
  TRENDING_POSTS,
  ALL_POSTS,
} from "../../../constants/blogData";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStoredBlogs } from "../../blog-admins/blogs-creation/utils/blogStorage";

export const BlogGrid = ({ searchTerm }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [customPosts, setCustomPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      let localPosts = [];
      let firestorePosts = [];

      try {
        localPosts = await getStoredBlogs();
      } catch (error) {
        console.error("Error fetching locally published blogs:", error);
      }

      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        firestorePosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error("Error fetching blogs from Firestore:", error);
      }

      const uniquePosts = [...localPosts, ...firestorePosts].filter(
        (post, index, posts) =>
          posts.findIndex((candidate) => String(candidate.id) === String(post.id)) === index
      );
      uniquePosts.sort(
        (a, b) =>
          new Date(b.createdAt || b.date || 0) - new Date(a.createdAt || a.date || 0)
      );
      setCustomPosts(uniquePosts);
    };

    fetchBlogs();
  }, []);

  const mergedAllPosts = [...customPosts, ...ALL_POSTS];
  const mergedLatestPosts = [...customPosts, ...LATEST_POSTS];

  // Filter posts based on search term AND active category
  const filteredPosts = mergedAllPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categoryLabel?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAFBFD] pb-24">
      {/* ==================================
          LATEST BLOGS SECTION
      =================================== */}
      {!searchTerm && (
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
                Fresh Off The Press
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                Latest Blogs
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mergedLatestPosts.map((post) => (
              <BlogCard key={`latest-${post.id}`} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ==================================
          TRENDING BLOGS SECTION
      =================================== */}
      {!searchTerm && (
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
                Most Read This Week
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                Trending Blogs
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRENDING_POSTS.map((post) => (
              <BlogCard key={`trending-${post.id}`} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ==================================
          CATEGORIES & ALL BLOGS SECTION
      =================================== */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="categories-section">
        <div className="text-center md:text-left mb-8">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">
            Explore By Topic
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Categories
          </h2>
        </div>

        {/* Category Filter Pills using turtle-ui Button */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-gray-200 overflow-x-auto">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                size="sm"
                className={`!rounded-full !px-5 !py-2 !font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "!bg-[#FFD400] !text-black font-bold shadow-[2px_2px_0px_0px_#C9A000] scale-105"
                    : "!bg-white !text-neutral-700 hover:!bg-gray-100 border border-gray-200 shadow-sm"
                }`}
              >
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Results Count & Search Active Feedback */}
        {searchTerm && (
          <div className="mb-6 flex items-center justify-between bg-[#FEFCE8] p-4 rounded-xl border border-[#FFD400]/60">
            <span className="text-sm font-medium text-neutral-800">
              Showing results for <strong className="text-black">"{searchTerm}"</strong> in{" "}
              <strong className="text-black">
                {BLOG_CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </strong>
            </span>
            <Button
              size="xs"
              onClick={() => setActiveCategory("all")}
              className="!bg-transparent hover:!bg-[#FFD400]/30 !text-neutral-800 !font-bold !underline"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Blog Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={`post-${post.id}`} post={post} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No articles found</h3>
            <p className="text-neutral-500 max-w-md mx-auto mb-6 text-sm">
              We couldn't find any blog posts matching "{searchTerm}" in this category. Try selecting another topic or clearing your search.
            </p>
            <Button
              onClick={() => {
                setActiveCategory("all");
              }}
              size="sm"
              className="!bg-[#FFD400] !text-black !font-extrabold hover:!bg-[#E6BF00] shadow-[3px_3px_0px_0px_#C9A000]"
            >
              View All Posts
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};
