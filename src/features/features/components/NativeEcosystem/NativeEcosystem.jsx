import React from "react";
import { motion } from "framer-motion";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { NATIVE_ECOSYSTEM } from "../../constants/featuresData";

const EcosystemItem = (brand) => (
  <motion.div
    key={brand.name}
    whileHover={{ y: -5 }}
    className="p-6 rounded-[2rem] border border-gray-100 bg-[#fafafa] hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center lg:items-start text-center lg:text-left"
  >
    <div className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-2xl flex items-center justify-center p-2 mb-4 shadow-sm border border-gray-100 group-hover:border-[#25D366] transition-colors">
      <img
        src={brand.src}
        alt={brand.name}
        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <h4 className="font-black text-sm uppercase text-[#111]">{brand.name}</h4>
    <p className="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">
      {brand.desc}
    </p>
  </motion.div>
);

export const NativeEcosystem = () => {
  return (
    <section className="py-16 lg:py-24 bg-white px-4 border-y border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-4">
            Native <br />
            Ecosystem.
          </h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-loose">
            Automate your workflow with <br />
            deep two-way sync.
          </p>
        </div>
        <div className="lg:w-2/3 w-full">
          <DataList
            data={NATIVE_ECOSYSTEM}
            render={EcosystemItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 !p-0"
          />
        </div>
      </div>
    </section>
  );
};
