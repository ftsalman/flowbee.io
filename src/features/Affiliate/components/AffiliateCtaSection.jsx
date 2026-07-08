import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { Button } from "../../../../lib/turtle-ui/components";
import { fadeUp } from "../utils/affiliateUtils";
import {
  APPLY_WHATSAPP_LINK,
  HOTLINE_TEL,
  HOTLINE_DISPLAY,
} from "../constants/affiliateData";

export const AffiliateCtaSection = () => {
  return (
    <section className="py-20 lg:py-40 bg-white px-6 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-12 lg:mb-16 tracking-tighter leading-[1.1] lg:leading-[1]">
          Zero Spend. <br />{" "}
          <span className="text-[#25D366] underline decoration-[#FFDD2D] decoration-4 lg:decoration-8 underline-offset-8 lg:underline-offset-[16px]">
            Pure Profit.
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
          <Button
            onClick={() => window.open(APPLY_WHATSAPP_LINK, "_blank")}
            variant="primary"
            size="lg"
          >
            Apply Now <FiArrowUpRight />
          </Button>
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">
              Direct Hotline
            </p>
            <a
              href={HOTLINE_TEL}
              className="text-xl lg:text-2xl font-black text-[#111] flex items-center gap-2 hover:text-[#25D366] transition-colors"
            >
              <FiPhone className="text-sm" /> {HOTLINE_DISPLAY}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
