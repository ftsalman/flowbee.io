import React from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiCpu, FiUsers, FiCheckCircle, FiShoppingCart } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const SolutionPillars = () => (
  <section className="py-24 bg-gray-50 border-b border-gray-200">
    <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-24 md:space-y-32">
      
      {/* 1. SEGMENTATION */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1 max-w-2xl">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-[#EAB308]/10 rounded-2xl flex items-center justify-center border border-[#EAB308]/20">
            <FiFilter className="text-2xl md:text-3xl text-[#EAB308]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">Customer Segmentation & <br className="hidden md:block"/><span className="text-[#EAB308]">Smart Tagging</span></h2>
          <p className="text-xs md:text-md lg:text-md text-gray-600 leading-relaxed font-medium">
            Not all supermarket customers are the same. Flowbee.io helps you organize customers with tags and groups so your offers become hyper-relevant.
          </p>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Example Customer Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["Monthly Buyer", "Fresh Vegetables", "Meat & Fish", "Baby Products", "VIP", "Bulk Buyer", "Delivery", "Weekend Shopper"].map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center order-1 lg:order-2">
          <img src="/images/showcase-segmentation.png" alt="Supermarket Customer Segmentation" className="w-[100%] md:w-[100%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-300" />
        </div>
      </motion.article>

      {/* 2. AUTO REPLY */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative w-full flex justify-center items-center">
          <img src="/images/showcase-grocery-autoreply.png" alt="Supermarket Auto-Reply" className="w-[100%] md:w-[100%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-[#EAB308]/15" />
        </div>
        <div className="space-y-6 md:space-y-8 max-w-2xl lg:pl-8">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-[#25D366]/10 rounded-2xl flex items-center justify-center border border-[#25D366]/20">
            <FiCpu className="text-2xl md:text-3xl text-[#128C7E]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[1.1]">Auto Reply for <br className="hidden md:block"/><span className="text-[#128C7E]">Supermarket Enquiries</span></h2>
          <p className="text-sm md:text-md lg:text-lg text-gray-600 leading-relaxed font-medium">
            Customers often message asking about offers, delivery, working hours, and product availability. Flowbee.io replies instantly and guides them to the right option.
          </p>
          <ul className="space-y-4 md:space-y-6 text-base md:text-md text-gray-700 font-bold">
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Interactive Menus:</strong> "Today's Offers", "Place Order", or "Talk to Staff".</span></li>
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Category Routing:</strong> Route clients to Meat & Fish, Bakery, or Fresh Produce instantly.</span></li>
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Logistics Info:</strong> Auto-reply with delivery areas, minimum order values, and store locations.</span></li>
          </ul>
        </div>
      </motion.article>

      {/* 3. TEAM INBOX */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1 max-w-2xl">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
            <FiUsers className="text-3xl md:text-4xl text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[1.1]">Manage Broadcast Replies with <span className="text-blue-600">Team Inbox</span></h2>
          <p className="text-sm md:text-md lg:text-lg text-gray-600 leading-relaxed font-medium">
            Broadcasts bring massive reply volumes. "Can you deliver?", "What is the price?". Flowbee's Team Inbox helps your staff manage the chaos without confusion.
          </p>
          <ul className="space-y-4 md:space-y-6 text-base md:text-md text-gray-700 font-bold">
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Smart Assignment:</strong> Assign delivery queries to drivers and bulk orders to managers.</span></li>
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Status Tracking:</strong> Mark chats as Open, Pending, or Solved to clear order backlogs.</span></li>
            <li className="flex items-start gap-4"><FiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-1" /> <span className="flex-1"><strong>Collision Detection:</strong> Avoid two staff members replying to the same customer.</span></li>
          </ul>
        </div>
        <div className="relative w-full flex justify-center items-center order-1 lg:order-2">
          <img src="/images/showcase-grocery-teaminbox.png" alt="Supermarket Team Inbox" className="w-[120%] md:w-[120%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-blue-500/10 border border-gray-200" />
        </div>
      </motion.article>

      {/* 4. CATALOGUE & ORDERING */}
      <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative w-full flex justify-center items-center">
          <img src="/images/showcase-grocery-catalog.png" alt="WhatsApp Grocery Catalog" className="w-[120%] md:w-[120%] h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-300 border border-gray-200" />
        </div>
        <div className="space-y-6 md:space-y-8 max-w-2xl lg:pl-8">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-100 rounded-2xl flex items-center justify-center border border-purple-200">
            <FiShoppingCart className="text-3xl md:text-4xl text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[1.1]">Make Product Enquiries Easier via <span className="text-purple-600">WhatsApp Catalogues</span></h2>
          <p className="text-sm md:text-md lg:text-lg text-gray-600 leading-relaxed font-medium">
            Instead of sending images manually again and again, guide customers through native product categories, offers, and add-to-cart options smoothly.
          </p>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Example Catalog Flow</h4>
            <p className="text-sm text-gray-600 font-medium leading-relaxed italic">
              "Welcome to FreshMart. Please choose a category: <br/> 1. Grocery Essentials <br/> 2. Fresh Vegetables <br/> 3. Meat & Fish <br/> 4. Baby Care"
            </p>
            <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-md">Add items to Order</button>
          </div>
        </div>
      </motion.article>

    </div>
  </section>
);
