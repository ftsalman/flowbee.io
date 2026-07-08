import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const PromoModal = ({ isOpen, onClose, promoView, setPromoView, formData, handleInputChange, handlePromoSubmit, isSubmitting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md relative z-10 overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors">
          <FiX size={20} />
        </button>

        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            
            {promoView === 'compare' && (
              <motion.div key="compare" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col text-center">
                <div className="w-16 h-16 bg-[#25D366]/10 text-[#128C7E] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp size={32} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">Optimize Supermarket Orders</h2>
                <p className="text-sm text-gray-600 mb-8 font-medium">Stop losing sales to unorganized chats and banned broadcast numbers. Automate your pipeline today.</p>
                
                <button onClick={() => setPromoView('form')} className="w-full bg-[#EAB308] text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#CA8A04] transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Get Started <FiArrowRight />
                </button>
              </motion.div>
            )}

            {promoView === 'form' && (
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-2">Request Access</h2>
                  <p className="text-gray-500 text-xs font-medium">Enter your details to receive a live supermarket demo via WhatsApp.</p>
                </div>

                <form onSubmit={handlePromoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Store / Contact Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#EAB308] text-gray-900 font-bold text-sm transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp Number</label>
                    <div className="relative">
                      <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#EAB308] text-gray-900 font-bold text-sm transition-colors" placeholder="919876543210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#EAB308] text-gray-900 font-bold text-sm transition-colors" placeholder="hello@supermarket.com" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-gray-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg">
                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <>Transmit Request <FiSend /></>}
                  </button>
                </form>
              </motion.div>
            )}

            {promoView === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaWhatsapp className="text-[#128C7E] text-4xl" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">Request Sent!</h2>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">Check your WhatsApp on <strong className="text-gray-900">{formData.phone}</strong> for the configuration details.</p>
                
                <button onClick={onClose} className="mt-8 bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm uppercase tracking-widest">
                  Acknowledge
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
