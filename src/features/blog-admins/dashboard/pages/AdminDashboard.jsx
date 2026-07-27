import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEdit3, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { Card } from '../../../../../lib/turtle-ui/components/card/Card';
import { Button } from '../../../../../lib/turtle-ui/components/button/Button';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("flowbee_admin_auth");
    localStorage.removeItem("flowbee_admin_email");
    navigate("/admin/login");
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[75vh] p-4 font-sans selection:bg-[#FFD400]/40 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#FFD400]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl text-center relative z-10"
      >
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Admin Studio</h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Select an action to continue managing your Flowbee content platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {/* Create Blog Option */}
          <Card
            onClick={() => navigate('/admin/create-blog')}
            className="group flex flex-col items-center p-10 cursor-pointer border border-gray-100 hover:border-[#FFD400]/50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-xl shadow-gray-200/40 relative overflow-hidden transform hover:-translate-y-1"
          >
            {/* Hover Accent */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-20 h-20 rounded-3xl bg-[#FFD400]/10 flex items-center justify-center text-[#CA8A04] group-hover:bg-[#FFD400] group-hover:text-black mb-6 transition-all duration-300 shadow-sm border border-[#FFD400]/20 group-hover:scale-110">
              <FiEdit3 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Manage Blogs</h3>
            <p className="text-[15px] text-gray-500 font-medium px-4 leading-relaxed">
              Create, edit, and publish engaging blog posts to your live site.
            </p>
          </Card>

          {/* Create Support Request Option */}
          <Card
            onClick={() => navigate('/admin/create-support')}
            className="group flex flex-col items-center p-10 cursor-pointer border border-gray-100 hover:border-[#FFD400]/50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-xl shadow-gray-200/40 relative overflow-hidden transform hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-20 h-20 rounded-3xl bg-[#FFD400]/10 flex items-center justify-center text-[#CA8A04] group-hover:bg-[#FFD400] group-hover:text-black mb-6 transition-all duration-300 shadow-sm border border-[#FFD400]/20 group-hover:scale-110">
              <FiHelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Manage Support</h3>
            <p className="text-[15px] text-gray-500 font-medium px-4 leading-relaxed">
              Author and publish new dynamic articles to the Help Center.
            </p>
          </Card>
        </div>

        <div>
          <Button 
            onClick={handleLogout}
            className="!bg-white !text-gray-500 border border-gray-200 hover:!bg-red-50 hover:!text-red-600 hover:border-red-200 !font-semibold !px-6 !py-3 !rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <FiLogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
