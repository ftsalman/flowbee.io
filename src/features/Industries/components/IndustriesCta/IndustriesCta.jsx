import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../../lib/turtle-ui/components";
import { FADE_UP, REGISTER_LINK, SALES_WHATSAPP_LINK } from "../../constants/industriesData";

export const IndustriesCta = () => {
  return (
    <section className="py-20 lg:py-40 bg-white px-4 z-10 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FADE_UP}
        className="max-w-6xl mx-auto bg-[#FFDD2D] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-32 text-center relative overflow-hidden shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#111] mb-10 lg:mb-16 tracking-tighter leading-tight">
          Dominate <br /> Your Market.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 relative z-10 px-4">
          <a
            href={REGISTER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Access Now
            </Button>
          </a>
          <a
            href={SALES_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Talk to Sales
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
