import React from 'react';
import { FiMail } from 'react-icons/fi';
import { contactInfo } from '../constants/privacyData';

export const ContactInfo = () => (
  <section className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-xl">
    <h2 className="text-2xl font-black flex items-center gap-2 mb-4 text-yellow-400">
      <FiMail /> {contactInfo.title}
    </h2>
    <div className="space-y-2 opacity-90 text-sm">
      <p>{contactInfo.companyLine1}</p>
      <p>{contactInfo.companyLine2}</p>
      <p className="font-bold pt-4 text-lg">{contactInfo.email}</p>
      <p className="text-xs text-gray-400 pt-4 tracking-widest uppercase">{contactInfo.responseTime}</p>
    </div>
  </section>
);
