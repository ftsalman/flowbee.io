import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const BroadcastSection = () => (
  <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/broadcast-pattern-dark.png" alt="Retail Pattern" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>
    </div>

    <div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10">
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#EAB308]/20 text-[#EAB308] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#EAB308]/30">
          <FiTarget size={16} /> The Core Supermarket Engine
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white">
          Powerful WhatsApp Broadcasts <br className="hidden lg:block"/>
          <span className="text-[#EAB308]">Without Risking Number Bans.</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
          Offers change daily. With Flowbee.io's Official API, your supermarket can send promotional messages, weekend deals, and festival offers to 10,000+ customers instantly, safely, and legally.
        </p>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mt-16">
        
        <div className="relative w-full flex justify-center items-center">
          <img src="/images/showcase-supermarket-broadcast.png" alt="Supermarket Broadcast Campaigns" className="w-[90%] md:w-[80%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(234,179,8,0.15)] border border-gray-800" />
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-black mb-4 text-white">Daily, Weekly, and Festival Offers</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Stop manually messaging everyone. Automate your outreach and ensure the right deal hits the right phone at the exact moment they are deciding where to buy groceries.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#EAB308]/50 transition-colors">
              <h4 className="font-bold text-[#EAB308] mb-3 text-lg">Broadcast Use Cases</h4>
              <ul className="text-sm text-gray-300 space-y-2 font-medium">
                <li>• Weekend special deals</li>
                <li>• Fresh fruits & veg updates</li>
                <li>• Meat and fish offers</li>
                <li>• Buy 1 Get 1 promotions</li>
                <li>• Monthly combo packs</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#EAB308]/50 transition-colors">
              <h4 className="font-bold text-[#EAB308] mb-3 text-lg">Festival Campaigns</h4>
              <ul className="text-sm text-gray-300 space-y-2 font-medium">
                <li>• Ramadan bulk offers</li>
                <li>• Eid special discounts</li>
                <li>• Diwali sweet boxes</li>
                <li>• Back-to-school snacks</li>
                <li>• Clearance sale alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
