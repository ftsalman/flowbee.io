import React from 'react';
import { SectionHeader } from './SectionHeader';
import { scenariosData } from '../constants/travelData';

export const ScenariosSection = () => (
  <section className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Scenarios" title="Real Travel Scenarios Where Flowbee.io Helps" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {scenariosData.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
            <h4 className="text-md font-black text-[#0B2447] mb-3">{item.title}</h4>
            <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
