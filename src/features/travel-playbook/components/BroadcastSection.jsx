import React from 'react';
import { FiTarget } from 'react-icons/fi';

export const BroadcastSection = () => (
  <section className="py-32 bg-[#0B2447] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/30">
          <FiTarget size={16} /> Targeted Marketing Engine
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          Broadcast Messaging for Travel Offers
        </h2>
        <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
          Flowbee.io helps travel agencies send targeted WhatsApp broadcast campaigns to the exact right customer groups without getting blocked.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
        {/* Broadcast Content */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Why Targeted Broadcast Matters</h3>
            <p className="text-slate-300 leading-relaxed">
              A honeymoon customer should not receive the same message as a corporate travel client. A visa lead needs different updates than a family vacation prospect. Segment your contacts and send highly relevant, high-converting campaigns.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <h4 className="font-bold text-blue-300 mb-2">Campaign Examples</h4>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Dubai holiday packages</li>
                <li>• Kerala tour offers</li>
                <li>• Umrah group packages</li>
                <li>• Honeymoon specials</li>
                <li>• UAE National Day deals</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <h4 className="font-bold text-blue-300 mb-2">Smart Segmentation</h4>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• By Destination (Europe, Asia)</li>
                <li>• By Interest (Visa, Ticketing)</li>
                <li>• By Stage (Payment Pending)</li>
                <li>• Past travellers for repeat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Broadcast Visual Mockup */}
        <div className="bg-[#102A4A] p-6 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
          <div className="absolute -top-4 -right-4 bg-[#25D366] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg transform rotate-3">
            98% Open Rate
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-inner flex flex-col gap-4">
            <div className="bg-[#E1F5FE] text-slate-800 p-4 rounded-2xl rounded-tl-none self-start w-full border border-blue-100 relative">
              <div className="w-full h-32 bg-slate-200 rounded-xl mb-3 overflow-hidden">
                {/* [IMAGE PLACEHOLDER: broadcast-dubai.png - Beautiful picture of Dubai skyline or Burj Khalifa] */}
                <img src="/images/broadcast-dubai.png" alt="Dubai Package" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-bold text-slate-900 mb-1">Planning your next holiday? ✈️</p>
              <p className="text-xs text-slate-600 mb-3">Explore our latest Dubai family package with hotel stay, sightseeing, airport pickup, and travel support.</p>
              <p className="text-xs text-slate-500 font-semibold mb-2">Reply with:</p>
              <div className="flex flex-col gap-2">
                <button className="bg-white border border-slate-200 text-[#0B2447] py-2 rounded-lg text-xs font-bold w-full shadow-sm">View Package</button>
                <button className="bg-white border border-slate-200 text-[#0B2447] py-2 rounded-lg text-xs font-bold w-full shadow-sm">Get Price</button>
                <button className="bg-white border border-slate-200 text-[#0B2447] py-2 rounded-lg text-xs font-bold w-full shadow-sm">Talk to Expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
