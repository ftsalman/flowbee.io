import React from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { Card, DataList } from "../../../../lib/turtle-ui/components";
import { tiers } from "../constants/affiliateData";

export const CommissionTiersSection = () => {
  return (
    <section
      id="tiers"
      className="py-16 lg:py-32 bg-[#fafafa] border-y border-gray-100 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-16 lg:mb-24">
        <h2 className="text-2xl lg:text-5xl font-black tracking-tighter mb-4 uppercase italic text-[#111]">
          Commission Tiers.
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-[10px]">
          Unlock higher rewards as you scale
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {tiers.map((tier, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="h-full flex">
            <Card
              className={`${tier.bg} !p-8 lg:!p-10 !rounded-3xl lg:!rounded-[3.5rem] !border ${tier.border} flex flex-col items-center text-center !shadow-xl transition-all duration-500 group w-full`}
            >
              <div
                className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-[2rem] bg-white flex items-center justify-center text-2xl lg:text-3xl mb-6 lg:mb-8 shadow-inner group-hover:scale-110 transition-transform ${tier.color}`}
              >
                <FiAward />
              </div>
              <h3 className="text-xl lg:text-xl font-black mb-1 uppercase tracking-tighter">
                {tier.name}
              </h3>
              <div
                className={`text-4xl lg:text-2xl font-black mb-6 lg:mb-8 ${tier.color} tracking-tighter`}
              >
                {tier.rate}
              </div>

              <DataList
                data={[
                  {
                    label: "India Goal",
                    value: tier.india,
                    valueClass: "text-[#111]",
                  },
                  {
                    label: "UAE Goal",
                    value: tier.uae,
                    valueClass: "text-[#111]",
                  },
                  {
                    label: "Validity",
                    value: tier.period,
                    valueClass: "text-blue-600 italic font-bold",
                  },
                ]}
                className="!grid !grid-cols-1 !gap-4 text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-200 pt-6 lg:pt-8 w-full"
                render={(item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center w-full"
                  >
                    <span>{item.label}</span>{" "}
                    <span className={item.valueClass}>{item.value}</span>
                  </div>
                )}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
