import { motion } from "framer-motion";
import { FiCpu, FiHash, FiInbox, FiSend, FiShoppingBag, FiTarget } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ORBIT_NODES = [
  { icon: <FiShoppingBag />, label: "Shop", pos: "-top-12 left-0 lg:left-[10%]", color: "text-green-400" },
  { icon: <FiTarget />, label: "Ads", pos: "-top-12 right-0 lg:right-[10%]", color: "text-blue-400" },
  { icon: <FiCpu />, label: "AI Bot", pos: "top-4 -left-6 lg:-left-20", color: "text-purple-400" },
  { icon: <FiHash />, label: "Keyword", pos: "top-4 -right-6 lg:-right-20", color: "text-yellow-400" },
  { icon: <FiSend />, label: "Broadcast", pos: "top-24 left-0 lg:left-[5%]", color: "text-orange-400" },
  { icon: <FiInbox />, label: "Inbox", pos: "top-24 right-0 lg:right-[5%]", color: "text-cyan-400" },
];

export const UnifiedHub = () => (
  <section className="py-6 lg:py-10 bg-white px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="bg-[#111] rounded-[2.5rem] lg:rounded-[4rem] px-6 py-10 lg:px-20 lg:py-16 border border-white/10 relative overflow-hidden shadow-2xl min-h-[350px] lg:min-h-[450px] flex flex-col items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#25D366]/10 blur-[80px] lg:blur-[120px] rounded-full" />
        <div className="text-center relative z-40 mb-4 lg:mb-8">
          <h2 className="text-2xl lg:text-5xl font-black tracking-tighter text-white mb-2 uppercase italic">
            Unified <span className="text-[#25D366]">WhatsApp</span> Hub.
          </h2>
          <p className="text-gray-400 font-bold text-[8px] lg:text-[10px] uppercase tracking-[0.4em]">
            The Command Center
          </p>
        </div>
        <div className="relative w-full max-w-4xl flex items-center justify-center mt-10 lg:mt-16">
          <div className="relative z-30 w-20 h-20 lg:w-32 lg:h-32 bg-white/5 backdrop-blur-2xl rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-white/10 flex flex-col items-center justify-center">
            <FaWhatsapp className="text-[#25D366] text-4xl lg:text-7xl drop-shadow-[0_0_20px_rgba(37,211,102,0.4)]" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] border border-dashed border-white/10 rounded-full"
          />
          {ORBIT_NODES.map((node, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className={`absolute ${node.pos} p-2 lg:p-4 bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-3xl border border-white/10 flex flex-col items-center w-16 lg:w-28 z-40 group hover:bg-white hover:border-[#25D366] transition-all duration-500`}
            >
              <span className={`${node.color} text-xl lg:text-3xl mb-1 group-hover:scale-110 transition-transform`}>
                {node.icon}
              </span>
              <span className="text-[7px] lg:text-[9px] font-black uppercase text-white group-hover:text-black tracking-tighter">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
