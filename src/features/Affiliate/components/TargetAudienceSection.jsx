import React from "react";
import { Card } from "../../../../lib/turtle-ui/components";
import { targetAudience } from "../constants/affiliateData";

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#111] text-white lg:rounded-[6rem] lg:mx-6 my-8 lg:my-12 px-6 lg:px-8 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 lg:mb-24 gap-6 text-center md:text-left">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">
            Built for <br />
            <span className="text-[#FFDD2D]">Growth.</span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-lg max-w-sm font-medium italic">
            "Whether you have 100 followers or 1,000 clients, there is a
            place for you."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {targetAudience.map((box, i) => {
            const Icon = box.icon;
            return (
              <Card
                key={i}
                className="!bg-white/5 !p-8 lg:!p-12 !rounded-3xl lg:!rounded-[4rem] !border !border-white/5 hover:!bg-white hover:!text-[#111] transition-all duration-700 group flex flex-col justify-between min-h-[180px] lg:min-h-[250px] !shadow-none cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-2xl bg-white/5 group-hover:bg-[#FFDD2D]/10 flex items-center justify-center text-xl lg:text-xl text-[#FFDD2D] mb-6 lg:mb-2 transition-colors">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black mb-3 lg:mb-4 leading-none tracking-tighter">
                    {box.t}
                  </h3>
                </div>
                <p className="text-xs lg:text-xs text-gray-400 group-hover:text-gray-500 font-medium leading-relaxed">
                  {box.d}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
