import React from 'react';
import { FiClock } from 'react-icons/fi';
import { retentionData } from '../constants/privacyData';

export const RetentionTable = () => (
  <section>
    <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-6 uppercase tracking-tight">
      <FiClock className="text-yellow-400" /> 10. Retention and Deletion
    </h2>
    <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
      <table className="w-full text-left border-collapse text-xs">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 font-black uppercase text-gray-400 border-b border-gray-100">Data Type</th>
            <th className="p-4 font-black uppercase text-gray-400 border-b border-gray-100">Retention Period</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {retentionData.map((row, idx) => (
            <tr key={idx} className={idx < retentionData.length - 1 ? "border-b border-gray-50" : ""}>
              <td className="p-4">{row.type}</td>
              <td className="p-4">{row.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="mt-4 italic">Data Deletion: Request via support@flowbee.io (processed in 7-30 days).</p>
  </section>
);
