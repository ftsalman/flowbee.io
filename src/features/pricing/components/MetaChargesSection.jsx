import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "../../../../lib/turtle-ui/components";
import { META_PRICING_LINK } from "../constants/pricingData";

export const MetaChargesSection = () => {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-32 border-y border-gray-100 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tighter text-[#111]">
          Meta Platform Fees
        </h2>
        <p className="text-gray-500 font-medium mb-10 text-sm lg:text-lg">
          Meta (WhatsApp) conversation charges are separate from Flowbee
          platform fees. They are billed based on conversation categories
          (Marketing, Utility, Authentication, and Service).
        </p>
        <Button
          onClick={() => window.open(META_PRICING_LINK, "_blank")}
          variant="secondary"
          size="md"
        >
          Latest Meta Charges <FiExternalLink />
        </Button>
      </div>
    </section>
  );
};
