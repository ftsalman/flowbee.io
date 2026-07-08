import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-40 px-6">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="max-w-6xl mx-auto bg-[#25D366] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
        <h2 className="text-4xl lg:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">Elevate Your Business.</h2>
        <p className="text-white font-black text-sm lg:text-xl mb-12 tracking-widest uppercase opacity-80 italic">Ready to automate? Join the hive today.</p>
        <a href="https://app.flowbee.io/auth/register" target="_blank" rel="noreferrer" className="bg-[#111] text-white px-10 py-5 lg:px-16 lg:py-8 rounded-[2rem] lg:rounded-[3rem] text-lg lg:text-3xl font-black hover:bg-white hover:text-[#25D366] transition-all shadow-2xl inline-flex items-center gap-4 group">Start Free Trial <FiArrowRight className="group-hover:translate-x-2 transition-transform"/></a>
      </motion.div>
    </section>
  );
};
