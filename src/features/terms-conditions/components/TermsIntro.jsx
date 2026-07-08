import React from 'react';
import { tableOfContents } from '../constants/termsData';

export const TermsIntro = () => {
  return (
    <>
      <div className="p-8 bg-gray-50 border-l-4 border-[#FFDD2D] rounded-r-3xl mb-12">
        <p className="text-sm font-medium text-[#111]">
          This comprehensive Terms and Conditions / End User License Agreement ("Agreement" or "EULA") is entered into by and between <strong>Task Force Technologies Est.</strong> (“Task force”, “We”, “Us”, or “Our”), a company incorporated under the laws of the United Arab Arab Emirates (UAE), having its principal office at Dubai, United Arab Emirates Or <strong>Sharaco Technologies Pvt Ltd</strong> (“Sharaco”, “We”, “Us”, or “Our”), a company incorporated under the laws of India, having its principal office at (Pattambi, Palakkad, Kerala, India) and any person or entity ("You", "Your", "Customer", or "User") accessing or using Flowbee.io, a chat flow business automation software available at (flowbee.io).
        </p>
        <p className="text-sm font-medium text-[#111] mt-4">
          By accessing, using, subscribing to, or otherwise engaging with the Flowbee.io platform and related services (collectively, "Services"), You agree to be bound by the terms of this Agreement. This Agreement, including all referenced annexes, applies to Your use of the Services whether accessed through the website, mobile applications, APIs, third-party integrations, or any other means.
        </p>
      </div>

      <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
        <h3 className="font-black text-[#111] uppercase tracking-widest text-xs mb-6">Table of Contents</h3>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[11px] font-bold uppercase text-gray-400 list-decimal pl-5">
          {tableOfContents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};
