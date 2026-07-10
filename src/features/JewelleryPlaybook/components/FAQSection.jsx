import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiChevronDown } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';
import { faqData } from '../constants/jewelleryData';

export const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <SectionHeader num="Technical Specs" title="System Capabilities" />
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-gray-900">Infrastructure & Deployment Specifications</h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqData.map((faq, idx) => (
            <article key={idx} className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-4 md:p-6 font-bold text-sm md:text-base lg:text-md text-gray-900 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-3 md:gap-4"><FiMonitor className="text-[#B8860B] text-lg md:text-xl shrink-0" /> {faq.q}</span>
                <FiChevronDown className={`text-gray-500 transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 md:p-6 border-t border-gray-100 text-xs md:text-sm lg:text-md text-gray-600 leading-relaxed font-medium bg-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
