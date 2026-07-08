import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const FinalCTA = ({ onOpenPromo }) => (
  <section className="py-32 bg-gray-950 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 z-0">
       <img src="/images/cta-grocery-bg.png" alt="Supermarket Pattern" className="w-full h-full object-cover opacity-10" />
       <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950"></div>
    </div>

    <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
        Start Sending Smarter <br className="hidden md:block" />
        <span className="text-[#EAB308]">WhatsApp Offers.</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
        Flowbee.io helps supermarkets send broadcast offers, manage replies, automate customer enquiries, organize contacts, and increase repeat customer engagement through WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 max-w-lg mx-auto">
        <button onClick={onOpenPromo} className="w-full sm:w-auto bg-[#EAB308] text-black px-10 py-5 rounded-2xl text-lg font-black hover:bg-[#CA8A04] hover:shadow-xl hover:-translate-y-1 transition-all">
          Book Free Demo
        </button>
        <a href="https://wa.me/919846287369" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-[#20b858] transition-all flex items-center justify-center gap-3">
          <FaWhatsapp className="text-2xl" /> Talk to an Expert
        </a>
      </div>
      <p className="text-sm text-gray-500 font-medium max-w-lg mx-auto pt-4 italic">
        Our team will help you set up your supermarket broadcast campaigns, customer tags, offer templates, auto replies, and team inbox workflow.
      </p>
    </div>
  </section>
);
