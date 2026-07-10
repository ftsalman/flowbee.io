import React from 'react';
import { SectionHeader } from './SectionHeader';
import { frictionBlocksData } from '../constants/jewelleryData';

export const FrictionBlocks = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <SectionHeader num="Resolution" title="Eradicate Showroom Friction" />
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-gray-900">Solve Systemic Communication Bottlenecks</h2>
        <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto">Unmanaged conversations cause severe pipeline drop-offs. Stop losing money to operational inefficiencies.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {frictionBlocksData.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-200 transition-all shadow-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <item.icon className="text-lg md:text-xl" />
            </div>
            <h3 className="text-md md:text-lg font-black mb-2 md:mb-3 text-gray-900">{item.title}</h3>
            <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
