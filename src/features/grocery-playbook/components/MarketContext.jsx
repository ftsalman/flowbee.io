import React from 'react';
import { SectionHeader } from './SectionHeader';
import { marketContextData } from '../constants/groceryData';

export const MarketContext = () => (
  <section className="py-20 bg-gray-50 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="Market Context" title="Supermarket Customers Love Timely Offers" />
      
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-md">
        Supermarket purchases are highly repeat-based. Customers buy groceries weekly, sometimes daily. They look for price offers, fresh item updates, household essentials, and delivery options. Flowbee.io turns WhatsApp into your daily sales reminder.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketContextData.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#EAB308]/10 text-[#EAB308] rounded-xl flex items-center justify-center mb-5">
              <item.icon className="text-xl" />
            </div>
            <h3 className="text-md font-black text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
