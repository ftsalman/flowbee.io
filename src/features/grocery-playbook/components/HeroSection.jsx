import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HeroSection = ({ onOpenPromo }) => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-20 bg-white border-b border-gray-100">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-b from-white/95 via-white/90 to-white absolute inset-0 z-10"></div>
      <img src="/images/grocery-hero-bg.png" alt="Supermarket Operations" className="w-full h-full object-cover opacity-100" />
    </div>
    
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full max-w-6xl relative z-20 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366]/10 text-[#128C7E] rounded-full text-[10px] md:text-[10px] font-black uppercase tracking-widest mb-8 border border-[#25D366]/20 shadow-sm">
        <FaWhatsapp size={14} /> Official Supermarket WhatsApp API
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-5 leading-[1.1] text-gray-900">
        Your Supermarket Offers Should Reach Customers <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-[#CA8A04]">Before They Decide Where to Shop.</span>
      </h1>
      
      <p className="text-sm md:text-md lg:text-lg text-gray-600 font-medium leading-relaxed mb-6 max-w-4xl px-4">
        With Flowbee.io, send daily offers, weekend deals, and fresh item updates directly through WhatsApp — without getting blocked.
      </p>
      
      <p className="text-sm md:text-md text-gray-500 font-medium leading-relaxed mb-12 max-w-3xl px-4">
        Supermarket customers buy frequently and respond quickly to timely offers. If your fresh produce deals or combo offers reach them at the right time, they are more likely to visit your store. Manage replies, enquiries, and chats from one platform.
      </p>

      <nav className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full px-6 sm:px-0">
         <button 
           onClick={onOpenPromo}
           className="w-full sm:w-auto bg-[#EAB308] text-black px-10 py-2 rounded-2xl text-base md:text-md font-black hover:bg-[#CA8A04] hover:shadow-2xl hover:shadow-[#EAB308]/30 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-3"
         >
           Book Free Demo <FiArrowRight size={20} />
         </button>
         <a 
           href="#use-cases"
           className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 px-10 py-5 rounded-2xl text-base md:text-md font-black hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-3 shadow-sm"
         >
           See Supermarket Use Cases
         </a>
      </nav>

      {/* Floating Message Visual Simulation */}
      <div className="mt-16 w-full max-w-lg mx-auto relative h-40 hidden md:block">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-0 left-0 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 text-sm font-bold text-gray-800 flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> “Weekend Grocery Deals Are Live!”
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-4 right-0 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 text-sm font-bold text-gray-800 flex items-center gap-2 z-20">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span> “Buy 1 Get 1 Free on Selected Items”
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-12 right-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 text-sm font-bold text-gray-800 flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> “Fresh Fruits Offer Today”
        </motion.div>
      </div>
    </motion.div>
  </section>
);
