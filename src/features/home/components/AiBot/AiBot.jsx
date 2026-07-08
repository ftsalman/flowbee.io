import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCpu,
  FiLayers,
  FiShoppingBag,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { DataList, Button } from "../../../../../lib/turtle-ui/components";
import { BOT_FEATURES, REGISTER_LINK } from "../../constants/homeData";

const ICON_MAP = {
  layers: <FiLayers />,
  cpu: <FiCpu />,
  shopping: <FiShoppingBag />,
  users: <FiUsers />,
};

const BotFeatureItem = (item) => (
  <div
    key={item.title}
    className="bg-[#111] border border-gray-800 p-4 rounded-2xl hover:border-gray-600 transition-colors"
  >
    <div className="text-[#FFDD2D] mb-3">{ICON_MAP[item.iconKey]}</div>
    <h4 className="font-black text-sm text-white mb-1">{item.title}</h4>
    <p className="text-[10px] text-gray-500 font-medium">{item.desc}</p>
  </div>
);

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const AiBotSection = () => (
  <section className="py-20 lg:py-32 bg-[#0a0a0a] text-white lg:rounded-[4rem] lg:mx-4 my-8 px-4 relative overflow-hidden border border-gray-800/50 shadow-2xl">
    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-bl from-[#FFDD2D]/10 via-transparent to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/10 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20 text-center lg:text-left relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={reveal}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full lg:w-1/2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFDD2D]/10 border border-[#FFDD2D]/20 text-[#FFDD2D] font-bold text-[9px] uppercase tracking-widest mb-6 mx-auto lg:mx-0">
          <FiZap size={14} /> No-Code Automation
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight">
          Sell while you sleep. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDD2D] to-yellow-500">
            Zero coding required.
          </span>
        </h2>
        <p className="text-base lg:text-md text-gray-400 mb-10 font-medium max-w-lg mx-auto lg:mx-0">
          Build sophisticated AI chatbots that instantly qualify leads, answer
          FAQs, and drive sales 24/7 without human intervention.
        </p>

        <div className="mb-10 max-w-lg mx-auto lg:mx-0 text-left">
          <DataList
            data={BOT_FEATURES}
            render={BotFeatureItem}
            className="grid sm:grid-cols-2 gap-4 !p-0"
          />
        </div>

        <a href={REGISTER_LINK} target="_blank" rel="noreferrer">
          <Button variant="primary" size="lg">
            Build Your First Bot <FiArrowRight />
          </Button>
        </a>
      </motion.div>

      <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
        <div className="relative z-10 w-full max-w-md lg:max-w-lg">
          <img
            src="/images/automation-bot.png"
            alt="AI Builder"
            className="w-full h-auto drop-shadow-2xl relative z-10"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 lg:-left-20 bg-white p-3 lg:p-4 rounded-2xl rounded-tl-none shadow-2xl border border-gray-100 z-20 max-w-[200px]"
          >
            <div className="text-[10px] lg:text-[10px] font-bold text-[#111] leading-tight">
              "Hi, do you have the premium plan available?"
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-10 -right-10 lg:-right-16 bg-[#111] p-3 lg:p-4 rounded-2xl rounded-br-none shadow-2xl border border-gray-800 z-20 max-w-[220px]"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <FiCpu className="text-[#FFDD2D]" size={12} />
              <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">
                AI Agent
              </span>
            </div>
            <div className="text-[10px] lg:text-[10px] font-medium text-white leading-tight">
              Yes we do! Here is the checkout link to get started 👇
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
