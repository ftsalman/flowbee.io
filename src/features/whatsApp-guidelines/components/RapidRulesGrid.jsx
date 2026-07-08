import React from 'react';
import { FiUserCheck, FiLock, FiAlertOctagon, FiShoppingCart } from 'react-icons/fi';

export const RapidRulesGrid = () => (
  <div className="grid sm:grid-cols-2 gap-6 print:block print:space-y-6">
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-black text-gray-300">9.</span>
        <FiUserCheck className="text-blue-500 text-2xl"/>
      </div>
      <h3 className="text-lg font-black text-[#111] mb-2">Keep Your Business Profile Accurate</h3>
      <p className="text-gray-500 font-medium text-sm print:text-black">Your profile should be clear and accurate. Must include: correct name, logo, website, support phone, email, address, description, and working hours. Do not pretend to be another entity.</p>
    </div>

    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-black text-gray-300">10.</span>
        <FiLock className="text-red-500 text-2xl"/>
      </div>
      <h3 className="text-lg font-black text-[#111] mb-2">Do Not Request Sensitive Info</h3>
      <p className="text-gray-500 font-medium text-sm print:text-black">Avoid requesting full credit card numbers, CVVs, bank passwords, net banking details, OTPs, full ID numbers, or health data. Use a secure form link instead.</p>
    </div>

    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-black text-gray-300">11.</span>
        <FiAlertOctagon className="text-orange-500 text-2xl"/>
      </div>
      <h3 className="text-lg font-black text-[#111] mb-2">Restricted / Prohibited Categories</h3>
      <p className="text-gray-500 font-medium text-sm print:text-black">Alcohol, Tobacco, Drugs, Gambling, Adult products, Weapons, Fake documents, Payday loans, and Multi-level marketing require special attention or are prohibited.</p>
    </div>

    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:p-4 print:break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-black text-gray-300">12.</span>
        <FiShoppingCart className="text-purple-500 text-2xl"/>
      </div>
      <h3 className="text-lg font-black text-[#111] mb-2">Catalog / E-commerce Usage</h3>
      <p className="text-gray-500 font-medium text-sm print:text-black">Ensure accurate product details, pricing, delivery info, and refund policy. Avoid adding prohibited products, fake items, misleading images, or incorrect prices.</p>
    </div>
  </div>
);
