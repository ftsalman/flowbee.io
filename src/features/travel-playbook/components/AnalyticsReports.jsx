import React from 'react';
import { SectionHeader } from './SectionHeader';
import { analyticsLabels } from '../constants/travelData';

export const AnalyticsReports = () => (
  <section className="py-24 bg-slate-50 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Analytics" title="Know What Is Happening in Your Travel WhatsApp Sales" />
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
        Flowbee.io gives your team clear visibility into enquiries, follow-ups, campaigns, and staff performance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {analyticsLabels.map((label, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all">
            <p className="text-xs md:text-xs font-bold whitespace-nowrap text-slate-800">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
