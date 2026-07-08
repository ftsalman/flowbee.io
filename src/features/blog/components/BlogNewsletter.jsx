import React, { useState } from "react";
import { Button } from "../../../../lib/turtle-ui/components";
import { ThreeBackground } from "./ThreeBackground";

export const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#0C0020] text-white relative overflow-hidden">
      {/* 1. Antigravity Three.js Interactive Particle Background */}
      <ThreeBackground />

      {/* Background Decorative Glow Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[#FFD400]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-[#FFD400]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFD400]/20 border border-[#FFD400]/40 text-[#FFD400] font-bold text-xs uppercase tracking-widest mb-6">
          Start Messaging Today
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Ready to scale your brand with Flowbee & WhatsApp Business API?
        </h2>

        <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-normal">
          Join over 10,000+ growing businesses using conversational commerce and AI chatbots to double their conversion rates.
        </p>

        {subscribed ? (
          <div className="p-6 bg-[#FFD400]/20 border border-[#FFD400] rounded-2xl max-w-md mx-auto animate-fade-in">
            <p className="text-xl font-bold text-[#FFD400] mb-1">🎉 You're on the list!</p>
            <p className="text-sm text-neutral-200">We'll send the best growth insights straight to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email..."
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:border-[#FFD400] focus:bg-white/15 transition-all text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-neutral-900 !font-extrabold !rounded-xl !px-6 !py-4 shadow-[3px_3px_0px_0px_#C9A000] active:scale-95 transition-all whitespace-nowrap"
            >
              Get Started 
            </Button>
          </form>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#FFD400]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#FFD400]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            7-day free trial
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#FFD400]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Instant WhatsApp integration
          </span>
        </div>
      </div>
    </section>
  );
};
