import React from "react";
import { FiSearch } from "react-icons/fi";
import { InputBox } from "../../../../lib/turtle-ui/components/input-box/InputBox";

export const Navbar = ({ setActiveCategory, setActiveModule }) => {
  return (
    <>
      {/* Top Yellow Brand Accent Strip */}
      <div className="h-1 bg-[#FFD400] w-full" />
      <div className="w-full bg-white border-b border-gray-100 py-3 text-center flex items-center justify-center gap-2 text-[13px] font-semibold text-gray-600">
        <span role="img" aria-label="megaphone">📢</span>
        Welcome to our newly launched help center
      </div>

      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Flowbee Logo" className="h-5 md:h-6 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-gray-500">
          <button onClick={() => { setActiveCategory(null); setActiveModule(null); }} className="hover:text-black transition-colors cursor-pointer">Categories</button>
          <a href="#" className="hover:text-black transition-colors">FAQ</a>
          <a href="#" className="hover:text-black transition-colors">Support</a>
          <div className="relative group ml-4 flex items-center">
             <FiSearch className="absolute left-3.5 z-10 text-gray-400 group-focus-within:text-black transition-colors" />
             <InputBox 
               placeholder="Search..." 
               className="pl-10 !w-48 focus:!w-64 transition-all !bg-white !rounded-xl"
             />
          </div>
        </div>
      </nav>
    </>
  );
};
