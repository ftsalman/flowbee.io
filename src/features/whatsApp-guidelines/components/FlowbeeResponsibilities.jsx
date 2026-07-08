import React from 'react';
import { flowbeeResponsibilities } from '../constants/guidelinesData';

export const FlowbeeResponsibilities = () => (
  <div className="bg-gray-950 text-white p-8 lg:p-12 rounded-[2rem] shadow-xl print:bg-transparent print:text-black print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
      <span className="text-[#FFDD2D]">17.</span> Responsibilities When Using Flowbee.io
    </h2>
    <p className="text-gray-400 font-medium mb-6 print:text-black">When using Flowbee.io for WhatsApp automation, broadcast, chatbot, team inbox, templates, or catalog features, please follow these rules:</p>
    <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-gray-300 list-disc pl-5 print:text-black">
      {flowbeeResponsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
