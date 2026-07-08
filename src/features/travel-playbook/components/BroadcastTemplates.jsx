import React from 'react';
import { SectionHeader } from './SectionHeader';
import { broadcastTemplatesData } from '../constants/travelData';

export const BroadcastTemplates = () => (
  <section className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Templates" title="Example Travel Broadcast Templates" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {broadcastTemplatesData.map((template, idx) => (
          <div key={idx} className="border border-slate-200 bg-slate-50 p-6 rounded-3xl shadow-sm">
            <span className={`text-[10px] bg-${template.typeColor}-100 text-${template.typeColor}-800 font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block`}>
              {template.type}
            </span>
            <p className="text-sm font-medium text-slate-800 italic">{template.content}</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-white border px-2 py-1 rounded text-[10px] font-bold">{template.cta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
