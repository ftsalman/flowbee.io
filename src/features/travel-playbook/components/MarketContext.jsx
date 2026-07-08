import React from 'react';
import { SectionHeader } from './SectionHeader';
import { marketContextData } from '../constants/travelData';

export const MarketContext = () => (
  <section className="py-20 bg-slate-50 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Market Context" title="Travel Customers Want Fast Answers Before They Book" />
      
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-md">
        Today’s travel buyers compare multiple agencies. They ask questions on WhatsApp, check prices, request package details, confirm visa requirements, and expect quick support. WhatsApp is your lead capture tool, sales channel, and support desk.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketContextData.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#0B2447]/5 text-[#0B2447] rounded-xl flex items-center justify-center mb-5">
              <item.icon className="text-md" />
            </div>
            <h3 className="text-md font-black text-[#0B2447] mb-2">{item.title}</h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
