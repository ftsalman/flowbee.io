import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogCard } from "../../../blog/components/BlogCard";
import { LATEST_POSTS } from "../../../../constants/blogData";
import { db } from "../../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStoredBlogs } from "../../../blog-admins/blogs-creation/utils/blogStorage";
import { Button } from "../../../../../lib/turtle-ui/components";

export const HomeBlogSection = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

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
        firestorePosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching blogs from Firestore:", error);
      }

      const uniquePosts = [...localPosts, ...firestorePosts].filter(
        (post, index, posts) =>
          posts.findIndex(
            (candidate) => String(candidate.id) === String(post.id),
          ) === index,
      );

      uniquePosts.sort(
        (a, b) =>
          new Date(b.createdAt || b.date || 0) -
          new Date(a.createdAt || a.date || 0),
      );

      const mergedLatestPosts = [...uniquePosts, ...LATEST_POSTS];

      // Get the top 3 latest posts
      setLatestBlogs(mergedLatestPosts.slice(0, 3));
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-[#111]">
              Latest from our <span className="text-[#25D366]">Blog.</span>
            </h2>
            <p className="text-gray-500 font-medium mt-4 text-sm lg:text-base max-w-xl">
              Discover insights, strategies, and tips to scale your business
              with WhatsApp automation.
            </p>
          </div>
          <Link to="/blog">
            <Button className="!bg-[#111] !text-white hover:!bg-black font-bold px-6 py-2.5 rounded-full shadow-md">
              View All Posts
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((post) => (
            <BlogCard key={`home-blog-${post.id}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
