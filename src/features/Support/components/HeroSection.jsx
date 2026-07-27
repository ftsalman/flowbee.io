import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { InputBox } from "../../../../lib/turtle-ui/components/input-box/InputBox";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";

export const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section 
      className="w-full bg-[#111827] pt-28 pb-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('/svg/skyline-bg.svg')`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '1440px 400px'
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black tracking-tight text-white mb-10"
        >
          Need some help?
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-2xl mx-auto mb-8 flex items-center"
        >
          <FiSearch className="absolute left-5 text-gray-400 w-5 h-5 z-10" />
          <InputBox 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for articles, topics..."
            className="!pl-12 !pr-32 !py-6 !rounded-2xl !text-[17px] !bg-white !shadow-xl !w-full"
          />
          <div className="absolute right-2">
             <Button variant="secondary" className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black font-extrabold !px-6 !py-2.5 !rounded-xl border-none shadow-[0px_4px_14px_rgba(201,160,0,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95">
               Search
             </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-gray-400"
        >
          <span className="text-gray-300">Popular topics:</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-[#FFD400] text-gray-200 transition-colors shadow-sm backdrop-blur-sm">Profile</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-[#FFD400] text-gray-200 transition-colors shadow-sm backdrop-blur-sm">Support</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-[#FFD400] text-gray-200 transition-colors shadow-sm backdrop-blur-sm">Refunds</span>
        </motion.div>
      </div>
    </section>
  );
};

