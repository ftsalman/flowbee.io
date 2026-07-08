import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { INTEGRATIONS } from "../../constants/homeData";

const IntegrationItem = (brand) => (
  <motion.div
    key={brand.name}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-3 group cursor-pointer"
  >
    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center p-3 transition-all duration-300 group-hover:border-[#25D366] group-hover:shadow-lg group-hover:shadow-[#25D366]/10">
      {brand.isIcon ? (
        <span className="text-2xl text-gray-300 group-hover:text-[#25D366]"><FiCpu /></span>
      ) : (
        <img src={brand.src} alt={brand.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
      )}
    </div>
    <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#111] transition-colors text-center">
      {brand.name}
    </span>
  </motion.div>
);

export const Integrations = () => (
  <section className="py-12 lg:py-16 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/3 text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] text-[8px] font-black uppercase tracking-widest mb-3">
            Seamless Connectivity
          </div>
          <h3 className="text-2xl lg:text-4xl font-black tracking-tighter text-[#111] leading-tight">
            Works with <br className="hidden lg:block" /> your Stack.
          </h3>
          <p className="text-gray-400 text-[10px] lg:text-xs font-bold mt-2 uppercase tracking-[0.2em]">
            API & Native Integrations
          </p>
        </div>
        <div className="lg:w-2/3">
          <DataList
            data={INTEGRATIONS}
            render={IntegrationItem}
            className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8 items-center justify-center !p-0"
          />
        </div>
      </div>
    </div>
  </section>
);
