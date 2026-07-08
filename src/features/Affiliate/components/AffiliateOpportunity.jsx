import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiLock } from "react-icons/fi";
import { Card } from "../../../../lib/turtle-ui/components";
import { fadeUp } from "../utils/affiliateUtils";

export const AffiliateOpportunity = () => {
  return (
    <section className="py-16 lg:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 text-center lg:text-left">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight">
            Your Network, <br />
            <span className="text-[#25D366]">Their Growth.</span>
          </h2>
          <p className="text-base lg:text-md text-gray-500 mb-8 lg:mb-10 font-medium leading-relaxed">
            Designed for marketers, influencers, and agencies who want to
            provide world-class WhatsApp automation.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            <b>
              No setup fees, zero investment, and 100% recurring monthly
              income.
            </b>
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
            <Card className="!p-4 lg:!p-6 !bg-gray-50 !rounded-2xl lg:!rounded-3xl !border !border-gray-100 !shadow-none">
              <FiTrendingUp className="text-[#25D366] text-2xl lg:text-3xl mb-2 lg:mb-4 mx-auto lg:mx-0" />
              <p className="font-black text-[9px] lg:text-xs uppercase tracking-widest text-[#111]">
                Monthly Recurring
              </p>
            </Card>
            <Card className="!p-4 lg:!p-6 !bg-gray-50 !rounded-2xl lg:!rounded-3xl !border !border-gray-100 !shadow-none">
              <FiLock className="text-blue-500 text-2xl lg:text-3xl mb-2 lg:mb-4 mx-auto lg:mx-0" />
              <p className="font-black text-[9px] lg:text-xs uppercase tracking-widest text-[#111]">
                Lifetime Attribution
              </p>
            </Card>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FFDD2D]/20 blur-[60px] lg:blur-[100px] rounded-full transition-all group-hover:bg-[#FFDD2D]/30"></div>
            <img
              src="/images/partners.png"
              alt="Partners"
              className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl lg:rounded-[3rem] border border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
