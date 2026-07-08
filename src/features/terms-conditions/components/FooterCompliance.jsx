import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export const FooterCompliance = () => (
  <section className="py-24 bg-white text-center border-t border-gray-50 opacity-30">
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 grayscale">
      <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.3em]">
        <FiCheckCircle /> UAE Law
      </div>
      <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.3em]">
        <FiCheckCircle /> GDPR Ready
      </div>
      <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.3em]">
        <FiCheckCircle /> GCC Standards
      </div>
    </div>
  </section>
);
