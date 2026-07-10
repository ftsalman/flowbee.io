import React from 'react';
import { FiDatabase, FiFilter, FiBarChart2, FiRefreshCw, FiLayers, FiShield } from 'react-icons/fi';
import { SectionHeader } from './SectionHeader';

export const SubfeatureGrid = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-white border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader num="Structural Integrity" title="Comprehensive Platform Architecture" />
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-gray-900">Advanced Capabilities for Premium Jewellers</h2>
        <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto">Beyond the core modules, Flowbee engineers the operational overhead out of your retail infrastructure through a suite of integrated micro-services.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B8860B]/10 text-[#B8860B] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiDatabase className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">POS & ERP Synchronization</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">Connect Flowbee directly with your existing POS/ERP frameworks to automatically update inventory status, trigger restocking alerts, and synchronize customer ledger histories.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366]/10 text-[#128C7E] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiFilter className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">Audience Control Matrices</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">Isolate demographics systematically. Tag users automatically based on "Bridal Interest," "High Budget Leads," or "Pending Showroom Visits" for hyper-targeted retargeting campaigns.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiBarChart2 className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">Executive Dashboards</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">Provide your operations directors with absolute oversight. Gain structural visibility into conversion rates, agent efficiency, total active pipelines, and campaign ROI metrics.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-red-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiRefreshCw className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">Abandoned Cart Recovery</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">If a tracked prospect spends time reviewing a high-ticket diamond ring catalog but abandons the flow, the system utilizes delayed-triggers to dispatch customized incentives.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-50 text-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiLayers className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">Omnichannel Sequencing</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">Map the entire customer journey from intent parsing via NLP, through automated media rendering, to the final showroom booking integration seamlessly.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl hover:shadow-xl hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-50 text-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <FiShield className="text-xl md:text-2xl" />
          </div>
          <h3 className="text-md md:text-xl font-black mb-2 md:mb-3 text-gray-900">Official API Security</h3>
          <p className="text-sm md:text-md text-gray-600 leading-relaxed font-medium flex-grow">Eliminate the risk of arbitrary bans associated with unofficial apps. Migrate your numbers to the Official WhatsApp Business API framework, verifying your brand for the Green Tick badge.</p>
        </div>

      </div>
    </div>
  </section>
);
