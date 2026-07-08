import React, { useState } from "react";
import { BlogHero } from "../components/BlogHero";
import { BlogGrid } from "../components/BlogGrid";
import { BlogNewsletter } from "../components/BlogNewsletter";

export const Blogpage = () => {
      const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-white selection:bg-[#FFD400]/40 selection:text-black">
      {/* 1. Wati-style Hero & Interactive Search Section */}
      <BlogHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 2. Latest Posts, Trending Posts & Category Filter Grid */}
      <BlogGrid searchTerm={searchTerm} />

      {/* 3. Bottom CTA & Newsletter Subscription Section */}
      <BlogNewsletter />
    </div>
  );
};
