import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiXCircle, FiCheckCircle, FiArrowRight, FiSend } from 'react-icons/fi';
import { sendWhatsappTemplate } from '../../../../lib/whatsappApi';

export const PromoModal = ({ isOpen, onClose }) => {
  const [promoView, setPromoView] = useState('compare');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setPromoView('compare');
      setFormData({ name: '', phone: '', email: '' });
    }, 500);
  };

  const handlePromoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendWhatsappTemplate(formData);
      setPromoView('success');
    } catch (error) {
      console.error("Error sending WhatsApp messages:", error);
      alert("Something went wrong. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900/70 backdrop-blur-md" onClick={handleClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-gray-200 rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row"
      >
        <button onClick={handleClose} className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors">
          <FiX className="text-lg md:text-xl" />
        </button>

        {/* Left Side: Brand Presence */}
        <div className="md:w-5/12 bg-gray-50 p-6 md:p-10 flex flex-col justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
          <div className="absolute top-0 left-0 w-full h-full bg-[#B8860B]/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 space-y-4 md:space-y-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366]/10 flex items-center justify-center rounded-xl md:rounded-2xl border border-[#25D366]/20">
              <FaWhatsapp className="text-[#128C7E] text-2xl md:text-4xl" />
            </div>
            <h3 className="text-gray-900 font-black text-2xl md:text-3xl tracking-tight">System Access.</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">Experience exactly how our algorithmic infrastructure transforms raw inquiries into verified foot traffic. Book your technical demonstration now.</p>
          </div>
        </div>

        {/* Right Side: Form Logic */}
        <div className="md:w-7/12 p-6 md:p-12 relative flex flex-col justify-center bg-white">
          <AnimatePresence mode="wait">
            
            {promoView === 'compare' && (
              <motion.div key="compare" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col justify-center space-y-6 md:space-y-8">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">Modernize Operations</h2>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-red-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-600 mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base"><FiXCircle/> Standard App Constraints</h4>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Data silos, delayed responses, manual inventory sharing, and restricted to a single physical device.</p>
                  </div>
                  <div className="bg-[#25D366]/10 p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#25D366]/20">
                    <h4 className="font-bold text-[#128C7E] mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base"><FiCheckCircle/> Flowbee Official API</h4>
                    <p className="text-xs md:text-sm text-gray-700 font-medium">Instant NLP parsing, centralized multi-agent dashboard, broadcast tracking, and synchronized product catalogs.</p>
                  </div>
                </div>

                <button onClick={() => setPromoView('form')} className="w-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white py-4 md:py-5 rounded-xl font-black uppercase tracking-widest text-xs md:text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Proceed to Configuration <FiArrowRight />
                </button>
              </motion.div>
            )}

            {promoView === 'form' && (
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col justify-center">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 md:mb-3">Initialize Deployment.</h2>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">Enter your credentials. The system will instantly transmit a custom verification sequence via WhatsApp.</p>
                </div>

                <form onSubmit={handlePromoSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 md:mb-2">Authorized Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#B8860B] text-gray-900 font-bold transition-colors text-sm md:text-base" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 md:mb-2">WhatsApp Number</label>
                    <div className="relative">
                      <FaWhatsapp className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-400 text-base md:text-lg" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full pl-10 md:pl-14 pr-4 md:pr-5 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#B8860B] text-gray-900 font-bold transition-colors text-sm md:text-base" placeholder="919876543210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 md:mb-2">Corporate Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:border-[#B8860B] text-gray-900 font-bold transition-colors text-sm md:text-base" placeholder="john@company.com" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full mt-2 md:mt-4 bg-gray-900 text-white py-4 md:py-5 rounded-lg md:rounded-xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black transition-colors flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 shadow-lg">
                    {isSubmitting ? <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <>Transmit Request <FiSend /></>}
                  </button>
                </form>
              </motion.div>
            )}

            {promoView === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-8 md:py-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-[#25D366]/20">
                  <FaWhatsapp className="text-[#128C7E] text-3xl md:text-4xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4">Transmission Executed</h2>
                <p className="text-gray-600 text-sm md:text-base max-w-sm font-medium leading-relaxed">We have securely routed your request. Please inspect your WhatsApp on <strong className="text-gray-900">{formData.phone}</strong> for the configuration details.</p>
                
                <button onClick={handleClose} className="mt-8 md:mt-10 bg-gray-100 text-gray-900 px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs md:text-sm">
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
