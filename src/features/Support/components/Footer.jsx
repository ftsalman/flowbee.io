import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">Categories</a>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">Support</a>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">Components</a>
        </div>
        <div className="text-center text-[13px] font-medium text-gray-400">
          © Help — {new Date().getFullYear()}. Powered by Flowbee.
        </div>
      </div>
    </footer>
  );
};
