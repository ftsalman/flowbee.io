import React from 'react';
import { templateCategories, templateMapping } from '../constants/guidelinesData';

export const TemplateRulesSection = () => (
  <>
    {/* 6. Templates */}
    <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-gray-100 print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid">
      <h2 className="text-2xl font-black text-[#111] flex items-center gap-3 mb-4"><span className="text-purple-500">6.</span> Use Approved WhatsApp Templates</h2>
      <p className="text-gray-500 font-medium print:text-black">If the customer has not messaged your business first, or if the 24-hour customer service window has ended, you must use an approved WhatsApp message template. WhatsApp templates are reviewed and approved by Meta.</p>
      
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        {templateCategories.map((cat, idx) => (
          <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 print:bg-transparent print:border-gray-300">
            <h4 className="font-black text-[#111] mb-2">{cat.title}</h4>
            <p className="text-xs text-gray-500 mb-4 print:text-black">{cat.desc}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{cat.example}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 7. Template Categories Table */}
    <div className="bg-gray-950 text-white p-8 lg:p-10 rounded-[2rem] shadow-xl print:bg-transparent print:text-black print:border-b print:border-gray-300 print:rounded-none print:shadow-none print:px-0 print:break-inside-avoid mt-8 print:mt-6">
      <h2 className="text-2xl font-black flex items-center gap-3 mb-6"><span className="text-[#FFDD2D]">7.</span> Choose the Correct Template Category</h2>
      <p className="text-gray-400 font-medium mb-8 print:text-black">Submitting a template under the wrong category may lead to rejection. Even if it is approved, it may later create quality or compliance issues.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20 print:border-gray-300">
              <th className="p-4 font-black uppercase text-xs tracking-widest text-gray-400 print:text-black">Message Type</th>
              <th className="p-4 font-black uppercase text-xs tracking-widest text-gray-400 print:text-black">Correct Category</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {templateMapping.map((item, idx) => {
              const bgClass = `bg-${item.style}-500/20`;
              const textClass = `text-${item.style}-300`;
              const borderClass = `border-${item.style}-500/30`;
              const printTextClass = `print:text-${item.style}-800`;
              
              // To ensure Tailwind classes are completely built, we use static mappings here for simple colors:
              let pillClasses = "";
              if (item.style === "purple") {
                pillClasses = "bg-purple-500/20 text-purple-300 border-purple-500/30 print:text-purple-800";
              } else if (item.style === "blue") {
                pillClasses = "bg-blue-500/20 text-blue-300 border-blue-500/30 print:text-blue-800";
              } else if (item.style === "orange") {
                pillClasses = "bg-orange-500/20 text-orange-300 border-orange-500/30 print:text-orange-800";
              }

              return (
                <tr key={idx} className="border-b border-white/10 print:border-gray-200">
                  <td className="p-4 print:text-black">{item.type}</td>
                  <td className="p-4">
                    <span className={`${pillClasses} px-3 py-1.5 rounded-lg font-black tracking-widest text-[10px] uppercase border print:border-gray-400`}>
                      {item.category}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </>
);
