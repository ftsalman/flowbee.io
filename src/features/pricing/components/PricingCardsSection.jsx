import React from "react";
import { PricingCardItem } from "./PricingCardItem";

export const PricingCardsSection = ({ billingCycle, currency }) => {
  const plans = ["starter", "growth", "pro"];

  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 lg:py-24">
      {plans.map((plan) => (
        <PricingCardItem
          key={plan}
          plan={plan}
          billingCycle={billingCycle}
          currency={currency}
        />
      ))}
    </section>
  );
};
