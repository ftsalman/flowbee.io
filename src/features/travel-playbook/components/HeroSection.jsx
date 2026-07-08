import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HeroSection = ({ onOpenPromo }) => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-20 bg-white border-b border-slate-100">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-b from-white/95 via-white/90 to-white absolute inset-0 z-10"></div>
      <img src="/images/travel-hero-bg.png" alt="Travel Agency Operations" className="w-full h-full object-cover opacity-100" />
    </div>
    
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full max-w-6xl relative z-20 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366]/10 text-[#128C7E] rounded-full text-[10px] md:text-[10px] font-black uppercase tracking-widest mb-8 border border-[#25D366]/20 shadow-sm">
        <FaWhatsapp size={16} /> Official Travel CRM Architecture
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.1] text-[#0B2447]">
        Your Next Travel Booking May Start With <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1959D1] to-[#0B2447]">One WhatsApp Message.</span>
      </h1>
      
      <p className="text-lg md:text-xl lg:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-4xl px-4">
        Flowbee.io Helps You Convert It Faster.
      </p>
      
      <p className="text-sm md:text-md text-slate-500 font-medium leading-relaxed mb-10 max-w-3xl px-4">
        From holiday package enquiries to visa updates, ticket booking, hotel reservations, itinerary sharing, payment reminders, and customer support — manage every WhatsApp conversation professionally.
      </p>

      <nav className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full px-6 sm:px-0">
         <button 
           onClick={onOpenPromo}
           className="w-full sm:w-auto bg-[#0B2447] text-white px-10 py-5 rounded-2xl text-base md:text-md font-black hover:shadow-2xl hover:shadow-[#0B2447]/30 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-3"
         >
           Book Free Demo <FiArrowRight size={20} />
         </button>
         <a 
           href="#use-cases"
           className="w-full sm:w-auto bg-white border-2 border-slate-200 text-[#0B2447] px-10 py-5 rounded-2xl text-base md:text-md font-black hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-3 shadow-sm"
         >
           See Travel Use Cases
         </a>
      </nav>

      {/* Hero Chat Visual */}
      <div className="mt-16 w-full max-w-md mx-auto text-left">
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-3">
          <div className="bg-slate-100 text-slate-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm font-medium">
            “Do you have Dubai tour packages?”
          </div>
          <div className="bg-[#0B2447] text-white p-3 rounded-2xl rounded-tr-none self-end max-w-[85%] text-sm font-medium">
            “Yes! Please choose your travel type.”
            <div className="mt-3 flex flex-col gap-2">
              <button className="bg-white/10 text-white py-1.5 px-3 rounded-lg text-xs font-bold text-center border border-white/20">Family Trip</button>
              <button className="bg-white/10 text-white py-1.5 px-3 rounded-lg text-xs font-bold text-center border border-white/20">Honeymoon</button>
              <button className="bg-white/10 text-white py-1.5 px-3 rounded-lg text-xs font-bold text-center border border-white/20">Group Tour</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
