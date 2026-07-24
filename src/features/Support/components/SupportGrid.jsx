import React from "react";
import { FiArrowRight, FiMessageSquare, FiMoreVertical } from "react-icons/fi";
import { CATEGORIES } from "../constants/constants";
import { DataList } from "../../../../lib/turtle-ui/components/list/DataList";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";

export const SupportGrid = ({
  selectedCategory,
  setSelectedCategory,
  filteredModules,
  visibleCount,
  handleShowMore,
  activeCategoryLabel,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
      {/* Left sidebar: By Category */}
      <div className="lg:col-span-3 space-y-8">
        <div className="bg-transparent space-y-4">
          <h3 className="text-base font-black text-gray-700 tracking-tight px-1">
            By Category
          </h3>

          {/* Category list using custom DataList component */}
          <DataList
            className="flex flex-row flex-wrap lg:flex-col gap-2 border-none p-0 bg-transparent shadow-none"
            data={CATEGORIES}
            render={(cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-[13px] font-bold rounded-full transition-all text-left flex items-center gap-2 cursor-pointer border-none outline-none ${
                    isActive
                      ? "bg-[#FFD400] text-black shadow-md shadow-[#FFD400]/20 border border-[#CA8A04]/40"
                      : "bg-white text-gray-500 hover:text-gray-900 border border-gray-100 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            }}
          />
        </div>

        {/* Request feedback container */}
        <div className="bg-transparent border border-gray-100 p-1 space-y-2.5">
          <h4 className="text-[13px] font-black text-gray-800">
            Can't find what you need?
          </h4>
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            You can request a new category for your field of work.
          </p>
          <button className="text-xs font-bold text-[#CA8A04] hover:text-[#E6BF00] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none">
            <span>Request Category</span>
            <FiArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Right container: Grid of cards */}
      <div className="lg:col-span-9 space-y-8">
        {/* Category section title */}
        <div>
          <h2 className="text-lg font-black text-gray-700 text-left">
            Popular Modules for{" "}
            <span className="text-[#CA8A04]">"{activeCategoryLabel}"</span>
          </h2>
        </div>

        {/* Grid cards using custom DataList and Card components */}
        <DataList
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-none p-0 bg-transparent shadow-none"
          data={filteredModules.slice(0, visibleCount)}
          render={(mod, idx) => (
            <Card
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all flex flex-col overflow-hidden group cursor-pointer p-0"
            >
              {/* Card Top / Image banner */}
              <div className="h-32 w-full overflow-hidden relative bg-gray-100">
                <img
                  src={
                    mod.image ||
                    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
                  }
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#CA8A04] shadow-sm">
                  <FiMessageSquare size={14} />
                </div>
                {/* Action Menu */}
                <button className="absolute top-2.5 right-2.5 p-1 rounded-full bg-white/95 backdrop-blur-md text-gray-500 hover:text-gray-800 transition-colors shadow-sm border-none cursor-pointer">
                  <FiMoreVertical size={14} />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between flex-1 min-h-[90px] text-left">
                <h4 className="font-extrabold text-[13px] text-gray-900 leading-snug group-hover:text-[#CA8A04] transition-colors line-clamp-2">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-2 mt-1">
                  {mod.desc}
                </p>
              </div>
            </Card>
          )}
        />

        {/* Show more button using custom Button component */}
        {filteredModules.length > visibleCount && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleShowMore}
              className="!px-6 !py-2.5 !rounded-full !border !border-[#FFD400] !bg-white !text-xs !font-bold !text-black shadow-sm hover:!bg-gray-50 transition-colors cursor-pointer"
            >
              Show 6 More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
