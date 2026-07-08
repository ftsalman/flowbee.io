import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiTarget, FiBriefcase } from 'react-icons/fi';
import { pricingTable } from '../constants/pricingData';

export const PricingCards = ({ selectedRegion, billingCycle }) => {
  const getPriceData = (plan) => {
    const isUSD = selectedRegion.code === 'USD';
    const baseData = isUSD ? pricingTable.AED : pricingTable[selectedRegion.code];
    const rate = isUSD ? 0.27 : 1; 
    const data = baseData[plan];
    return {
      monthly: (data.monthly * rate).toFixed(isUSD ? 2 : 0),
      yearly: (data.yearly * rate).toFixed(isUSD ? 2 : 0),
      save: (data.save * rate).toFixed(isUSD ? 2 : 0),
      extraUser: (data.extraUser * rate).toFixed(isUSD ? 2 : 0),
      extraBranch: (data.extraBranch * rate).toFixed(isUSD ? 2 : 0)
    };
  };

  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 lg:py-24">
      {['starter', 'growth', 'pro'].map((plan) => {
        const data = getPriceData(plan);
        const isGrowth = plan === 'growth';
        const displayPrice = billingCycle === 'monthly' ? data.monthly : data.yearly;

        return (
          <motion.div 
            key={plan} 
            whileHover={{ y: -10 }}
            className={`p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col transition-all relative ${isGrowth ? 'bg-[#111] text-white lg:scale-105 shadow-2xl border-4 border-[#FFDD2D]' : 'bg-white border border-gray-100 shadow-xl'}`}
          >
            {isGrowth && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFDD2D] text-[#111] text-[9px] lg:text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">Best Value</div>}
            
            <div className="mb-8 lg:mb-10 text-left">
              <h3 className={`text-xl lg:text-2xl font-black mb-4 uppercase flex items-center gap-2 ${isGrowth ? 'text-[#FFDD2D]' : 'text-[#111]'}`}>
                {plan === 'starter' && <FiZap className="text-orange-500"/>}
                {plan === 'growth' && <FiTarget />}
                {plan === 'pro' && <FiBriefcase className="text-purple-500"/>}
                {plan}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-6xl font-black">{selectedRegion.symbol}{displayPrice}</span>
                <span className="text-gray-400 font-bold text-xs lg:text-sm">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              {billingCycle === 'yearly' && (
                <p className="mt-4 text-[9px] lg:text-[10px] font-black text-[#25D366] uppercase tracking-widest bg-[#25D366]/10 inline-block px-3 py-1 rounded-lg">🎁 Save {selectedRegion.symbol}{data.save} Yearly</p>
              )}
            </div>

            <div className="space-y-6 mb-12 flex-grow border-t border-gray-100 pt-8">
              <div className="space-y-3 text-xs lg:text-sm font-medium text-left">
                {[
                  `👥 ${plan === 'starter' ? '3' : plan === 'growth' ? '10' : '100'} Users Included`,
                  plan === 'starter' ? "5 Basic Chatbots" : plan === 'growth' ? "20 Advanced Chatbots" : "Unlimited Chatbots",
                  plan === 'starter' ? "100+ Templates" : plan === 'growth' ? "200+ Templates" : "Unlimited Templates",
                  "Bulk Broadcast Messaging",
                  "Blue Tick Verification Support",
                  plan === 'starter' ? "Up to 10 Keywords" : plan === 'growth' ? "Up to 100 Keywords" : "Unlimited Keywords",
                  "Unlimited Conversations",
                  plan !== 'starter' && "Interactive Form Support",
                  plan !== 'starter' && "Advanced Automation Triggers",
                  plan !== 'starter' && "Appointment Booking Module",
                  plan !== 'starter' && "Carousel Message Support",
                  plan !== 'starter' && "API & Webhook Access",
                  plan !== 'starter' && "Payment Integration (Stripe)",
                  plan === 'pro' && "Full UI Customizations",
                  plan === 'pro' && "Native Integrations (Zoho/Odoo)",
                  plan === 'pro' && "Priority Support & Manager"
                ].filter(Boolean).map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <FiCheck className={`shrink-0 mt-0.5 ${isGrowth ? 'text-[#FFDD2D]' : 'text-[#25D366]'}`} />
                    <span className={isGrowth ? 'text-gray-300' : 'text-gray-500'}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://app.flowbee.io/auth/register" target="_blank" rel="noreferrer" className={`w-full py-4 lg:py-5 rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-widest text-center shadow-xl hover:scale-105 transition-all ${isGrowth ? 'bg-[#FFDD2D] text-[#111]' : 'bg-[#111] text-white'}`}>Get Started</a>
          </motion.div>
        )
      })}
    </section>
  );
};
