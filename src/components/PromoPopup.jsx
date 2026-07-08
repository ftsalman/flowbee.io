import React, { useEffect, useState } from "react";
import { Button } from "../../lib/turtle-ui/components";

import { motion, AnimatePresence } from "framer-motion";

import {
  FiX,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiSend,
  FiClock,
  FiShield,
  FiTrendingDown,
  FiAlertTriangle,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [view, setView] = useState("compare");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    phone: "",

    email: "",
  });

  // 5-Second Trigger for Testing

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => setView("compare"), 500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- WHATSAPP DUAL-API SUBMISSION LOGIC ---

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const API_ENDPOINT = "https://flowb.io/flowbee/SendWhatsappTemplate";

      const API_KEY = "2736FCA7-9C60-41CF-9813-2BB6DB8B88EF";

      const cleanPhone = formData.phone.replace(/[^0-9]/g, "");

      // 1. CUSTOMER TEMPLATE PAYLOAD

      const customerPayload = {
        company: "",

        phoneno: "919544144369",

        templatE_ID: "1353918876602023",

        section: [
          {
            section: "body",
            parameter: [
              { type: "text", name: "customer_name", value: formData.name },
            ],
          },
        ],

        to: [
          {
            number: cleanPhone,
            sessioN_ID: 0,
            parameter: [{ coL_KEY: "customer_name", coL_VAL: formData.name }],
          },
        ],
      };

      // 2. ADMIN TEMPLATE PAYLOAD

      const adminPayload = {
        company: "",

        phoneno: "919544144369",

        templatE_ID: "1482968393067462",

        section: [
          {
            section: "body",

            parameter: [
              { type: "text", name: "customer_name", value: formData.name },

              { type: "text", name: "customer_mobile", value: formData.phone },

              { type: "text", name: "customer_email", value: formData.email },
            ],
          },
        ],

        to: [
          {
            number: "919846287369",

            sessioN_ID: 0,

            parameter: [
              { coL_KEY: "customer_name", coL_VAL: formData.name },

              { coL_KEY: "customer_mobile", coL_VAL: formData.phone },

              { coL_KEY: "customer_email", coL_VAL: formData.email },
            ],
          },
        ],
      };

      const requestOptions = (payload) => ({
        method: "POST",

        headers: { "Content-Type": "application/json", "x-api-key": API_KEY },

        body: JSON.stringify(payload),
      });

      const [customerResponse, adminResponse] = await Promise.all([
        fetch(API_ENDPOINT, requestOptions(customerPayload)),

        fetch(API_ENDPOINT, requestOptions(adminPayload)),
      ]);

      if (!customerResponse.ok || !adminResponse.ok) {
        throw new Error(`API rejected request.`);
      }

      setView("success");
    } catch (error) {
      console.error("Error sending WhatsApp messages:", error);

      alert("Something went wrong. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },

    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={handleClose}
            ></div>

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[80vh] md:max-h-[95vh] overflow-y-auto relative z-10 flex flex-col md:flex-row border border-gray-100"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiX className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* --- LEFT SIDE: Mascot --- */}

              <div className="md:w-1/3 bg-[#111] p-5 md:p-8 flex flex-col items-center justify-center text-center relative shrink-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[#FFDD2D]/10 blur-[50px] rounded-full pointer-events-none"></div>

                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/images/mascot-hero-welcome.png"
                  alt="Flowbee Mascot"
                  className="w-20 sm:w-28 md:w-48 h-auto relative z-10 mb-2 md:mb-6 drop-shadow-2xl"
                />

                <h3 className="text-white font-black text-lg md:text-2xl tracking-tight relative z-10">
                  Scale Your Sales.
                </h3>

                <p className="text-gray-400 text-[10px] md:text-sm mt-1 md:mt-2 font-medium relative z-10">
                  Don't let manual replies kill your conversion rates.
                </p>
              </div>

              {/* --- RIGHT SIDE: Content --- */}

              <div className="md:w-2/3 p-5 sm:p-6 md:p-10 bg-white relative flex flex-col justify-center shrink-0">
                <AnimatePresence mode="wait">
                  {view === "compare" && (
                    <motion.div
                      key="compare"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h2 className="text-lg sm:text-xl md:text-3xl font-black text-[#111] mb-3 md:mb-6">
                        The WhatsApp Reality
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
                        {/* Without Flowbee */}

                        <div className="bg-red-50 p-3 md:p-5 rounded-xl border border-red-100">
                          <h4 className="font-black text-red-800 flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4 text-[10px] md:text-sm uppercase tracking-widest">
                            <FiXCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />{" "}
                            Without Flowbee
                          </h4>

                          <ul className="space-y-1.5 md:space-y-3 text-[9px] md:text-xs font-bold text-red-900">
                            <li className="flex items-start gap-1.5">
                              <FiClock className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              Manual replies taking hours
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiTrendingDown className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              Missed leads & lost sales
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiAlertTriangle className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              High risk of number bans
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiX className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              One number, one user limit
                            </li>
                          </ul>
                        </div>

                        {/* With Flowbee */}

                        <div className="bg-green-50 p-3 md:p-5 rounded-xl border border-green-200 shadow-sm">
                          <h4 className="font-black text-green-800 flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4 text-[10px] md:text-sm uppercase tracking-widest">
                            <FiCheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />{" "}
                            With Flowbee.io
                          </h4>

                          <ul className="space-y-1.5 md:space-y-3 text-[9px] md:text-xs font-bold text-green-900">
                            <li className="flex items-start gap-1.5">
                              <FiSend className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              Instant AI replies 24/7
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiCheckCircle className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              Automated lead qualification
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiShield className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              100% Secure Official API
                            </li>

                            <li className="flex items-start gap-1.5">
                              <FiCheckCircle className="shrink-0 mt-0.5 w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                              Multi-agent Team Inbox
                            </li>
                          </ul>
                        </div>
                      </div>

                      <Button
                        onClick={() => setView("form")}
                        variant="secondary"
                        size="md"
                        className="w-full mt-1 group"
                      >
                        Book a Free Demo{" "}
                        <FiArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}

                  {/* VIEW 2: FORM */}

                  {view === "form" && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <div className="mb-4 md:mb-6">
                        <h2 className="text-lg md:text-2xl font-black text-[#111] mb-1 md:mb-2">
                          Let's Get Started.
                        </h2>

                        <p className="text-gray-500 text-[10px] md:text-sm font-medium">
                          Enter your details below. You will instantly receive a
                          demo link via WhatsApp.
                        </p>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-3 md:space-y-4"
                      >
                        <div>
                          <label className="block text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                            Full Name
                          </label>

                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all font-medium text-xs md:text-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                            WhatsApp Number
                          </label>

                          <div className="relative">
                            <FaWhatsapp className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />

                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-8 md:pl-11 pr-3 md:pr-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all font-medium text-xs md:text-sm"
                              placeholder="919876543210"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                            Email Address
                          </label>

                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all font-medium text-xs md:text-sm"
                            placeholder="john@company.com"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="success"
                          size="md"
                          className="w-full mt-2 md:mt-4"
                        >
                          {isSubmitting ? (
                            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <>
                              Get Details on WhatsApp{" "}
                              <FaWhatsapp className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
                            </>
                          )}
                        </Button>
                      </form>

                      <button
                        onClick={() => setView("compare")}
                        className="mt-3 md:mt-4 text-[9px] md:text-xs font-bold text-gray-400 hover:text-[#111] text-center w-full"
                      >
                        Back to comparison
                      </button>
                    </motion.div>
                  )}

                  {/* VIEW 3: SUCCESS */}

                  {view === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-6 md:py-10"
                    >
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                        <FaWhatsapp className="text-[#25D366] w-6 h-6 md:w-10 md:h-10" />
                      </div>

                      <h2 className="text-xl md:text-3xl font-black text-[#111] mb-1 md:mb-2">
                        Check your WhatsApp!
                      </h2>

                      <p className="text-gray-500 font-medium text-[11px] md:text-base">
                        We've just sent you a message with the demo details to{" "}
                        <strong>{formData.phone}</strong>.
                      </p>

                      <Button
                        onClick={handleClose}
                        variant="secondary"
                        size="sm"
                        className="mt-6 md:mt-8"
                      >
                        Close Window
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
