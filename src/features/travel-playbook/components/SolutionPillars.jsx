import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiUsers, FiCheckCircle } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const SolutionPillars = () => (
  <section className="py-24 bg-slate-50 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 space-y-32">
      
      {/* Auto Reply & Chatflows */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:pr-8">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
            <FiCpu className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Auto Reply & Travel Chatflows</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Reply instantly when a customer messages your agency. Create guided WhatsApp flows that collect customer requirements before your staff even intervenes.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase">Example Flow Logic</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong className="text-slate-800">1. Intent:</strong> Select Holiday, Visa, or Flight.</li>
              <li><strong className="text-slate-800">2. Destination:</strong> Dubai, Thailand, Europe, Umrah.</li>
              <li><strong className="text-slate-800">3. Travellers:</strong> Solo, Couple, Family, Group.</li>
              <li><strong className="text-slate-800">4. Budget:</strong> Standard, Luxury.</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <img src="/images/travel-chatbot.png" alt="Travel Chatbot" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </motion.article>

      {/* Team Inbox */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white lg:order-1 order-2">
          <img src="/images/travel-inbox.png" alt="Travel Team Inbox" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="space-y-6 lg:pl-8 lg:order-2 order-1">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <FiUsers className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Team Inbox for Travel Sales</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Manage all WhatsApp conversations from one dashboard. Route specific queries to the right department automatically.
          </p>
          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-3"><FiCheckCircle className="text-[#0B2447] text-xl" /> Assign Dubai enquiries to the holiday team.</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-[#0B2447] text-xl" /> Route ticketing/visa issues to dedicated staff.</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-[#0B2447] text-xl" /> Add internal notes: "Family of 4, planning in August".</li>
            <li className="flex items-center gap-3"><FiCheckCircle className="text-[#0B2447] text-xl" /> Mark chats as Open, Pending Follow-Up, or Solved.</li>
          </ul>
        </div>
      </motion.article>

    </div>
  </section>
);
