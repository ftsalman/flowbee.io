import React from 'react';

export const SectionHeader = ({ num, title }) => (
  <header className="flex flex-col items-center justify-center mb-10 md:mb-16 text-center px-4">
    <div className="text-[#B8860B] font-black tracking-widest uppercase text-[10px] md:text-xs lg:text-sm border border-[#B8860B]/30 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#B8860B]/5 shadow-sm">
      {num} / {title}
    </div>
  </header>
);
