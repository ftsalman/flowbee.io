import React from 'react';
import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import { privacyHeaderData } from '../constants/privacyData';

export const PrivacyHeader = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8 text-yellow-400 text-4xl border border-gray-100">
            <FiShield />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Effective Date: {privacyHeaderData.effectiveDate}</p>
          <div className="p-4 bg-white inline-block rounded-2xl border border-gray-100 shadow-sm text-xs font-bold text-gray-500 uppercase tracking-tighter">
            Entity: {privacyHeaderData.entity}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
