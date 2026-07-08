import React from 'react';
import { FiPrinter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const GuidelinesHeader = ({ onPrint }) => (
  <>
    {/* --- HERO HEADER & PRINT BUTTON (Hidden on Print) --- */}
    <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 print:hidden">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 text-[#25D366] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          <FaWhatsapp size={14} /> Official Policy Guidelines
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111] leading-[1.1]">
          WhatsApp Business <br /> <span className="text-gray-400">Platform Usage & Pricing</span>
        </h1>
      </div>
      <button 
        onClick={onPrint}
        className="bg-[#111] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#25D366] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 shrink-0"
      >
        <FiPrinter size={20} /> Print Document
      </button>
    </div>

    {/* --- PRINT ONLY HEADER (Visible only on Print) --- */}
    <div className="hidden print:block text-center mb-10 border-b border-gray-300 pb-8">
      <h1 className="text-4xl font-black text-black">WhatsApp Business Platform Usage Guidelines</h1>
      <p className="text-gray-600 mt-2 font-bold uppercase tracking-widest text-xs">Customer Guidance & Meta Pricing Document - Flowbee.io</p>
    </div>
  </>
);
