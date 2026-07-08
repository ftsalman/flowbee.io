import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { featureMatrixData } from "../constants/pricingData";

export const FeatureMatrixSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-40">
      <h2 className="text-2xl lg:text-4xl font-black tracking-tighter text-center mb-12 lg:mb-20 uppercase italic">
        📊 Full Feature Matrix
      </h2>
      <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="p-5 lg:p-8 text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-gray-400">
                Feature Capabilities
              </th>
              <th className="p-5 lg:p-8 text-xs  font-black text-[#111]">
                Starter
              </th>
              <th className="p-5 lg:p-8 text-xs  font-black bg-[#111] text-[#FFDD2D]">
                Growth
              </th>
              <th className="p-5 lg:p-8 text-xs font-black text-[#111]">
                PRO
              </th>
            </tr>
          </thead>
          <tbody className="text-[10px] lg:text-sm font-medium">
            {featureMatrixData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-50">
                <td className="p-5 lg:p-8 font-black text-[#111] uppercase text-[9px] lg:text-[11px]">
                  {row.f}
                </td>
                <td className="p-5 lg:p-8">
                  {row.s === "✅" ? (
                    <FiCheck className="text-green-500" />
                  ) : row.s === "❌" ? (
                    <FiX className="text-red-400" />
                  ) : (
                    row.s
                  )}
                </td>
                <td className="p-5 lg:p-8 bg-gray-50 font-bold">
                  {row.g === "✅" ? (
                    <FiCheck className="text-green-500" />
                  ) : row.g === "❌" ? (
                    <FiX className="text-red-400" />
                  ) : (
                    row.g
                  )}
                </td>
                <td className="p-5 lg:p-8">
                  {row.p === "✅" ? (
                    <FiCheck className="text-green-500" />
                  ) : (
                    row.p
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
