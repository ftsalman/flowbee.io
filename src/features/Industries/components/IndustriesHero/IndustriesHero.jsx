import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FADE_UP } from "../../constants/industriesData";

export const IndustriesHero = () => {
  const WhatsApp = () => (
    <span className="inline-flex items-center gap-1 lg:gap-2 text-[#25D366]">
      WhatsApp <FaWhatsapp className="animate-pulse" />
    </span>
  );

  return (
    <section className="min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-6 py-20 lg:py-0">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] bg-[#FFDD2D]/10 blur-[80px] lg:blur-[150px] rounded-full pointer-events-none"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        className="max-w-5xl mx-auto relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 lg:mb-10 leading-[1.1] lg:leading-[0.9]">
          Tailored for <br /> <WhatsApp /> <br /> Success.
        </h1>
        <p className="text-base md:text-md lg:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto px-4 mb-6">
          Flowbee.io builds specialized engines for the world's most
          demanding industries.
        </p>
      </motion.div>
    </section>
  );
};
