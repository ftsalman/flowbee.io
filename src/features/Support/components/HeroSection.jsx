import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { InputBox } from "../../../../lib/turtle-ui/components/input-box/InputBox";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";

export const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section 
      className="w-full bg-[#FFD400]/90 pt-20 pb-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/hero-bg-pattern.png')`,
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[40px] font-bold tracking-tight text-black mb-8"
        >
          Let's get you the answers you need.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-[800px] mx-auto flex items-center"
        >
          <FiSearch className="absolute left-6 text-gray-800 w-5 h-5 z-10" />
          <InputBox 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for articles..."
            className="!pl-14 !pr-6 !py-4 !rounded-xl !text-[16px] !bg-white placeholder-gray-500 !text-black border-none !w-full shadow-lg focus:!ring-2 focus:!ring-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

