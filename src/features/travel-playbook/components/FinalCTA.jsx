import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const FinalCTA = ({ onOpenPromo }) => (
  <section className="py-32 bg-[#0B2447] text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 z-0">
       <img src="/images/cta-travel-bg.png" alt="Travel Pattern" className="w-full h-full object-cover opacity-10" />
    </div>

    <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
        Make Your Travel WhatsApp Faster, Smarter, and More Organized
      </h2>
      <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-3xl mx-auto">
        Flowbee.io helps tours and travels businesses manage enquiries, automate replies, broadcast offers, support customers, and convert WhatsApp conversations into confirmed bookings.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <button onClick={onOpenPromo} className="bg-white text-[#0B2447] px-10 py-5 rounded-2xl text-lg font-black hover:shadow-xl hover:-translate-y-1 transition-all">
          Book Free Demo
        </button>
        <a href="https://wa.me/919846287369" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-[#20b858] transition-all flex items-center justify-center gap-3">
          <FaWhatsapp className="text-2xl" /> Talk to Flowbee.io Expert
        </a>
      </div>
      <p className="text-sm text-blue-200/60 font-medium max-w-md mx-auto pt-4">
        Our team will help you set up travel auto replies, package enquiry flows, broadcast templates, customer tags, and team inbox workflow.
      </p>
    </div>
  </section>
);
