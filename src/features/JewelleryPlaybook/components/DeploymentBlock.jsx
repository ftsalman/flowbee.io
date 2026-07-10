import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const DeploymentBlock = ({ onPromoOpen }) => (
  <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden flex items-center justify-center bg-white border-t border-gray-100">
    <div className="absolute inset-0 z-0">
       <img src="/images/cta-background-light.png" alt="Premium Marble Texture" className="w-full h-full object-cover opacity-30" />
       <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 md:space-y-10">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1]">
        Initialize Your Complete <br className="hidden md:block" />Digital Infrastructure.
      </h2>
      <p className="text-base md:text-md text-gray-600 font-medium max-w-3xl mx-auto px-2">Join industry-leading jewellery enterprises scaling their footfall and conversion matrices through intelligent, API-driven WhatsApp automation.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-6 w-full max-w-lg mx-auto">
        <button onClick={onPromoOpen} className="w-full sm:w-auto bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-base  md:text-md whitespace-nowrap max-w-xl font-black hover:shadow-xl hover:-translate-y-1 transition-all shadow-md">
          Commence Platform Deployment
        </button>
        <a href="https://wa.me/919846287369" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-base md:text-md whitespace-nowrap max-w-xl font-black hover:bg-gray-50 transition-all flex items-center justify-center gap-2 md:gap-3 shadow-sm">
          <FaWhatsapp className="text-[#25D366] text-xl md:text-2xl" /> Direct Consultation
        </a>
      </div>
    </div>
  </section>
);
