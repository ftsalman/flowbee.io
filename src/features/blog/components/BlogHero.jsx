import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components";
import { HeroThreeBackground } from "./HeroThreeBackground";

export const BlogHero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="relative bg-white py-16 md:py-24 border-b border-gray-100 overflow-hidden">
      {/* 1. Google Antigravity 3D Vortex Dashes Element */}
      <HeroThreeBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/20 border border-[#FFD400]/50 text-neutral-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse" />
          Flowbee Insights & Updates
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-8 max-w-4xl mx-auto">
          Insights to Scale your Brand with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CA8A04] via-[#EAB308] to-[#CA8A04]">
            Conversations-Driven Growth
          </span>{" "}
          & AI-Powered Business Messaging
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Stay up-to-date with the latest news, WhatsApp API tutorials, e-commerce automation strategies, and AI agent innovations.
        </p>

        {/* Interactive Search Bar */}
        <div className="max-w-xl mx-auto relative flex items-center">
          <div className="relative w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Explore blog (e.g. WhatsApp, AI Agent, Shopify)..."
              className="w-full pl-12 pr-28 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-[#FFD400] focus:outline-none rounded-2xl text-neutral-800 placeholder-neutral-400 font-medium text-base transition-all duration-200 shadow-sm"
            />
            {/* Search Icon Left */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Clear or Search Button Right */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchTerm && (
                <Button
                  onClick={() => setSearchTerm("")}
                  className="!p-1.5 !bg-transparent !border-0 text-neutral-400 hover:text-neutral-600 !rounded-full hover:!bg-gray-100 transition-colors shadow-none"
                  title="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              )}
              <Button
                size="sm"
                className="!bg-[#FFD400] !text-black !font-extrabold !rounded-xl !px-4 !py-2 hover:!bg-[#E6BF00] shadow-[2px_2px_0px_0px_#C9A000] transition-all active:scale-95"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Admin Action for creating new blogs */}
        <div className="mt-8 flex justify-center">
          <Link to="/admin/create-blog">
            <Button size="sm" className="!bg-black !text-white !font-bold !rounded-xl !px-5 !py-2.5 hover:!bg-gray-800 transition-all shadow-sm flex items-center gap-2">
              <span>✍️</span>
              Create New Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
