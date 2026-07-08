import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiShield, FiShoppingBag } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { CATALOG_ITEMS, FADE_UP } from "../../constants/featuresData";

const ICON_MAP = {
  shopping: <FiShoppingBag className="mx-auto mb-2 text-blue-500" size={24} />,
  shield: <FiShield className="mx-auto mb-2 text-[#25D366]" size={24} />,
};

const CatalogItem = (item) => (
  <div
    key={item.title}
    className="bg-white p-4 lg:p-6 rounded-2xl lg:rounded-[2rem] shadow-sm border border-gray-100"
  >
    {ICON_MAP[item.iconKey]}
    <h4 className="font-black text-[9px] lg:text-xs uppercase tracking-tighter text-center">
      {item.title}
    </h4>
  </div>
);

export const MobileCatalog = () => {
  return (
    <section className="py-16 lg:py-32 px-4 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
            <div className="w-12 h-12 lg:w-12 lg:h-12 bg-blue-50 text-blue-600 rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-3xl border border-blue-100">
              <FiLayout />
            </div>
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-blue-600">
              Digital Presence
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight text-[#111]">
            Mobile <br />
            Catalog Site.
          </h2>
          <p className="text-base lg:text-md text-gray-500 mb-8 lg:mb-10 font-medium leading-relaxed">
            We generate a professional mobile website that funnels orders
            directly into your WhatsApp. Integrated with Stripe for seamless
            checkout.
          </p>
          <DataList
            data={CATALOG_ITEMS}
            render={CatalogItem}
            className="grid grid-cols-2 gap-4 !p-0"
          />
        </motion.div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-64 lg:w-72 h-[480px] lg:h-[550px] bg-[#111] rounded-[2.5rem] lg:rounded-[3.5rem] border-[8px] lg:border-[10px] border-[#222] shadow-3xl overflow-hidden relative">
            <div className="absolute top-0 w-1/3 left-1/3 h-5 lg:h-6 bg-[#222] rounded-b-2xl z-20"></div>
            <div className="p-4 pt-10 lg:pt-12 space-y-6">
              <div className="w-full h-36 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-800">
                <img
                  src="/images/your-catalog-image.png"
                  className="w-full h-full object-cover p-8 opacity-100"
                  alt="Catalog"
                />
              </div>
              <div className="space-y-2 px-2">
                <div className="h-2 w-full bg-gray-800 rounded-full"></div>
                <div className="h-2 w-2/3 bg-gray-800 rounded-full"></div>
              </div>
              <div className="h-10 w-full bg-[#25D366] rounded-xl lg:rounded-2xl flex items-center justify-center text-[9px] font-black text-white uppercase tracking-widest mx-auto">
                Checkout on WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
