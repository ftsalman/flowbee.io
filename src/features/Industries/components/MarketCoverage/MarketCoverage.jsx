import React from "react";
import { DataList, Card } from "../../../../../lib/turtle-ui/components";
import { MARKET_COVERAGE_DATA } from "../../constants/industriesData";

export const MarketCoverage = () => {
  return (
    <section className="py-20 lg:py-20 bg-[#111] text-white lg:rounded-[6rem] lg:mx-6 my-10 px-6 overflow-hidden relative shadow-2xl z-10">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter mb-4 lg:mb-6 uppercase">
            Market Coverage.
          </h2>
          <p className="text-gray-500 font-medium text-sm lg:text-lg italic px-4">
            Engineered to scale every vertical.
          </p>
        </div>
        <DataList
          data={MARKET_COVERAGE_DATA}
          className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 !gap-4 lg:!gap-8"
          render={(box, i) => (
            <Card
              key={i}
              className="!bg-white/5 !p-8 lg:!p-12 !rounded-3xl lg:!rounded-[3.5rem] !border !border-white/10 hover:!bg-white hover:!text-[#111] !transition-all !duration-500 !flex !flex-col !justify-between !min-h-[180px] lg:!min-h-[220px] group !shadow-none hover:!shadow-2xl"
            >
              <div className="text-3xl lg:text-4xl text-[#FFDD2D] mb-6 lg:mb-8 group-hover:scale-110 transition-transform">
                {box.icon}
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-black mb-3 lg:mb-4 leading-none">
                  {box.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-500 font-medium text-xs lg:text-sm leading-relaxed">
                  {box.description}
                </p>
              </div>
            </Card>
          )}
        />
      </div>
    </section>
  );
};
