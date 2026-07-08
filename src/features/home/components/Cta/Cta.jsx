import { motion, AnimatePresence } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { Button } from "../../../../../lib/turtle-ui/components";
import { REGISTER_LINK, WHATSAPP_DEMO_LINK } from "../../constants/homeData";

export const VideoModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl cursor-pointer"
      >
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl z-[1000] transition-all hover:rotate-90"
        >
          ✕
        </button>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black border border-white/10"
        >
          <video src="/videos/flowbee-demo.mp4" controls autoPlay className="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const VideoPreview = ({ onOpen }) => (
  <section className="py-16 lg:py-24 bg-white px-4">
    <div className="max-w-5xl mx-auto px-2 lg:px-0">
      <div
        onClick={onOpen}
        className="relative aspect-video bg-[#111] rounded-3xl lg:rounded-[4rem] shadow-2xl flex items-center justify-center group overflow-hidden border-4 lg:border-[6px] border-white cursor-pointer"
      >
        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#FFDD2D] rounded-full flex items-center justify-center pl-1 lg:pl-2 shadow-xl group-hover:scale-110 transition-all z-20">
          <FiPlay size={30} className="fill-current text-[#111] lg:scale-150" />
        </div>
        <img src="/images/video-thumbnail.jpg" alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-all" />
      </div>
    </div>
  </section>
);

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const CtaSection = () => (
  <section className="py-16 lg:py-24 bg-white px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={reveal}
      className="max-w-6xl mx-auto bg-[#111] rounded-[2.5rem] lg:rounded-[4rem] p-10 sm:p-16 lg:p-28 text-center relative overflow-hidden shadow-2xl border border-gray-800"
    >
      <div className="absolute top-0 right-0 w-[60vw] lg:w-[40vw] h-[60vw] lg:h-[40vw] bg-[#25D366]/10 blur-[100px] lg:blur-[140px] opacity-20 rounded-full" />
      <h2 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white mb-8 lg:mb-12 tracking-tighter leading-tight">
        Ready to <br /><span className="text-[#FFDD2D]">Supercharge?</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center px-4">
        <a href={REGISTER_LINK} target="_blank" rel="noreferrer">
          <Button variant="primary" size="xl">Start Free Trial</Button>
        </a>
        <a href={WHATSAPP_DEMO_LINK} target="_blank" rel="noreferrer">
          <Button variant="secondary" size="xl">Get Demo</Button>
        </a>
      </div>
    </motion.div>
  </section>
);
