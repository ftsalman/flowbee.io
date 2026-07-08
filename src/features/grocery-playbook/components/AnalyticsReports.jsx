import React from 'react';
import { SectionHeader } from './SectionHeader';
import { analyticsLabels } from '../constants/groceryData';

export const AnalyticsReports = () => (
  <section className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader num="Analytics" title="Track Your Campaign Performance" />
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-gray-900">Know Exactly What Drives Sales</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Flowbee.io helps you understand how your WhatsApp campaigns and customer conversations are performing in real-time.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {analyticsLabels.map((label, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:border-[#EAB308]/50 transition-colors">
            <p className="text-xs md:text-sm font-bold text-gray-800">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
