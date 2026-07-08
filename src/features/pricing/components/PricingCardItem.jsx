import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiTarget, FiBriefcase } from "react-icons/fi";
import {
  Card,
  Button,
  Tag,
  DataList,
} from "../../../../lib/turtle-ui/components";
import {
  getPlanFeatures,
  REGISTER_LINK,
  pricingTable,
} from "../constants/pricingData";
import { getPriceData } from "../utils/pricingUtils";

export const PricingCardItem = ({ plan, billingCycle, currency }) => {
  const data = getPriceData(plan, currency, pricingTable);
  const isGrowth = plan === "growth";
  const displayPrice =
    billingCycle === "monthly" ? data.monthly : data.yearly;
  const features = getPlanFeatures(plan);

  return (
    <motion.div whileHover={{ y: -10 }} className="h-full flex">
      <Card
        className={`!p-8 lg:!p-10 !rounded-[2.5rem] lg:!rounded-[3.5rem] flex flex-col transition-all relative w-full ${
          isGrowth
            ? "!bg-[#111] !text-white lg:scale-105 !shadow-2xl !border-4 !border-[#FFDD2D]"
            : "!bg-white !border !border-gray-100 !shadow-xl"
        }`}
      >
        {isGrowth && (
          <Tag
            variant="yellow"
            className="absolute -top-5 left-1/2 -translate-x-1/2 !bg-[#FFDD2D] !text-[#111] text-[9px] lg:text-[10px] font-black !px-6 !py-2 !rounded-full uppercase tracking-[0.2em] !shadow-xl !border-none !w-auto !inline-block !leading-normal"
          >
            Best Value
          </Tag>
        )}

        <div className="mb-8 lg:mb-5 text-left">
          <h3
            className={`text-xl lg:text-lg font-black mb-2 uppercase flex items-center gap-2 ${
              isGrowth ? "text-[#FFDD2D]" : "text-[#111]"
            }`}
          >
            {plan === "starter" && <FiZap className="text-orange-500" />}
            {plan === "growth" && <FiTarget />}
            {plan === "pro" && <FiBriefcase className="text-purple-500" />}
            {plan}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-xl lg:text-4xl font-black">
              {currency.symbol}
              {displayPrice}
            </span>
            <span className="text-gray-400 font-bold text-xs lg:text-sm">
              /{billingCycle === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          {billingCycle === "yearly" && (
            <Tag
              variant="green"
              className="mt-4 text-[9px] lg:text-[10px] font-black !text-[#25D366] uppercase tracking-widest !bg-[#25D366]/10 !inline-block !px-3 !py-1 !rounded-lg !border-none !w-auto"
            >
              🎁 Save {currency.symbol}
              {data.save} Yearly
            </Tag>
          )}
        </div>

        <div className="mb-4 flex-grow border-t border-gray-100 pt-4">
          <DataList
            data={features}
            className="!grid !grid-cols-1 !gap-3 text-xs lg:text-[12px] font-medium text-left w-full"
            render={(feature, i) => (
              <div key={i} className="flex gap-3 items-start">
                <FiCheck
                  className={`shrink-0 mt-0.5 ${
                    isGrowth ? "text-[#FFDD2D]" : "text-[#25D366]"
                  }`}
                />
                <span
                  className={isGrowth ? "text-gray-300" : "text-gray-500"}
                >
                  {feature}
                </span>
              </div>
            )}
          />
        </div>

        <Button
          onClick={() => window.open(REGISTER_LINK, "_blank")}
          variant={isGrowth ? "primary" : "secondary"}
          size="md"
          className="w-full"
        >
          Get Started
        </Button>
      </Card>
    </motion.div>
  );
};
