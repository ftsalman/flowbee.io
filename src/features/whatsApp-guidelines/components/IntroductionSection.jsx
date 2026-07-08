import React from 'react';
import { FiInfo, FiExternalLink } from 'react-icons/fi';

export const IntroductionSection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-none print:p-0 print:shadow-none">
    <h2 className="text-xl font-black flex items-center gap-3 mb-4 text-[#111]">
      <span className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center print:hidden"><FiInfo size={20}/></span>
      Dear Customer,
    </h2>
    <p className="text-gray-500 leading-relaxed font-medium print:text-black">
      When using the WhatsApp Business Platform through Flowbee.io to communicate with customers, it is important to comply fully with Meta / WhatsApp policies. Flowbee.io provides access to send unlimited WhatsApp messages based entirely on your approved Meta messaging limits. These limits and direct messaging fees are controlled directly by Meta to protect customer ecosystems.
    </p>
    <a 
      href="https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement" 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors print:hidden"
    >
      View Latest Meta Policy Updates <FiExternalLink />
    </a>
  </div>
);
