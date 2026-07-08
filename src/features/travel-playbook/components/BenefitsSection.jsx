import React from "react";
import { benefitsData } from "../constants/travelData";

export const BenefitsSection = () => (
  <section className="py-24 bg-[#0B2447] text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-black mb-16">
        Why Travel Agencies Choose Flowbee.io
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {benefitsData.map((benefit, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl text-left"
          >
            <h3 className="text-md font-bold text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
