import React from 'react';

export const SectionHeader = ({ num, title }) => (
  <header className="flex flex-col items-center justify-center mb-12 text-center px-4">
    <div className="text-[#EAB308] font-black tracking-widest uppercase text-[10px] md:text-xs border border-[#EAB308]/30 px-5 py-2 rounded-full bg-[#EAB308]/10 shadow-sm">
      {num} // {title}
    </div>
  </header>
);
