import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

export const MetaCharges = () => {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-32 border-y border-gray-100 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tighter text-[#111]">Meta Platform Fees</h2>
        <p className="text-gray-500 font-medium mb-10 text-sm lg:text-lg">Meta (WhatsApp) conversation charges are separate from Flowbee platform fees. They are billed based on conversation categories (Marketing, Utility, Authentication, and Service).</p>
        <a href="https://business.whatsapp.com/products/platform-pricing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#111] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-[#25D366] transition-all shadow-xl">Latest Meta Charges <FiExternalLink/></a>
      </div>
    </section>
  );
};
