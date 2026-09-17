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

  const isIndia = selectedRegion.code === "INR";
  const options = isIndia
    ? [
        { id: "quarterly", label: "Quarterly" },
        { id: "halfYearly", label: "Half Yearly", badge: "15% OFF" },
        { id: "yearly", label: "Yearly", badge: "20% OFF" },
      ]
    : [
        { id: "monthly", label: "Monthly" },
        { id: "halfYearly", label: "Half Yearly", badge: "15% OFF" },
        { id: "yearly", label: "Yearly", badge: "20% OFF" },
      ];

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
                    layoutId="billingTabGlobal"
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
