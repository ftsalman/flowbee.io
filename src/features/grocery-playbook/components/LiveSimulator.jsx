import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';

export const LiveSimulator = () => (
  <section className="py-20 bg-white border-b border-gray-100 px-4 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
    <div className="w-full lg:w-6xl max-w-6xl text-center lg:text-left">
      <SectionHeader num="Live Example" title="Broadcast Simulation" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-gray-900 leading-[1.1]">
        See the <span className="text-[#EAB308]">Engine</span> in action.
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium">
        Look at how an automated promotional broadcast targets a user with elegant layered interaction bubbles and dynamic response buttons.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
         <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm font-bold text-gray-800 flex items-center gap-3 shadow-sm">
           <FiCheckCircle className="text-green-500 text-lg shrink-0"/> Multi-Layer Offer Push
         </div>
         <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm font-bold text-gray-800 flex items-center gap-3 shadow-sm">
           <FiCheckCircle className="text-green-500 text-lg shrink-0"/> Interactive Action Buttons
         </div>
         <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm font-bold text-gray-800 flex items-center gap-3 shadow-sm">
           <FiCheckCircle className="text-green-500 text-lg shrink-0"/> Auto Promo Code Injection
         </div>
         <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm font-bold text-gray-800 flex items-center gap-3 shadow-sm">
           <FiCheckCircle className="text-green-500 text-lg shrink-0"/> Direct Payment/Order Link
         </div>
      </div>
    </div>

    <figure className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      {/* High-Fidelity Light Mode Chat Simulator */}
      <div className="w-full max-w-[360px] bg-[#efeae2] rounded-[2.5rem] p-5 shadow-2xl border-[8px] border-gray-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
        <div className="flex flex-col gap-4 mt-8">
          
          {/* Outbound Broadcast Layers Offer Block */}
          <div className="bg-white text-gray-900 p-4 rounded-2xl rounded-tl-sm self-start max-w-[95%] shadow-sm text-sm border border-gray-100">
            <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2 border-b border-gray-100 pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 🛒 FreshMart Weekend Deals
            </div>
            Hey Ahmed! 🍅 **Weekend Grocery Deals Are Live!** <br/><br/>
            Save more on rice, cooking oil, fresh fruits, vegetables, and household essentials. Special Buy 1 Get 1 on selected bakery items! <br/><br/>
            <div className="mt-3 flex flex-col gap-2">
              <button className="bg-gray-50 text-[#128C7E] font-bold text-xs p-2.5 rounded-xl border border-gray-200 shadow-sm w-full text-center hover:bg-gray-100">View Offers</button>
              <button className="bg-gray-50 text-[#128C7E] font-bold text-xs p-2.5 rounded-xl border border-gray-200 shadow-sm w-full text-center hover:bg-gray-100">Order Now</button>
            </div>
          </div>

          {/* User Dynamic Interaction Response */}
          <div className="bg-[#dcf8c6] text-gray-900 p-3 rounded-2xl rounded-tr-sm self-end max-w-[80%] shadow-sm text-sm font-medium border border-[#cce8b6]">
            Order Now
          </div>

          {/* Instant Validation */}
          <div className="bg-white text-gray-900 p-4 rounded-2xl rounded-tl-sm self-start max-w-[95%] shadow-sm text-sm border border-gray-100">
            Great! Please send your grocery list as a text message, or choose items from our catalogue. Our team will confirm availability and price shortly. 🚚💨 <br/><br />
            <div className="flex gap-2">
              <button className="bg-[#EAB308] text-black font-bold text-xs p-2.5 rounded-xl shadow-sm flex-1 hover:bg-[#CA8A04] transition-colors">Send List</button>
              <button className="bg-gray-900 text-white font-bold text-xs p-2.5 rounded-xl shadow-sm flex-1 hover:bg-black transition-colors">View Catalogue</button>
            </div>
          </div>

        </div>
      </div>
    </figure>
  </section>
);
