import React from "react";
import { FiSearch } from "react-icons/fi";
import { INTEGRATIONS } from "../constants/constants";
import { DataList } from "../../../../lib/turtle-ui/components/list/DataList";

export const SupportHeader = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 space-y-6 text-center">
      {/* Round search input container */}
      <div className="w-full max-w-xl relative">
        <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-gray-400">
          <FiSearch size={18} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Find modules ready to use on your Projects"
          className="w-full pl-12 pr-6 py-3.5 rounded-full border border-gray-200 bg-white shadow-sm focus:border-[#FFD400] focus:ring-4 focus:ring-[#FFD400]/20 focus:outline-none text-sm transition-all placeholder:text-gray-400 font-medium"
        />
      </div>

      {/* Integration circle badges using DataList custom component */}
      <DataList
        className="flex items-center justify-center gap-4 border-none p-0 bg-transparent shadow-none"
        data={INTEGRATIONS}
        render={(integ, idx) => {
          const Icon = integ.icon;
          return (
            <div
              key={idx}
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.04)] border border-gray-100 bg-white cursor-pointer hover:scale-105 transition-transform"
            >
              <Icon size={16} className={integ.color.split(" ")[0]} />
            </div>
          );
        }}
      />
    </div>
  );
};
