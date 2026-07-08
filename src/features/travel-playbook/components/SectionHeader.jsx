import React from 'react';

export const SectionHeader = ({ num, title }) => (
  <header className="flex flex-col items-center justify-center mb-12 text-center px-4">
    <div className="text-[#0B2447] font-black tracking-widest uppercase text-[10px] md:text-xs border border-[#0B2447]/20 px-5 py-2 rounded-full bg-[#0B2447]/5 shadow-sm">
      {num} / {title}
    </div>
  </header>
);
