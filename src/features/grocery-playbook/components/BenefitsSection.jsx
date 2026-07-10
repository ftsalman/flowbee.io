import React from 'react';
import { benefitsData } from '../constants/groceryData';

export const BenefitsSection = () => (
  <section className="py-24 bg-[#111827] text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 tracking-tight">Why Supermarkets Choose Flowbee.io</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefitsData.map((benefit, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-left hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-bold text-[#EAB308] mb-4">{benefit.title}</h3>
            <p className="text-gray-300 text-[14px] leading-relaxed font-medium">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
