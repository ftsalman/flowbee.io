import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';
import { faqData } from '../constants/travelData';

export const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader num="Support" title="Frequently Asked Questions" />
        
        <div className="space-y-4 mt-12">
          {faqData.map((faq, idx) => (
            <article key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 font-bold text-md text-slate-900 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="flex items-center gap-4"><FiHelpCircle className="text-[#1959D1] text-xl" /> {faq.q}</span>
                <FiChevronDown className={`text-slate-400 transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 border-t border-slate-100 text-sm text-slate-600 leading-relaxed font-medium bg-slate-50">
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
