import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { BROADCAST_ITEMS, FADE_UP } from "../../constants/featuresData";

const BroadcastItem = (item) => (
  <div
    key={item.title}
    className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/30"
  >
    <FiCheckCircle className="text-[#25D366] mt-1 shrink-0" />
    <div>
      <h4 className="font-bold text-xs lg:text-sm">{item.title}</h4>
      <p className="text-[9px] lg:text-[10px] text-gray-400 mt-1">
        {item.desc}
      </p>
    </div>
  </div>
);

export const HyperScaleBroadcast = () => {
  return (
    <section className="py-16 lg:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
            <div className="w-12 h-12 lg:w-12 lg:h-12 bg-orange-50 text-orange-500 rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-3xl shadow-inner">
              <FaBullhorn />
            </div>
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-orange-500">
              Global Outreach
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-6 lg:mb-6 leading-tight italic text-[#111]">
            Hyper-Scale <br />
            Broadcasting.
          </h2>
          <p className="text-base lg:text-md text-gray-500 mb-8 lg:mb-10 font-medium leading-relaxed">
            Reach your entire customer base in seconds. Our{" "}
            <b>Smart-Throttle™</b> system delivers high-volume messages
            while maintaining account health.
          </p>
          <DataList
            data={BROADCAST_ITEMS}
            render={BroadcastItem}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left !p-0"
          />
        </motion.div>
        <div className="w-full lg:w-1/2">
          <img
            src="/images/bulk-msg.png"
            alt="Broadcast"
            className="w-full h-auto drop-shadow-2xl rounded-2xl lg:rounded-[3rem]"
          />
        </div>
      </div>
    </section>
  );
};
