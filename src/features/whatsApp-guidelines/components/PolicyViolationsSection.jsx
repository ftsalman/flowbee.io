import React from 'react';

export const PolicyViolationsSection = () => (
  <div className="grid md:grid-cols-3 gap-6 print:block print:space-y-6">
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <h3 className="text-lg font-black text-[#111] mb-3"><span className="text-gray-400">14.</span> Policy Violations</h3>
      <p className="text-gray-500 text-sm font-medium print:text-black">Actions may include Warning, Template rejection/pause, Reduced sending limit, Phone number restriction, or WhatsApp Business Account disablement.</p>
    </div>
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <h3 className="text-lg font-black text-[#111] mb-3"><span className="text-gray-400">15.</span> If Restricted</h3>
      <p className="text-gray-500 text-sm font-medium print:text-black">Check Account Quality section. Prepare details for appeal: Business legal name, WABA ID, Template copy, Opt-in proof, and Corrective action taken.</p>
    </div>
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <h3 className="text-lg font-black text-[#111] mb-3"><span className="text-gray-400">16.</span> Customer Database</h3>
      <p className="text-gray-500 text-sm font-medium print:text-black">Must be legally collected (existing customers, web registrations, QR opt-ins). <strong>Avoid:</strong> Purchased lists, scraped online contacts, or third-party shared databases.</p>
    </div>
  </div>
);
