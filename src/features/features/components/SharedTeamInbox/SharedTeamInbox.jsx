import React from "react";
import { motion } from "framer-motion";
import { FaHeadset } from "react-icons/fa";
import { FiInfo, FiMessageSquare, FiUsers } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { FADE_UP, TEAM_INBOX_ITEMS } from "../../constants/featuresData";

const ICON_MAP = {
  users: <FiUsers />,
  message: <FiMessageSquare />,
};

const InboxItem = (box) => (
  <div
    key={box.title}
    className="p-4 lg:p-6 bg-gray-50 rounded-xl lg:rounded-[2rem] border border-gray-100 group hover:bg-[#111] transition-all"
  >
    <div className="text-[#25D366] mb-2 lg:mb-3 group-hover:scale-110 transition-transform">
      {ICON_MAP[box.iconKey]}
    </div>
    <h4 className="font-bold text-xs lg:text-sm text-[#111] group-hover:text-white transition-colors">
      {box.title}
    </h4>
    <p className="text-[9px] lg:text-[10px] text-gray-400 mt-1">
      {box.desc}
    </p>
  </div>
);

export const SharedTeamInbox = () => {
  return (
    <section className="py-16 lg:py-32 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
            <div className="w-12 h-12 lg:w-12 lg:h-12 bg-green-50 text-[#25D366] rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-3xl shadow-inner">
              <FaHeadset />
            </div>
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-[#25D366]">
              Collaborative Support
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight text-[#111]">
            Shared Team <br /> Inbox.
          </h2>
          <p className="text-base lg:text-md text-gray-500 mb-8 lg:mb-10 font-medium">
            One official number, 50+ agents. Assign chats, use internal
            notes, and never miss a query.
          </p>
          <DataList
            data={TEAM_INBOX_ITEMS}
            render={InboxItem}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 text-left !p-0"
          />
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="relative p-1 bg-gradient-to-br from-[#25D366] to-[#FFDD2D] rounded-3xl lg:rounded-[4rem] shadow-3xl">
            <div className="bg-white rounded-[1.8rem] lg:rounded-[3.8rem] p-6 lg:p-8 overflow-hidden relative min-h-[350px]">
              <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#111]">
                      John Doe
                    </p>
                    <p className="text-[9px] text-[#25D366] font-bold">
                      Active
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] font-black uppercase">
                  Assigned: You
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[85%] text-[10px]">
                  Hi, when you will deliver ?.
                </div>
                <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl flex gap-2">
                  <FiInfo
                    className="text-yellow-500 mt-0.5 shrink-0"
                    size={12}
                  />
                  <p className="text-[9px] text-yellow-600 italic font-medium">
                    @Team: Checking with Logistic Team.
                  </p>
                </div>
                <div className="bg-[#25D366] text-white p-3 rounded-xl rounded-tr-none max-w-[85%] ml-auto text-[10px] font-bold shadow-md">
                  Shipping tomorrow!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
