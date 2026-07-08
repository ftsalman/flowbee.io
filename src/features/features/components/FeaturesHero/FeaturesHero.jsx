import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FADE_UP } from "../../constants/featuresData";

export const FeaturesHero = () => {
  return (
    <section className="min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-4 pt-4 pb-20 lg:pt-0 lg:pb-0">
      <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] lg:w-[70vw] lg:h-[70vw] bg-[#FFDD2D]/10 blur-[80px] lg:blur-[150px] rounded-full"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10 p-2.5">
        <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
          <div className="inline-block py-2 px-4 lg:px-6 rounded-full bg-white border border-gray-100 shadow-xl text-[8px] lg:text-[10px] font-black tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-6 lg:mb-8 text-gray-400">
            Complete Business Suite 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-black tracking-tighter mb-6 lg:mb-10 leading-[1.1] lg:leading-[1.1] text-[#111]">
            Engineered <br className="hidden sm:block" /> for{" "}
            <span className="inline-flex items-center font-extrabold text-[#25D366]">
              WhatsApp
              <FaWhatsapp className="ml-3" size={54} />
            </span>{" "}
            <br className="hidden sm:block" /> Dominance.
          </h1>
          <p className="text-base md:text-xl lg:text-lg text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            One platform. Unlimited integrations. Scale your marketing,
            automate your sales, and manage your team with the official Meta
            API.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
