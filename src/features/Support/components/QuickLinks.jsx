import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const QuickLinks = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-32">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl font-bold tracking-tight text-gray-900 mb-8"
      >
        Quick links
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div className="space-y-0">
          {["Getting started with the API", "How to reset your password", "Understanding billing and invoices"].map((link, i) => (
            <div key={i} className="group flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:border-gray-900 transition-colors">
              <span className="font-semibold text-[15px] text-gray-800">{link}</span>
              <FiArrowUpRight className="text-gray-400 group-hover:text-gray-900 transition-colors" />
            </div>
          ))}
        </div>
        <div className="space-y-0">
          {["Configuring team permissions", "Webhooks and integrations", "Security policies"].map((link, i) => (
            <div key={i} className="group flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:border-gray-900 transition-colors">
              <span className="font-semibold text-[15px] text-gray-800">{link}</span>
              <FiArrowUpRight className="text-gray-400 group-hover:text-gray-900 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
