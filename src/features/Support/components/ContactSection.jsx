import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiSearch, FiGrid, FiMessageSquare } from "react-icons/fi";
import { InputBox } from "../../../../lib/turtle-ui/components/input-box/InputBox";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";

export const ContactSection = ({ submitSuccess, handleSubmitTicket, ticketForm, handleFormChange, isSubmitting }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#EAECEF] rounded-[32px] p-10 md:p-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">Need more help?</h2>
          <p className="text-gray-600 text-lg">If you couldn't find what you were looking for, reach out to us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-gray-700 mb-5">
              <FiSearch size={22} />
            </div>
            <h4 className="font-bold text-[19px] text-gray-900 mb-2">Search</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed">Search through our extensive documentation.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-gray-700 mb-5">
              <FiGrid size={22} />
            </div>
            <h4 className="font-bold text-[19px] text-gray-900 mb-2">Categories</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed">Browse articles by popular categories.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-gray-700 mb-5">
              <FiMessageSquare size={22} />
            </div>
            <h4 className="font-bold text-[19px] text-gray-900 mb-2">Support</h4>
            <p className="text-[15px] text-gray-500 leading-relaxed">Contact our support team directly.</p>
          </div>
        </div>
        
        {/* Contact Form appended in the block */}
        <div className="mt-10 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <h4 className="font-black text-2xl tracking-tight text-gray-900 mb-8">Submit a Ticket</h4>
          {submitSuccess ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F8F9FA] border border-gray-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <FiCheckCircle size={32} />
              </div>
              <h5 className="text-lg font-bold text-gray-900">Ticket Submitted Successfully</h5>
              <p className="text-gray-500">We've logged your support inquiry. A developer will respond shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmitTicket} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputBox type="text" name="name" required placeholder="Your Name" value={ticketForm.name} onChange={handleFormChange} className="w-full !px-5 !py-4 !bg-[#F8F9FA] border border-gray-200 !rounded-xl !text-[15px] font-medium text-gray-900 focus:outline-none focus:border-gray-400 focus:!bg-white transition-colors placeholder:text-gray-400" />
                <InputBox type="email" name="email" required placeholder="Email Address" value={ticketForm.email} onChange={handleFormChange} className="w-full !px-5 !py-4 !bg-[#F8F9FA] border border-gray-200 !rounded-xl !text-[15px] font-medium text-gray-900 focus:outline-none focus:border-gray-400 focus:!bg-white transition-colors placeholder:text-gray-400" />
              </div>
              <InputBox type="text" name="subject" required placeholder="Subject" value={ticketForm.subject} onChange={handleFormChange} className="w-full !px-5 !py-4 !bg-[#F8F9FA] border border-gray-200 !rounded-xl !text-[15px] font-medium text-gray-900 focus:outline-none focus:border-gray-400 focus:!bg-white transition-colors placeholder:text-gray-400" />
              <textarea name="message" required rows="5" placeholder="How can we help?" value={ticketForm.message} onChange={handleFormChange} className="w-full px-5 py-4 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[15px] font-medium text-gray-900 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors placeholder:text-gray-400 resize-y" />
              <div className="pt-2">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto !px-8 !py-4 !bg-[#FFD400] hover:!bg-[#E6BF00] !text-black font-extrabold !text-[15px] !rounded-xl transition-all disabled:opacity-70 cursor-pointer shadow-[0px_4px_14px_rgba(201,160,0,0.4)] hover:shadow-[0px_6px_20px_rgba(201,160,0,0.5)] transform hover:-translate-y-0.5 active:scale-95">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};
