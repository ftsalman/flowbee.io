import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCheckCircle, FiTarget, FiShoppingBag, FiUsers } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const OmnichannelMechanics = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 lg:space-y-32">
      
      {/* 1. AUTO REPLY CHATBOT */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 lg:pr-8 order-2 lg:order-1">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366]/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#25D366]/20">
            <FiCpu className="text-2xl md:text-3xl text-[#128C7E]" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-gray-900">NLP Auto-Reply & <br className="hidden md:block"/><span className="text-[#128C7E]">Visual Chatflows</span></h2>
          <p className="text-base md:text-md lg:text-md text-gray-600 leading-relaxed">
            Never lose a hot lead because your showroom was closed. Construct complex conversational architectures to automate repetitive baseline queries and secure appointments.
          </p>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-md text-gray-700 font-bold">
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>24/7 Gold Rates:</strong> Automated delivery of today's live 22k and 24k Gold Rates.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Interactive Booking:</strong> Native list menus guiding customers to book physical showroom visits seamlessly.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Human Fallback:</strong> Flawless transition from automated bot logic to human sales executives for custom ornament negotiations.</span></li>
          </ul>
        </div>
        <div className="relative w-full flex justify-center items-center order-1 lg:order-2">
          <img src="/images/usecase-goldrate-light.png" alt="Instant Jewellery Auto-Reply" className="w-[80%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-[#128C7E]/20" />
        </div>
      </motion.article>

      {/* 2. BROADCAST */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="relative w-full flex justify-center items-center">
          <img src="/images/features-broadcast.png" alt="Jewellery Broadcast Campaigns" className="w-[100%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-[#B8860B]/20" />
        </div>
        <div className="space-y-4 md:space-y-6 lg:pl-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B8860B]/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#B8860B]/20">
            <FiTarget className="text-2xl md:text-3xl text-[#B8860B]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">High-Conversion <br className="hidden md:block"/><span className="text-[#B8860B]">Broadcast Architecture</span></h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Bypass algorithms and spam folders entirely. Push highly targeted festive campaigns, making-charge discounts, and personalized VIP previews with delivery and open rates exceeding 95%.
          </p>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 font-bold">
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Granular Segmentation:</strong> Trigger campaigns based on historical purchase data (e.g., Solitaire buyers vs. Gold coin investors).</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Campaign Deployment:</strong> Launch massive templates for Akshaya Tritiya or Diwali instantly.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Telemetry & Analytics:</strong> Deep granular tracking on read receipts, button clicks, and link click-throughs.</span></li>
          </ul>
        </div>
      </motion.article>

      {/* 3. E-COMMERCE */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 lg:pr-8 order-2 lg:order-1">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B8860B]/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#B8860B]/20">
            <FiShoppingBag className="text-2xl md:text-3xl text-[#B8860B]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">WhatsApp Jewellery E-Commerce & <span className="text-[#B8860B]">Catalogues</span></h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Eliminate friction caused by external website links and fragmented image galleries. Integrate your high-value gold, diamond, and uncut Polki inventory directly into native WhatsApp UI components.
          </p>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 font-bold">
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Native Browsing:</strong> Customers interact with carousel collections without leaving the application environment.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Checkout & Cart Recovery:</strong> Enable direct 'Add to Cart' functionality with automated abandoned-cart follow-up nodes.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#25D366] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Dynamic API Pricing:</strong> Sync real-time inventory and pricing matrices via webhooks tied to today's fluctuating gold rates.</span></li>
          </ul>
        </div>
        <div className="relative w-full flex justify-center items-center order-1 lg:order-2">
          <img src="/images/features-ecommerce.png" alt="WhatsApp Jewellery E-Commerce Catalog" className="w-[100%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-[#B8860B]/20" />
        </div>
      </motion.article>

      {/* 4. TEAM INBOX */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="relative w-full flex justify-center items-center">
          <img src="/images/features-teaminbox.png" alt="Multi-Agent Jewellery Team Inbox" className="w-[100%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-[#128C7E]/20" />
        </div>
        <div className="space-y-4 md:space-y-6 lg:pl-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366]/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#25D366]/20">
            <FiUsers className="text-2xl md:text-3xl text-[#128C7E]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">Multi-Agent <br className="hidden md:block"/><span className="text-[#128C7E]">Algorithmic Routing</span> Inbox</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Consolidate your entire showroom staff under a single, verified Official WhatsApp number. Deploy intelligent routing rules to ensure high-net-worth diamond buyers connect with senior executives instantly.
          </p>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 font-bold">
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Smart Assignment:</strong> Automatically route bridal inquiries to dedicated bridal consultants based on keyword intent.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Silent Collaboration:</strong> Add private internal tags (e.g., "Budget &gt; 10L") alongside active customer chats for context.</span></li>
            <li className="flex items-start md:items-center gap-3"><FiCheckCircle className="text-[#B8860B] text-lg md:text-xl shrink-0 mt-0.5 md:mt-0" /> <span className="flex-1"><strong>Collision Detection:</strong> Prevent duplicate replies with real-time "Agent is typing" awareness across your sales floor.</span></li>
          </ul>
        </div>
      </motion.article>

    </div>
  </section>
);
