import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = (e) => {
    // 1. സാധാരണയായി ലിങ്ക് ഓപ്പൺ ആകുന്നത് തടയുന്നു (കോഡ് റൺ ചെയ്യാൻ വേണ്ടി)
    e.preventDefault();

    // 2. ഗൂഗിൾ ആഡ്സ് ട്രാക്കിംഗ് ട്രിഗർ ചെയ്യുന്നു
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18179696749", // നിങ്ങളുടെ ഗൂഗിൾ ആഡ്സ് ഐഡി
      });
    }

    // 3. ട്രാക്കിംഗ് രജിസ്റ്റർ ചെയ്ത ശേഷം വാട്സ്ആപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യുന്നു
    window.open("https://wa.me/+919544144369", "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <motion.div
        className="print:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {/* Small tooltip bubble that only shows on larger screens */}
        <div className="bg-white text-flowbee-black text-xs font-semibold py-2 px-4 rounded-xl shadow-lg mb-3 hidden sm:block border border-gray-100">
          Talk to Sales
        </div>

        {/* The Button */}
        <motion.a
          href="https://wa.me/+919544144369"
          onClick={handleWhatsAppClick} // 🎯 ക്ലിക്ക് ചെയ്യുമ്പോൾ ട്രാക്കിംഗ് നടക്കാൻ ഈ ഫങ്ക്ഷൻ ഇവിടെ ചേർത്തു
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center relative group cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={32} className="relative z-10" />

          {/* Premium subtle pulsing ring effect behind the icon */}
          <span
            className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:hidden"
            style={{ animationDuration: "3s" }}
          ></span>
        </motion.a>
      </motion.div>
    </>
  );
};
