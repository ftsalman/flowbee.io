import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';
import { faqData } from '../constants/groceryData';

export const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader num="Support" title="Frequently Asked Questions" />
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-gray-900">Everything You Need to Know</h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <article key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 font-bold text-base md:text-md text-gray-900 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="flex items-center gap-4"><FiHelpCircle className="text-[#EAB308] text-2xl shrink-0" /> {faq.q}</span>
                <FiChevronDown className={`text-gray-400 transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 border-t border-gray-200 text-sm md:text-md text-gray-600 leading-relaxed font-medium bg-white">
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
