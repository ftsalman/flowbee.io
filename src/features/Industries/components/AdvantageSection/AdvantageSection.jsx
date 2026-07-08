import React from "react";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { ADVANTAGE_DATA } from "../../constants/industriesData";

export const AdvantageSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white px-6 text-center z-10 relative">
      <DataList
        data={ADVANTAGE_DATA}
        className="!max-w-4xl !mx-auto !grid !grid-cols-2 md:!grid-cols-4 !gap-8 lg:!gap-12"
        render={(item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 lg:gap-4"
          >
            <div className="text-2xl lg:text-3xl text-[#25D366]">
              {item.icon}
            </div>
            <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-gray-400">
              {item.title}
            </span>
          </div>
        )}
      />
    </section>
  );
};
