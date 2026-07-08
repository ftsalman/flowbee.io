import React from 'react';
import { summaryChecklist } from '../constants/guidelinesData';

export const SummarySection = () => (
  <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-black text-[#111] mb-4">19. Important Note</h2>
        <p className="text-gray-500 font-medium leading-relaxed text-sm print:text-black">
          To use the WhatsApp Business Platform safely, customer consent, relevant messaging, correct template usage, opt-out handling, and policy compliance are very important. Sending bulk messages without following policy guidelines may reduce account quality, restrict message sending, or disable the WhatsApp Business Account.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-black text-[#111] mb-4">20. Summary Checklist</h2>
        <ul className="text-gray-500 font-medium text-sm space-y-1 list-disc pl-5 print:text-black">
          {summaryChecklist.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
