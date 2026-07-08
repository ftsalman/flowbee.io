import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../../../lib/turtle-ui/components";
import { REGISTER_LINK } from "../constants/pricingData";

export const PricingCtaSection = () => {
  return (
    <section className="py-24 lg:py-40 px-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="max-w-6xl mx-auto bg-[#25D366] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        <h2 className="text-xl lg:text-5xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
          Elevate Your Business.
        </h2>
        <p className="text-white font-black text-sm lg:text-md mb-12 tracking-widest uppercase opacity-80 italic">
          Ready to automate? Join the hive today.
        </p>
        <Button
          onClick={() => window.open(REGISTER_LINK, "_blank")}
          variant="secondary"
          size="md"
        >
          Start Free Trial{" "}
          <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
};
