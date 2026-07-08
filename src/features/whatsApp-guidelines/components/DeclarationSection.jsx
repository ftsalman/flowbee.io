import React from 'react';

export const DeclarationSection = () => (
  <div className="bg-[#FFDD2D]/10 p-8 lg:p-10 rounded-[2rem] border border-[#FFDD2D]/20 print:bg-transparent print:border-b print:border-gray-300 print:rounded-none print:px-0 print:break-inside-avoid">
    <h3 className="text-xl font-black text-[#111] mb-4 flex items-center gap-3">
      <span className="text-[#111]">18.</span> Customer Declaration
    </h3>
    <p className="italic text-gray-600 font-medium leading-relaxed print:text-black">
      By using Flowbee.io for WhatsApp broadcast or automation, the customer confirms the following: <br /><br />
      "I confirm that the contacts I upload have given permission to receive WhatsApp messages from my business. I understand that sending broadcasts to numbers without consent may result in WhatsApp account restrictions. I also agree to exclude customers who reply STOP / unsubscribe from future marketing messages."
    </p>
  </div>
);
