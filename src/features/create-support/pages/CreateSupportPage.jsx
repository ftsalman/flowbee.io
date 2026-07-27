import React from 'react';
import { motion } from 'framer-motion';
import { CreateSupportHeader } from '../components/CreateSupportHeader';
import { CreateSupportForm } from '../components/CreateSupportForm';

export const CreateSupportPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] selection:bg-[#FFD400]/40 flex flex-col py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FFD400]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <CreateSupportHeader />

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CreateSupportForm />
        </motion.div>
      </div>
    </div>
  );
};

export default CreateSupportPage;
