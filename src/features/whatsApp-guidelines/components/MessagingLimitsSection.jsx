import React from 'react';
import { messagingTiers } from '../constants/guidelinesData';

export const MessagingLimitsSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-green-600">4.</span> Meta Messaging Tiers & Automatic Upgrades</h2>
    <p className="text-gray-500 font-medium mb-6 print:text-black">
      WhatsApp messaging volume boundaries are controlled entirely by Meta. Limits apply to the number of **unique customers** your business can message in a rolling 24-hour period. Limits scale up automatically based on account verification status, usage frequency, and maintaining high message quality metrics.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-medium">
      {messagingTiers.map((tier, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 p-5 rounded-2xl print:border-gray-300 print:bg-transparent">
          <span className="block text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">{tier.tier}</span>
          <h4 className="font-black text-gray-900 text-lg mb-2">{tier.limit}</h4>
          <p className="text-xs text-gray-500 leading-relaxed">{tier.desc}</p>
        </div>
      ))}
    </div>
  </div>
);
