import React from 'react';
import { SectionHeader } from './SectionHeader';
import { scenariosData } from '../constants/jewelleryData';

export const ScenariosGrid = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-white border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader num="Implementations" title="Strategic Use Cases" />
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-gray-900">Deployment Scenarios for Enterprise Retailers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {scenariosData.map((scenario, i) => (
          <article key={i} className="border border-gray-200 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 bg-gray-50 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-black text-gray-900 text-md md:text-lg mb-3 md:mb-4">{scenario.title}</h4>
            <p className="text-gray-600 text-sm md:text-md leading-relaxed font-medium">{scenario.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
