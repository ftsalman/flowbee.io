import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/pricingUtils";

export const PricingHeader = ({ billingCycle, setBillingCycle, currency }) => {
  const isIndia = currency.code === "INR";
  const options = isIndia
    ? [
        { id: "quarterly", label: "Quarterly" },
        { id: "halfYearly", label: "Half Yearly", badge: "15% OFF" },
        { id: "yearly", label: "Yearly", badge: "20% OFF" },
      ]
    : [
        { id: "monthly", label: "Monthly" },
        { id: "quarterly", label: "Quarterly" },
        { id: "yearly", label: "Yearly", badge: "20% OFF" },
      ];

  return (
    <section className="text-center px-6 py-12 lg:py-20 bg-[#fafafa]">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-none text-[#111]">
          Plan Your Success.
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="flex bg-gray-200 p-1 rounded-full shadow-inner relative overflow-x-auto max-w-full">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setBillingCycle(opt.id)}
                className={`relative px-3 py-2 lg:px-6 lg:py-2 rounded-full text-[10px] lg:text-sm font-black uppercase tracking-widest transition-colors z-10 whitespace-nowrap flex items-center gap-1 lg:gap-2 ${
                  billingCycle === opt.id ? "text-[#111]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {billingCycle === opt.id && (
                  <motion.div
                    layoutId="billingTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span>{opt.label}</span>
                {opt.badge && (
                  <span className="text-[8px] lg:text-[9px] text-[#25D366] animate-pulse">
                    🎉 {opt.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
