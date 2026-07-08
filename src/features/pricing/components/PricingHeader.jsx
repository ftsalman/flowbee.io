import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/pricingUtils";

export const PricingHeader = ({ billingCycle, setBillingCycle }) => {
  return (
    <section className="text-center px-6 py-12 lg:py-20 bg-[#fafafa]">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-none text-[#111]">
          Plan Your Success.
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            <span
              className={`text-[10px] lg:text-xs font-black uppercase tracking-widest ${billingCycle === "monthly" ? "text-yellow-400" : "text-gray-300"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              className="w-12 lg:w-14 h-7 lg:h-7 bg-gray-200 rounded-full p-1 flex items-center cursor-pointer"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full shadow-md"
              />
            </button>
            <div className="text-left flex items-center gap-2">
              <span
                className={`text-[10px] lg:text-xs font-black uppercase tracking-widest ${billingCycle === "yearly" ? "text-yellow-400" : "text-gray-300"}`}
              >
                Yearly
              </span>
              <span className="block text-[8px] lg:text-[9px] font-black text-[#25D366] animate-pulse">
                🎉 20% OFF
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
