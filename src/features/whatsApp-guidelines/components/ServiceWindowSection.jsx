import React from 'react';
import { FiClock } from 'react-icons/fi';
import { stopRequestsList } from '../constants/guidelinesData';

export const ServiceWindowSection = () => (
  <div className="grid md:grid-cols-2 gap-8 print:block print:space-y-6">
    {/* 2. STOP Requests */}
    <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
      <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-red-500">2.</span> STOP / Unsubscribe Requests</h2>
      <p className="text-gray-500 font-medium mb-6 text-sm print:text-black">If a customer replies with “STOP”, “Unsubscribe”, “Don’t message me”, “Remove my number”, or any similar request, you should not send further marketing messages to that customer.</p>
      <div className="bg-[#111] text-white p-6 rounded-2xl mb-6 print:bg-gray-100 print:text-black print:border print:border-gray-300">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 print:text-gray-600">Recommended Line</p>
        <p className="font-medium italic">“To stop receiving these messages, reply STOP.”</p>
      </div>
      <ul className="space-y-2 text-sm text-gray-600 font-medium list-disc pl-5 print:text-black">
        {stopRequestsList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>

    {/* 3. 24-Hour Window */}
    <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
      <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-blue-500">3.</span> 24-Hour Service Window</h2>
      <p className="text-gray-500 font-medium mb-6 text-sm print:text-black">When a customer sends a message to your business on WhatsApp, you can send normal replies within the next 24 hours.</p>
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden print:bg-transparent print:border-gray-300">
        <FiClock className="absolute -right-4 -bottom-4 text-blue-100 print:hidden" size={100} />
        <div className="relative z-10 space-y-3 text-sm">
          <p className="text-blue-900 print:text-black"><span className="font-black block uppercase text-[10px] tracking-widest">Customer message received:</span> Real-Time Timestamp</p>
          <div className="w-full h-px bg-blue-200 print:bg-gray-300"></div>
          <p className="text-blue-900 print:text-black"><span className="font-black block uppercase text-[10px] tracking-widest">Normal replies can be sent until:</span> Rolling 24-Hour Boundary</p>
          <p className="text-blue-600 font-bold italic mt-4 text-xs print:text-black">After that, an approved template must be used.</p>
        </div>
      </div>
    </div>
  </div>
);
