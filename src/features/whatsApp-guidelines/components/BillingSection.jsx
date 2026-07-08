import React from 'react';
import { FiTrendingDown, FiExternalLink } from 'react-icons/fi';
import { billingCategories } from '../constants/guidelinesData';

export const BillingSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-amber-600">5.</span> Meta Official Direct Billing (0% Flowbee Markup)</h2>
    <p className="text-gray-500 font-medium mb-6 print:text-black">
      Meta charges are calculated on a **24-hour conversation model** based on specific interaction categories. Unlike alternate software providers, **Flowbee.io does not add any extra markup or per-message surcharges** on top of Meta fees. You pay the exact official cost directly to Meta.
    </p>

    <div className="bg-[#B8860B]/5 border border-[#B8860B]/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
      <FiTrendingDown className="text-[#B8860B] text-xl shrink-0" />
      <p className="text-sm font-bold text-[#B8860B] leading-tight m-0">Pricing transparency: Flowbee passes 100% of standard Meta platform charges straight through without premium hidden markups.</p>
    </div>

    <div className="overflow-x-auto rounded-xl border border-gray-100 print:border-gray-300">
      <table className="w-full text-left bg-white text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 print:bg-transparent print:border-gray-300">
            <th className="p-4 font-black text-xs text-gray-400 uppercase tracking-widest print:text-black">Meta Conversation Category</th>
            <th className="p-4 font-black text-xs text-gray-400 uppercase tracking-widest print:text-black">Functional Billing Operational Context</th>
          </tr>
        </thead>
        <tbody className="font-medium text-gray-600 print:text-black">
          {billingCategories.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-50 print:border-gray-200">
              <td className="p-4 font-bold text-gray-900">{item.category}</td>
              <td className="p-4">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-4 text-center">
      <a 
        href="https://whatsappbusiness.com/products/platform-pricing/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"
      >
        Review Real-Time Localized Country Tariff Tables on Meta's Platform Pricing Guide <FiExternalLink />
      </a>
    </div>
  </div>
);
