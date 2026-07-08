import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Button } from "../../../../../lib/turtle-ui/components";
import { INDUSTRY_OPTIONS } from "../../constants/industriesData";

export const PlaybookLocator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("Choose your industry...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = () => {
    if (selectedIndustry) {
      window.location.href = selectedIndustry;
    }
  };

  const handleSelect = (option) => {
    setSelectedIndustry(option.path);
    setSelectedLabel(option.label);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative z-50 px-6 max-w-5xl mx-auto -mt-10 lg:-mt-16 mb-20 lg:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row items-center gap-4 lg:gap-6"
      >
        <div className="w-full md:w-2/3" ref={dropdownRef}>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 pl-2">
            Select Your Vertical
          </label>
          <div className="relative">
            {/* Custom Select Button */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-gray-50 border ${
                isDropdownOpen
                  ? "border-[#25D366] ring-2 ring-[#25D366]/20"
                  : "border-gray-200 hover:border-[#25D366]"
              } text-[#111] font-bold text-md lg:text-md py-2 pl-6 pr-6 rounded-2xl transition-all cursor-pointer flex items-center justify-between shadow-sm`}
            >
              <span
                className={selectedIndustry ? "text-[#111]" : "text-gray-400"}
              >
                {selectedLabel}
              </span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="text-gray-400 text-xl" />
              </motion.div>
            </div>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden z-50 origin-top"
                >
                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                    {INDUSTRY_OPTIONS.map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => handleSelect(opt)}
                        className={`px-6 py-4 cursor-pointer font-bold text-base lg:text-lg transition-colors border-b border-gray-50 last:border-none flex items-center gap-3 ${
                          selectedIndustry === opt.path
                            ? "bg-green-50 text-[#25D366]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#111]"
                        }`}
                      >
                        {opt.label}
                        {selectedIndustry === opt.path && (
                          <FiCheckCircle className="ml-auto text-[#25D366]" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-2 md:mt-0 md:pt-7 z-0">
          <Button
            onClick={handleNavigation}
            disabled={!selectedIndustry}
            variant="success"
            size="md"
            className="w-full group"
          >
            Load Playbook{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
