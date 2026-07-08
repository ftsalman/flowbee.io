import React from 'react';
import { checklistItems } from '../constants/guidelinesData';

export const ChecklistSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-6"><span className="text-[#25D366]">13.</span> Checklist Before Sending a Broadcast</h2>
    <p className="text-gray-500 font-medium mb-6 print:text-black">Before sending any broadcast, please confirm the following:</p>
    
    <div className="overflow-hidden rounded-2xl border border-gray-100 print:border-gray-300">
      <table className="w-full text-left bg-white">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 print:bg-transparent print:border-gray-300">
            <th className="p-4 font-black uppercase text-xs tracking-widest text-gray-400 print:text-black">Check Point</th>
            <th className="p-4 font-black uppercase text-xs tracking-widest text-gray-400 w-32 text-center print:text-black">Confirm</th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium text-gray-600 print:text-black">
          {checklistItems.map((item, index) => (
            <tr key={index} className="border-b border-gray-50 print:border-gray-200">
              <td className="p-4">{item}</td>
              <td className="p-4 text-center font-black text-[#25D366]">Yes / No</td>
            </tr>
          ))}
          <tr>
            <td className="p-4">Was a campaign recently sent to the same audience?</td>
            <td className="p-4 text-center font-black text-red-500">Yes / No</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
