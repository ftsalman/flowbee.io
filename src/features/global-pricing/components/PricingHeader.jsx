import React from "react";
import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { regions } from "../constants/pricingData";

export const PricingHeader = ({
  selectedRegion,
  setSelectedRegion,
  billingCycle,
  setBillingCycle,
}) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="text-center px-6 py-12 lg:py-20 bg-[#fafafa]">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] lg:text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-200">
          <FiGlobe size={16} /> International Pricing Directory
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-none text-[#111]">
          Global Plans. <br className="hidden md:block" /> Local Scale.
        </h1>

        {/* REGION SELECTOR TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region.code}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-xs font-black uppercase tracking-widest transition-all ${
                selectedRegion.code === region.code
                  ? "bg-[#111] text-white shadow-lg scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* BILLING CYCLE TOGGLE */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 lg:gap-6 bg-white p-2 rounded-full border border-gray-200 shadow-sm">
            <span
              className={`text-[10px] lg:text-xs font-black uppercase tracking-widest pl-4 ${billingCycle === "monthly" ? "text-black" : "text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              className="w-14 lg:w-16 h-7 lg:h-8 bg-gray-200 rounded-full p-1 flex items-center relative"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                className="w-5 h-5 lg:w-6 lg:h-6 bg-[#111] rounded-full shadow-md"
              />
            </button>
            <div className="text-left pr-4 relative">
              <span
                className={`text-[10px] lg:text-xs font-black uppercase tracking-widest ${billingCycle === "yearly" ? "text-black" : "text-gray-400"}`}
              >
                Yearly
              </span>
              <span className="block text-[8px] lg:text-[9px] font-black text-[#25D366] animate-pulse absolute -right-6 -top-4 bg-white px-2 py-1 rounded shadow-md border border-gray-100 whitespace-nowrap">
                🎉 20% OFF
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
