import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

export const ExternalLinks = () => (
  <div className="text-center pt-8 pb-4 print:hidden">
    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Stay Updated</p>
    <a 
      href="https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-2 text-sm font-black text-[#111] border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
    >
      Official Meta Policy Enforcement Documentation <FiExternalLink />
    </a>
  </div>
);
