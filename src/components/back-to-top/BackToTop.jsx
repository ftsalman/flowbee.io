import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 left-8 z-[60]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -20 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#000",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xl text-[#111] flex items-center justify-center transition-all group cursor-pointer"
            aria-label="Back to Top"
          >
            <FiArrowUp
              size={24}
              className="group-hover:text-white transition-colors"
            />

            {/* Optional subtle "Top" text that appears on hover */}
            <span className="absolute left-16 bg-black text-white text-[10px] font-black py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
              Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTop;
