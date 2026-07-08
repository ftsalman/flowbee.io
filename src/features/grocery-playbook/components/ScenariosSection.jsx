import React from 'react';
import { SectionHeader } from './SectionHeader';
import { scenariosData } from '../constants/groceryData';

export const ScenariosSection = () => (
  <section className="py-24 bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader num="Scenarios" title="Real Supermarket Scenarios" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {scenariosData.map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all">
            <h4 className="text-xl font-black text-gray-900 mb-3">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
