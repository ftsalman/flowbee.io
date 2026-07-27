import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const CreateSupportHeader = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-10"
    >
      <div className="absolute left-0 top-[4.5rem] hidden md:block">
        <button 
          onClick={() => navigate('/support')}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
        >
          <FiArrowLeft /> Return to View
        </button>
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFD400]/20 text-[#CA8A04] mb-6 shadow-sm border border-[#FFD400]/30">
          <FiFileText className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Create Knowledge Article</h1>
        <p className="text-lg text-neutral-500 max-w-xl mx-auto font-medium">
          Draft a new support article to publish directly to the Help Center.
        </p>
      </div>
      
      <div className="md:hidden mt-6 flex justify-center">
        <button 
          onClick={() => navigate('/support')}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
        >
          <FiArrowLeft /> Return to View
        </button>
      </div>
    </motion.div>
  );
};
