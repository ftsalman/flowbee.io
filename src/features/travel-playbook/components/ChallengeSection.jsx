import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';
import { problemsData } from '../constants/travelData';

export const ChallengeSection = () => (
  <section className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader num="The Challenge" title="Common WhatsApp Problems Faced by Travel Businesses" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {problemsData.map((problem, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <FiAlertCircle />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">{problem.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
