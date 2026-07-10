import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';
import { problemsData } from '../constants/groceryData';

export const ChallengeSection = () => (
  <section className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader num="The Challenge" title="Common Marketing Problems Faced by Supermarkets" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {problemsData.map((problem, i) => (
          <div key={i} className="p-5 rounded-3xl bg-gray-50 border border-gray-200 hover:border-red-200 transition-colors">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <FiAlertCircle />
            </div>
            <h3 className="text-md font-black text-gray-900 mb-3">{problem.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{problem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
