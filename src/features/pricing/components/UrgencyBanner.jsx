import React from "react";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

export const UrgencyBanner = () => {
  return (
    <div className="bg-[#111] text-white py-2 text-center overflow-hidden border-b border-white/10 sticky top-0 lg:static z-[100]">
      <motion.p
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] flex items-center justify-center gap-2 px-4"
      >
        <FiClock className="text-[#FFDD2D]" /> Limited Time: Secure 2026
        rates before upcoming updates!
      </motion.p>
    </div>
  );
};
