import React from "react";
import { FiBarChart2, FiCpu, FiLayers } from "react-icons/fi";
import { DataList } from "../../../../../lib/turtle-ui/components";
import { BENTO_LOGOS, CHART_BARS } from "../../constants/featuresData";

const BentoLogoItem = (logo) => (
  <div
    key={logo.name}
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:border-[#25D366] transition-all overflow-hidden"
  >
    <img
      src={logo.src}
      alt={logo.name}
      className="w-full h-full object-contain grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
    />
  </div>
);

const ChartBarItem = (h, index) => (
  <div
    key={index}
    className="flex-1 bg-[#25D366]/10 group-hover:bg-[#25D366] rounded-t-xl transition-all duration-700"
    style={{ height: `${h}%` }}
  ></div>
);

export const DeepUtility = () => {
  return (
    <section className="py-16 lg:py-32 bg-[#fafafa] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-[#111]">
            Deep Utility.
          </h2>
          <p className="text-sm lg:text-md text-gray-400 font-medium italic uppercase tracking-widest">
            Enterprise Ecosystem Sync
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="md:col-span-2 bg-[#111] p-10 lg:p-12 rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden flex flex-col justify-between group shadow-2xl border border-white/5 min-h-[350px]">
            <div className="z-10">
              <DataList
                data={BENTO_LOGOS}
                render={BentoLogoItem}
                className="flex flex-wrap gap-3 mb-8 !p-0"
              />
              <h3 className="text-4xl lg:text-5xl text-white font-black tracking-tighter leading-none mb-6 uppercase italic">
                Ecosystem <br /> Sync.
              </h3>
              <p className="text-gray-500 text-sm font-medium max-w-sm">
                Direct two-way sync with Zoho, Shopify, WooCommerce, and
                Odoo. No third-party tools or latency.
              </p>
            </div>
            <div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity">
              <FiLayers size={300} className="text-white rotate-12" />
            </div>
          </div>
          <div className="bg-white p-10 lg:p-12 rounded-[3rem] lg:rounded-[4rem] border border-gray-100 shadow-xl flex flex-col justify-between hover:border-blue-400 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:rotate-12 transition-transform">
              <FiCpu size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-[#111]">
                REST API.
              </h3>
              <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase tracking-widest leading-tight">
                Connect existing <br />
                Legacy Systems
              </p>
            </div>
          </div>
          <div className="bg-white p-10 lg:p-12 rounded-[3rem] lg:rounded-[4rem] border border-gray-100 shadow-xl flex flex-col justify-between hover:border-[#25D366] transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#25D366] mb-6">
              <img
                src="/images/logos/stripe.png"
                className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                alt="Stripe"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-[#111]">
                Stripe.
              </h3>
              <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase tracking-widest leading-tight">
                Secure In-Chat <br />
                Payments Accepted
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-white p-10 lg:p-16 rounded-[3rem] lg:rounded-[4rem] border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-12 group">
            <div className="flex-1">
              <FiBarChart2 className="text-[#25D366] mb-6" size={56} />
              <h3 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4">
                Deep Analytics Hub.
              </h3>
              <p className="text-gray-400 text-sm font-medium max-w-md">
                Track delivery rates, open rates, and direct conversion ROI
                from every broadcast and automation flow.
              </p>
            </div>
            <div className="flex-1 w-full">
              <DataList
                data={CHART_BARS}
                render={ChartBarItem}
                className="flex items-end gap-2 lg:gap-4 h-40 px-4 !p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
