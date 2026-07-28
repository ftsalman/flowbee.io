import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F8F9FA] pt-16 pb-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-[15px] font-medium text-gray-500">Flowbee.io Help Center</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors">Terms & Conditions</a>
          <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors">Trust</a>
        </div>
      </div>
    </footer>
  );
};
