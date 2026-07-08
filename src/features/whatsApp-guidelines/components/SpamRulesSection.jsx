import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { spamExamplesList } from '../constants/guidelinesData';

export const SpamRulesSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-orange-500">8.</span> Avoid Spam-Style Messages</h2>
    <p className="text-gray-500 font-medium mb-6 print:text-black">WhatsApp takes customer feedback seriously. If customers block, report, or negatively respond to your messages, your account quality may be affected.</p>
    
    <div className="mb-8">
      <h4 className="font-bold text-[#111] mb-3">Messages may be considered spam when you:</h4>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 list-disc pl-5 print:text-black">
        {spamExamplesList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-red-50 p-6 rounded-3xl border border-red-100 print:bg-transparent print:border-gray-300">
        <p className="font-black text-red-800 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 print:text-black"><FiXCircle size={16}/> Message style to avoid</p>
        <p className="text-red-900 font-bold italic print:text-black">“🔥🔥 LAST CHANCE!!! BUY NOW!!! 90% OFF!!! CLICK FAST!!! 🔥🔥”</p>
      </div>
      <div className="bg-green-50 p-6 rounded-3xl border border-green-100 print:bg-transparent print:border-gray-300">
        <p className="font-black text-green-800 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 print:text-black"><FiCheckCircle size={16}/> Better message style</p>
        <p className="text-green-900 font-medium print:text-black">“Hi {'{{customer_name}}'}, our special offer is now available. Reply to know more. To stop receiving updates, reply STOP.”</p>
      </div>
    </div>
  </div>
);
