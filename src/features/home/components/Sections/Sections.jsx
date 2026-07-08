import { motion } from "framer-motion";
import { FiCheckCircle, FiSmartphone, FiZap } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { CRM_TAGS, ROADMAP_STEPS, INDUSTRIES } from "../../constants/homeData";
import { FiBarChart2, FiLock, FiTrendingUp, FiUsers } from "react-icons/fi";

const STEP_ICONS = {
  lock: <FiLock />,
  zap: <FiZap />,
  trending: <FiTrendingUp />,
};

const RoadmapItem = (step) => (
  <motion.div key={step.step} whileHover={{ y: -10 }} className="relative z-10 flex flex-col items-center text-center p-8 lg:p-10 bg-white rounded-3xl lg:rounded-[3.5rem] shadow-xl border border-gray-100">
    <div className={`w-16 h-16 lg:w-24 lg:h-24 bg-gray-50 border-2 border-[#FFDD2D] rounded-2xl lg:rounded-[2rem] flex items-center justify-center text-2xl lg:text-2xl shadow-sm mb-6 lg:mb-8 ${step.color}`}>
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        {STEP_ICONS[step.iconKey]}
      </motion.div>
    </div>
    <h4 className="font-black text-md lg:text-xl mb-2 lg:mb-4">{step.title}</h4>
    <p className="text-xs lg:text-sm text-gray-400 font-medium max-w-[200px]">{step.desc}</p>
  </motion.div>
);

const IndustryItem = (ind) => (
  <motion.div key={ind.name} whileHover={{ y: -5 }} className="flex flex-col items-center justify-center aspect-square sm:aspect-auto sm:w-40 sm:h-48 bg-gray-50 border border-gray-100 rounded-2xl lg:rounded-[3.5rem] shadow-sm p-4 lg:p-6 transition-all">
    <span className="text-4xl lg:text-5xl mb-2 lg:mb-4">{ind.icon}</span>
    <span className="text-[10px] lg:text-sm font-black text-gray-400 uppercase tracking-tighter lg:tracking-normal">{ind.name}</span>
  </motion.div>
);

const CrmTagItem = (tag) => (
  <span key={tag} className="bg-black/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
    <FiCheckCircle className="text-[#FFDD2D]" size={12} /> {tag}
  </span>
);

export const RoadmapSection = () => (
  <section className="py-16 lg:py-32 bg-gray-50 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-12 lg:mb-24 italic uppercase">The 3-Step Success.</h2>
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200" />
        <DataList
          data={ROADMAP_STEPS}
          render={RoadmapItem}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 !p-0"
        />
      </div>
    </div>
  </section>
);

export const BentoSection = () => (
  <section className="py-20 lg:py-32 bg-[#fafafa] px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter mb-4 text-[#111]">
          Everything you need to <span className="text-[#25D366]">scale.</span>
        </h2>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm lg:text-md">
          A complete ecosystem designed to handle thousands of conversations, qualify leads instantly, and manage your entire sales pipeline.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
        {/* Inbox Card */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-8 lg:p-12 rounded-3xl lg:rounded-[3.5rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10 mb-8">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <FiUsers size={28} />
            </div>
            <h3 className="text-2xl lg:text-2xl font-black mb-3 text-[#111]">Multi-Agent Inbox</h3>
            <p className="text-xs lg:text-sm text-gray-500 font-medium leading-relaxed max-w-md">
              Connect your entire sales and support team to a single WhatsApp number. Assign chats and resolve tickets faster.
            </p>
          </div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex -space-x-3">
              {["JD", "AM", "SK"].map((init, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs shadow-sm ${["bg-blue-100 text-blue-700", "bg-pink-100 text-pink-700", "bg-green-100 text-green-700"][i]}`}>{init}</div>
              ))}
            </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">+ Infinite Seats</div>
          </div>
        </motion.div>

        {/* Analytics Card */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-white p-8 lg:p-12 rounded-3xl lg:rounded-[3.5rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10 mb-8">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <FiBarChart2 size={28} />
            </div>
            <h3 className="text-2xl lg:text-2xl font-black mb-3 text-[#111]">Granular Analytics</h3>
            <p className="text-xs lg:text-sm text-gray-500 font-medium leading-relaxed max-w-md">
              Track agent response times, broadcast delivery rates, and ad-to-chat ROI in real-time.
            </p>
          </div>
          <div className="flex items-end gap-2 h-12 relative z-10">
            {[["40%", "70%", 0, "bg-purple-100"], ["20%", "90%", 0.2, "bg-purple-300"], ["50%", "100%", 0.4, "bg-purple-600"]].map(([from, to, delay, cls], i) => (
              <motion.div key={i} initial={{ height: from }} whileInView={{ height: to }} transition={{ duration: 1, delay }} className={`w-8 ${cls} rounded-t-md relative`}>
                {i === 2 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">+42%</div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meta Verified */}
        <motion.div whileHover={{ scale: 0.98 }} className="bg-[#111] p-8 lg:p-10 rounded-3xl lg:rounded-[3.5rem] border border-gray-800 text-center flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center text-[#25D366] mb-6 shadow-[0_0_30px_rgba(37,211,102,0.3)] relative z-10">
            <FiCheckCircle size={32} />
          </div>
          <h4 className="font-black text-xl text-white mb-2 relative z-10">Meta Verified</h4>
          <p className="text-[10px] lg:text-xs text-gray-400 font-medium relative z-10 uppercase tracking-widest leading-relaxed">Official API <br /> Zero Ban Risk</p>
        </motion.div>

        {/* CRM Card */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-3 bg-gradient-to-br from-[#FFDD2D] to-yellow-500 p-8 lg:p-12 rounded-3xl lg:rounded-[3.5rem] shadow-xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
          <FiSmartphone className="text-black/5 absolute -right-10 -bottom-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" size={250} />
          <div className="relative z-10 max-w-lg mb-8 md:mb-0">
            <div className="inline-block px-3 py-1 bg-black/10 rounded-full text-black font-black text-[9px] uppercase tracking-widest mb-4">The Engine Room</div>
            <h4 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight mb-4">Advanced CRM <br /> Automation Pipeline.</h4>
            <p className="text-sm text-black/70 font-bold mb-6">Turn random chats into an organized sales pipeline. Automatically route leads, apply custom tags, and trigger follow-up sequences.</p>
            <DataList data={CRM_TAGS} render={CrmTagItem} className="!grid-cols-none !flex flex-wrap gap-2 !p-0" />
          </div>
          <div className="relative z-10 w-full md:w-auto flex justify-end">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/50 w-full md:w-56 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><FiZap size={14} /></div>
                <div>
                  <div className="text-[10px] font-black text-[#111] uppercase tracking-wider">New Lead</div>
                  <div className="text-[9px] font-bold text-gray-400">Trigger active</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded-full" />
                <div className="h-2 w-2/3 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const IndustriesSection = () => (
  <section className="py-16 lg:py-24 bg-white px-4 text-center">
    <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12 lg:mb-20 italic">Industries Scaling with Flowbee.</h2>
    <DataList
      data={INDUSTRIES}
      render={IndustryItem}
      className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-4 lg:gap-6 !p-0"
    />
  </section>
);
