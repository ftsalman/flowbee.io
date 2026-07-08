import { motion } from "framer-motion";
import { FiArrowRight, FiBarChart2, FiCpu, FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { DataList, Button } from "../../../../../lib/turtle-ui/components";
import { BROADCAST_FEATURES, ADS_METRICS, REGISTER_LINK } from "../../constants/homeData";

const ICON_MAP = {
  cpu: <FiCpu />,
  users: <FiUsers />,
  chart: <FiBarChart2 />,
};

const BroadcastFeatureItem = (feature) => (
  <div key={feature.title} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
    <div className="w-10 h-10 shrink-0 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shadow-inner mt-0.5">
      {ICON_MAP[feature.iconKey]}
    </div>
    <div>
      <h4 className="font-black text-sm text-[#111] mb-1">{feature.title}</h4>
      <p className="text-xs font-medium text-gray-500 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

const MetricItem = (item) => (
  <div key={item.label} className="bg-[#111] border border-gray-800 rounded-2xl p-5 lg:p-6 text-center">
    <div className="text-2xl lg:text-3xl font-black text-white mb-1 lg:mb-2">{item.metric}</div>
    <div className="text-[9px] lg:text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</div>
  </div>
);

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const AdsSection = () => (
  <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#25D366]/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true, margin: "-100px" }} className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-bold text-[10px] uppercase tracking-widest mb-6">
          Meta Click-to-WhatsApp
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
          Stop losing ad clicks to <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">dead landing pages.</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-lg font-medium">
          Route Meta ad traffic directly into your WhatsApp inbox. Capture the lead instantly, before they bounce.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
        {/* Step 1 */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#111] border border-gray-800 rounded-3xl lg:rounded-[2.5rem] p-6 relative overflow-hidden group hover:border-gray-700 transition-colors flex flex-col items-center">
          <div className="w-full relative rounded-2xl overflow-hidden mb-5 border border-gray-800/50 bg-[#0a0a0a]">
            <img src="/images/meta-ad-mockup.png" alt="Meta Ad Example" className="w-full h-48 lg:h-56 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-3 right-3 bg-[#25D366] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_15px_rgba(37,211,102,0.4)]">
              <FaWhatsapp size={12} /> Send Message
            </div>
          </div>
          <h3 className="text-white font-black text-xl mb-2 text-center">Run the Ad</h3>
          <p className="text-gray-500 text-xs lg:text-sm font-medium text-center leading-relaxed px-2">
            Target your audience on Meta. The call-to-action is simply "Send Message".
          </p>
        </motion.div>

        {/* Arrow Bridge */}
        <div className="hidden lg:flex items-center justify-center relative h-full">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-gray-800 via-[#25D366] to-gray-800" />
          <motion.div animate={{ x: [-40, 40, -40] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-14 h-14 bg-[#0a0a0a] border-2 border-[#25D366] rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(37,211,102,0.3)]">
            <FiArrowRight className="text-[#25D366]" size={24} />
          </motion.div>
        </div>

        {/* Step 3 */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-[#25D366]/10 to-[#111] border border-[#25D366]/30 rounded-3xl lg:rounded-[2.5rem] p-6 relative overflow-hidden group hover:border-[#25D366]/50 transition-colors flex flex-col items-center h-full justify-between">
          <div className="w-full relative rounded-2xl overflow-hidden mb-5 border border-gray-800/50 bg-[#0a0a0a]">
            <img src="/images/whatsapp-capture-mockup.png" alt="WhatsApp Capture" className="w-full h-48 lg:h-56 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white font-black text-xl mb-2 text-center">Instant Capture</h3>
            <p className="text-gray-400 text-xs lg:text-sm font-medium text-center leading-relaxed px-2 mb-5">
              The exact moment they click, they are in your inbox. AI qualifies the lead 24/7.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#25D366] text-[10px] font-black uppercase tracking-widest bg-[#25D366]/10 py-2.5 rounded-xl w-full">
              <FaWhatsapp size={14} /> 100% Opt-in Rate
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mt-12 lg:mt-20 max-w-5xl mx-auto">
        <DataList
          data={ADS_METRICS}
          render={MetricItem}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 !p-0"
        />
      </motion.div>
    </div>
  </section>
);

export const BroadcastSection = () => (
  <section className="py-20 lg:py-32 bg-[#fafafa] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
    <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10">
      <motion.div initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-6">
          Official Meta API
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#111] tracking-tighter mb-6 leading-tight">
          Scale your outreach. <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Zero ban risk.</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-500 mb-10 font-medium max-w-lg mx-auto lg:mx-0">
          Reach thousands of customers instantly. Powered by the official Meta Cloud API for maximum delivery and 100% account safety.
        </p>
        <div className="space-y-4 max-w-lg mx-auto lg:mx-0 text-left">
          <DataList data={BROADCAST_FEATURES} render={BroadcastFeatureItem} className="!grid-cols-none !flex flex-col gap-4 !p-0" />
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 relative">
        <div className="relative z-10 w-full lg:w-[95%]">
          <img src="/images/bulk-msg.png" alt="Broadcast Dashboard" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 lg:-right-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
              <FiUsers size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Open Rate</div>
              <div className="text-lg font-black text-[#111]">98.2%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
