import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

export const TermsHeader = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-[#fafafa] border-b border-gray-100 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 text-[#FFDD2D] text-4xl border border-gray-50">
            <FiFileText />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">Terms & Conditions</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-8 italic">End User License Agreement (EULA)</p>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDD2D]/10 blur-[100px] rounded-full"></div>
    </section>
  );
};
