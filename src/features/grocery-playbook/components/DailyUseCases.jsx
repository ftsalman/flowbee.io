import React from 'react';
import { SectionHeader } from './SectionHeader';
import { dailyUseCasesData } from '../constants/groceryData';

export const DailyUseCases = () => (
  <section id="use-cases" className="py-24 bg-gray-50 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Operations" title="How Supermarkets Use Flowbee.io Every Day" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {dailyUseCasesData.map((useCase, idx) => (
          <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all shadow-sm">
            <div className="w-12 h-12 bg-[#EAB308]/10 rounded-xl flex items-center justify-center mb-6">
              <useCase.icon className="text-xl text-[#EAB308]" />
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-3">{useCase.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed font-medium">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
