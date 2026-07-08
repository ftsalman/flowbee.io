import React from 'react';
import { FiCheckCircle, FiCheck, FiXCircle } from 'react-icons/fi';
import { acceptableConsentExamples, practicesToAvoid } from '../constants/guidelinesData';

export const ConsentSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-6"><span className="text-[#25D366]">1.</span> Customer Consent Is Required</h2>
    <p className="text-gray-500 font-medium mb-8 print:text-black">Before sending WhatsApp messages to a customer, the customer must have given permission to receive messages from your business. Having a customer’s mobile number alone is not enough. You should only send offers, updates, reminders, order messages, promotional messages, or broadcasts to customers who have agreed to receive WhatsApp communication.</p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-green-50 p-8 rounded-3xl border border-green-100 print:bg-transparent print:border-gray-300">
        <h4 className="font-black text-green-800 mb-6 flex items-center gap-2 print:text-black"><FiCheckCircle size={20}/> Acceptable Consent Examples</h4>
        <ul className="space-y-3 text-sm text-green-900 font-medium print:text-black">
          {acceptableConsentExamples.map((item, idx) => (
            <li key={idx} className="flex gap-3"><FiCheck className="shrink-0 mt-1" /> {item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-3xl border border-red-100 print:bg-transparent print:border-gray-300">
        <h4 className="font-black text-red-800 mb-6 flex items-center gap-2 print:text-black"><FiXCircle size={20}/> Practices to Avoid</h4>
        <ul className="space-y-3 text-sm text-red-900 font-medium print:text-black">
          {practicesToAvoid.map((item, idx) => (
            <li key={idx} className="flex gap-3"><FiXCircle className="shrink-0 mt-1" /> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
