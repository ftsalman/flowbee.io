import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiClock, FiLayers, FiTarget, FiZap } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { AUTONOMOUS_ITEMS, FADE_UP } from "../../constants/featuresData";

const ICON_MAP = {
  zap: <FiZap />,
  layers: <FiLayers />,
  target: <FiTarget />,
  activity: <FiActivity />,
};

const AutonomousItem = (item) => (
  <div key={item.title} className="group">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-[#25D366] group-hover:scale-110 transition-transform">
        {ICON_MAP[item.iconKey]}
      </div>
      <h4 className="font-black text-sm lg:text-base text-[#111]">
        {item.title}
      </h4>
    </div>
    <p className="text-[10px] lg:text-xs text-gray-400 font-bold leading-tight uppercase tracking-wider">
      {item.desc}
    </p>
  </div>
);

export const AutonomousReplies = () => {
  return (
    <section className="min-h-[65vh] lg:min-h-[70vh] flex items-center py-16 lg:py-0 bg-white relative overflow-hidden px-4">
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#25D366]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="w-full lg:w-1/2 text-center lg:text-left relative z-10"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
            <div className="w-12 h-12 lg:w-12 lg:h-12 bg-white shadow-xl text-[#25D366] rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-3xl border border-gray-100">
              <FiClock className="animate-pulse" />
            </div>
            <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
              24/7 Autonomous Execution
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 leading-[1.2] text-[#111]">
            Reply{" "}
            <span className="inline-flex items-center text-[#25D366]">
              WhatsApp
              <FaWhatsapp className="ml-2" size={42} />
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-blue-500 italic">
              While You Sleep.
            </span>
          </h2>
          <p className="text-base lg:text-md text-gray-500 mb-10 font-medium leading-relaxed max-w-xl">
            Stop losing leads to late-night silence. Our{" "}
            <span className="text-[#111] font-bold">Logic Orchestrator</span>{" "}
            triggers instant auto-replies to every incoming chat, qualifying
            leads and closing deals 24 hours a day.
          </p>
          <DataList
            data={AUTONOMOUS_ITEMS}
            render={AutonomousItem}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left !p-0"
          />
        </motion.div>
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <img
              src="/images/automation-bot.png"
              alt="Autonomous Logic"
              className="w-full max-w-sm lg:max-w-lg h-auto drop-shadow-[0_35px_60px_rgba(37,211,102,0.15)]"
            />
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-3 animate-bounce">
              <div className="w-3 h-3 bg-[#25D366] rounded-full animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-tighter text-[#111]">
                Active 24/7
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
