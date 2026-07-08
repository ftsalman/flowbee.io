import React from "react";
import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { Button } from "../../../../../lib/turtle-ui/components";
import { FADE_UP, REGISTER_LINK, WHATSAPP_DEMO_LINK } from "../../constants/featuresData";

export const FeaturesCta = () => {
  return (
    <section className="py-20 lg:py-40 bg-white px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FADE_UP}
        className="max-w-6xl mx-auto bg-[#111] rounded-[3rem] lg:rounded-[6rem] p-10 lg:p-32 text-center relative overflow-hidden shadow-2xl border border-white/5"
      >
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#25D366]/10 blur-[100px] rounded-full"></div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 lg:mb-16 tracking-tighter leading-tight">
          Master <br /> Your Growth{" "}
          <span className="text-[#25D366]">Today.</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 relative z-10">
          <a
            href={REGISTER_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Get Access Now
            </Button>
          </a>
          <a
            href={WHATSAPP_DEMO_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
            >
              Live Support <FiMousePointer />
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
