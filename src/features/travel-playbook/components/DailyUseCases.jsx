import React from 'react';
import { SectionHeader } from './SectionHeader';
import { dailyUseCasesData } from '../constants/travelData';

export const DailyUseCases = () => (
  <section id="use-cases" className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader num="Operations" title="How Travel Businesses Use Flowbee Every Day" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {dailyUseCasesData.map((useCase, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-md transition-all">
            <useCase.icon className="text-3xl text-[#0B2447] mb-5" />
            <h3 className="text-xl font-black text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
