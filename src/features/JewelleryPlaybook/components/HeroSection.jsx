import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HeroSection = ({ onPromoOpen }) => (
  <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-16 md:py-24 bg-white border-b border-gray-100">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-b from-white/95 via-white/85 to-white absolute inset-0 z-10"></div>
      <img src="/images/jewellery-hero-light.png" alt="Luxury Showroom Architecture" className="w-full h-full object-cover opacity-60" />
    </div>
    
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full max-w-5xl relative z-20 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#128C7E] rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 border border-[#25D366]/20 shadow-sm">
        <FaWhatsapp size={14} className="md:w-4 md:h-4" /> Official WhatsApp Showroom Architecture
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] text-gray-900">
        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">Jewellery Buyers</span> Are On WhatsApp. <br className="hidden md:block" />
        Close The Sale Natively.
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto px-4 md:px-0">
        Transform your showroom's digital presence. From instant 22k & 24k gold rate queries to seamless bridal catalog browsing—manage your entire high-ticket sales pipeline directly through WhatsApp.
      </p>
      <nav className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 relative z-10 px-4 sm:px-0">
         <button 
           onClick={onPromoOpen}
           className="w-full sm:w-auto bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-black hover:shadow-xl hover:shadow-[#B8860B]/30 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 md:gap-3"
         >
           Initialize Showroom Setup <FiArrowRight size={18} className="md:w-5 md:h-5" />
         </button>
         <a 
           href="https://wa.me/919846287369?text=Hi%20Flowbee%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20Automation%20for%20my%20Jewellery%20Business."
           target="_blank"
           rel="noopener noreferrer"
           className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-black hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-2 md:gap-3 shadow-sm"
         >
           <FaWhatsapp className="text-[#25D366] text-xl md:text-2xl" /> Talk to an Expert
         </a>
      </nav>
    </motion.div>
  </section>
);
