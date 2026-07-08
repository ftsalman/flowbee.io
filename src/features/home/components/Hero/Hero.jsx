import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { Button } from "../../../../../lib/turtle-ui/components";

export const Hero = ({ onVideoOpen }) => {
  const registerLink = "https://app.flowbee.io/auth/register";

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="min-h-[85vh] flex items-center justify-center bg-white relative overflow-hidden px-4 pt-0 lg:pt-0 p-5">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 relative z-10 py-12 lg:py-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <img
              src="/images/meta-badge.png"
              alt="Meta Partner"
              className="h-10 lg:h-5 mb-6 mx-auto lg:mx-0 object-contain drop-shadow-sm"
            />
            <h1 className="text-4xl sm:text-6xl lg:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              The{" "}
              <span className="inline-flex items-center font-extrabold text-[#25D366]">
                WhatsApp
                <FaWhatsapp className="ml-3" size={60} />
              </span>{" "}
              <br className="hidden sm:block" /> Growth Engine.
            </h1>
            <p className="text-base sm:text-lg lg:text-md text-gray-500 mb-8 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Automate your sales funnel from Click-to-Ad to Instant Reply.
              Reach thousands securely via official API.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-6 sm:px-0">
              <a href={registerLink} target="_blank" rel="noreferrer">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Start Free Trial
                </Button>
              </a>
              <Button
                variant="secondary"
                size="md"
                onClick={onVideoOpen}
                className="w-full sm:w-auto  text-sm"
              >
                Watch Demo <FiPlay />
              </Button>
            </div>
          </motion.div>
          {/* --- HERO MASCOT PLACEMENT --- */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ y: 15 }}
              animate={{ y: -15 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/images/mascot-hero-welcome.png"
                alt="Flowbee Welcome"
                className="w-full max-w-[320px] lg:max-w-md h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />

              {/* Decorative Glow behind mascot */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD400]/25 to-[#25D366]/15 blur-[100px] rounded-full -z-10 scale-125"></div>
            </motion.div>
          </div>
        </div>
      </div>

  
    
    </>
  );
};
