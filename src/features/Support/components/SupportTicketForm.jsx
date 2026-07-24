import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { InputGroup } from "../../../../lib/turtle-ui/components/input-group/InputGroup";

export const SupportTicketForm = ({
  ticketForm,
  isSubmitting,
  submitSuccess,
  handleFormChange,
  handleSubmitTicket,
}) => {
  return (
    <div className="border-t border-gray-200/60 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: Support info */}
      <div className="lg:col-span-4 space-y-8 text-left">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-800 tracking-tight">
            Get in Touch
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
            If you didn't find the answers you were looking for, our friendly
            support team is always here to resolve your issues.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#CA8A04] flex items-center justify-center flex-shrink-0">
              <FiMail size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Email Us</h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 font-medium">
                support@flowbee.io
              </p>
              <p className="text-[10px] text-green-600 font-semibold mt-1">
                Response time: ~2 hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#CA8A04] flex items-center justify-center flex-shrink-0">
              <FiPhone size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Call Support</h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 font-medium">
                +1 (800) 555-0199
              </p>
              <p className="text-[10px] text-neutral-400 font-semibold mt-1">
                Toll-free hotline
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#CA8A04] flex items-center justify-center flex-shrink-0">
              <FiClock size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Working Hours</h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 font-medium">
                Monday - Friday
              </p>
              <p className="text-[10px] text-neutral-400 font-semibold mt-1">
                9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Callout */}
        <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <h4 className="font-extrabold text-neutral-900 text-sm">
              WhatsApp Live Chat
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed font-semibold">
              Chat directly with our AI customer support bot or escalate to a
              live agent immediately.
            </p>
            <a
              href="https://wa.me/+919544144369"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <div className="absolute right-0 bottom-0 text-[100px] leading-none text-[#25D366]/15 font-black pointer-events-none select-none translate-x-4 translate-y-4">
            💬
          </div>
        </div>
      </div>

      {/* Right: Ticket form */}
      <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-[0px_4px_16px_rgba(0,0,0,0.02)] text-left">
        <h3 className="text-lg font-black text-gray-800 border-b border-gray-55 pb-4 mb-6">
          Create a Support Ticket
        </h3>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="w-16 h-16 bg-[#FFD400]/20 rounded-full flex items-center justify-center mx-auto text-[#CA8A04]">
              <FiCheckCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">
              Ticket Submitted Successfully!
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed font-medium">
              Thank you! Your ticket has been logged in our system. A developer
              support specialist will email you back within 2 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmitTicket} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputGroup
                label="Full Name *"
                id="name"
                name="name"
                value={ticketForm.name}
                onChange={handleFormChange}
                required
                placeholder="Jane Doe"
                className="w-full !rounded-xl !py-3.5 !px-4 !border-gray-200 focus:!border-[#FFD400] focus:!ring-4 focus:!ring-[#FFD400]/10 font-semibold text-xs"
              />

              <InputGroup
                label="Email Address *"
                id="email"
                name="email"
                value={ticketForm.email}
                onChange={handleFormChange}
                required
                placeholder="jane@example.com"
                className="w-full !rounded-xl !py-3.5 !px-4 !border-gray-200 focus:!border-[#FFD400] focus:!ring-4 focus:!ring-[#FFD400]/10 font-semibold text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="sm:col-span-2">
                <InputGroup
                  label="Subject / Brief Summary *"
                  id="subject"
                  name="subject"
                  value={ticketForm.subject}
                  onChange={handleFormChange}
                  required
                  placeholder="e.g. Cannot sync contacts with Hubspot"
                  className="w-full !rounded-xl !py-3.5 !px-4 !border-gray-200 focus:!border-[#FFD400] focus:!ring-4 focus:!ring-[#FFD400]/10 font-semibold text-xs"
                />
              </div>
              <InputGroup
                label="Topic Category"
                id="category"
              >
                <select
                  name="category"
                  id="category"
                  value={ticketForm.category}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-bold text-xs focus:border-[#FFD400] focus:outline-none focus:ring-4 focus:ring-[#FFD400]/10 cursor-pointer"
                >
                  <option value="general">General Inquiry</option>
                  <option value="whatsapp">WhatsApp Setup</option>
                  <option value="billing">Billing & Invoice</option>
                  <option value="technical">Bug or Integration</option>
                </select>
              </InputGroup>
            </div>

            <InputGroup
              label="Message Details *"
              id="message"
            >
              <textarea
                name="message"
                id="message"
                rows="5"
                value={ticketForm.message}
                onChange={handleFormChange}
                required
                placeholder="Describe your query or error details in depth. Add error codes if any."
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#FFD400] focus:outline-none focus:ring-4 focus:ring-[#FFD400]/10 font-semibold text-xs transition-all placeholder:text-gray-300"
              />
            </InputGroup>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto !bg-[#FFD400] hover:!bg-[#E6BF00] active:scale-95 !text-black !font-extrabold !py-3.5 !px-8 !rounded-xl transition-all shadow-[3px_3px_0px_0px_#C9A000] text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending Ticket...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={12} />
                    <span>Submit Ticket</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
