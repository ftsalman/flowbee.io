import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "../../constants/homeData";
import { DataList } from "../../../../../lib/turtle-ui/components";

const ClientLogo = (item) => (
  <img
    key={item.id}
    src={item.src}
    alt={item.alt}
    className="h-8 lg:h-10 object-contain transition-all"
  />
);

export const ClientMarquee = () => (
  <section className="py-10 border-y border-gray-100 bg-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 text-center mb-6">
      <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-gray-400">
        Trusted by innovative teams
      </p>
    </div>
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    <div className="flex w-[200%]">
      <motion.div
        className="flex items-center justify-around w-full gap-12 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {[...Array(2)].map((_, i) => (
          <DataList
            key={i}
            data={CLIENT_LOGOS}
            render={ClientLogo}
            className="!grid-cols-none !flex !w-auto items-center gap-12 !p-0"
          />
        ))}
      </motion.div>
    </div>
  </section>
);
