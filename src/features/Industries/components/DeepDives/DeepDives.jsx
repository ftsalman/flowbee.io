import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { DataList, Card, Tag } from "../../../../../lib/turtle-ui/components";
import { MAJOR_INDUSTRIES, FADE_UP } from "../../constants/industriesData";

export const DeepDives = () => {
  return (
    <section className="py-16 lg:py-16 px-6 max-w-6xl mx-auto relative z-10">
      <DataList
        data={MAJOR_INDUSTRIES}
        className="!space-y-24 lg:!space-y-56 !flex !flex-col"
        render={(sol, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-24`}
          >
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 ${sol.bg} ${sol.color} rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-3xl mb-6 lg:mb-8 shadow-inner mx-auto lg:mx-0`}
              >
                {sol.icon}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight">
                {sol.title}
              </h2>
              <Card className="!p-6 lg:!p-8 !bg-gray-50 !rounded-2xl lg:!rounded-[2.5rem] !border !border-gray-100 !mb-8 !text-left !shadow-none hover:!shadow-md !transition-all">
                <p className="text-[10px] lg:text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">
                  Core Architecture
                </p>
                <p className="text-gray-600 font-medium text-sm lg:text-sm leading-relaxed">
                  <span className="text-[#111] font-bold">The Pain:</span>{" "}
                  {sol.problem} <br className="mb-2" />
                  <span className="text-[#25D366] font-bold">
                    Flowbee Fix:
                  </span>{" "}
                  {sol.solution}
                </p>
              </Card>
              <DataList
                data={sol.points}
                className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-3 lg:!gap-4 !mb-8 !text-left"
                render={(p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-[9px] lg:text-[10px] font-black text-gray-400 uppercase"
                  >
                    <FiCheckCircle
                      className="text-[#25D366] shrink-0"
                      size={14}
                    />{" "}
                    {p}
                  </div>
                )}
              />
              <DataList
                data={sol.metrics}
                className="!flex !flex-wrap !justify-center lg:!justify-start !gap-4 lg:!gap-6 !pt-6 !border-t !border-gray-100 !font-black !text-xs lg:!text-sm"
                render={(m, idx) => (
                  <Tag
                    key={idx}
                    variant="gray"
                    className="!flex !items-center !gap-2 !text-[#111] !bg-white !px-3 !py-1 !rounded-full !shadow-sm !border !border-gray-50 !font-black"
                  >
                    <FiTrendingUp className="text-[#25D366]" /> {m}
                  </Tag>
                )}
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center relative px-4">
              <div
                className={`absolute inset-0 ${sol.bg} blur-[60px] lg:blur-[100px] rounded-full opacity-40`}
              ></div>
              <img
                src={sol.image}
                alt={sol.title}
                className="relative z-10 w-full max-w-sm lg:max-w-md h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      />
    </section>
  );
};
