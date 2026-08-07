import React from "react";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

export const ArticleFeedback = ({ helpfulState, setHelpfulState }) => {
  return (
    <Card className="!mt-16 !pt-10 !border-t !border-gray-200/80 !bg-[#FAFBFD] !rounded-3xl !p-8 !text-center !border !shadow-sm !space-y-6">
      <h4 className="text-xl font-extrabold text-neutral-900">
        Did you find this article helpful?
      </h4>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <Button
          onClick={() => setHelpfulState("yes")}
          className={`!px-6 !py-3 !rounded-2xl !font-bold !text-sm transition-all flex items-center gap-2 !border cursor-pointer ${
            helpfulState === "yes"
              ? "!bg-[#FFD400] !text-black !border-[#CA8A04] scale-105 shadow-md"
              : "!bg-white !text-neutral-700 !border-gray-300 hover:!bg-gray-50 shadow-sm"
          }`}
        >
          <FiThumbsUp size={16} />
          <span>Yes, valuable!</span>
        </Button>
        <Button
          onClick={() => setHelpfulState("no")}
          className={`!px-6 !py-3 !rounded-2xl !font-bold !text-sm transition-all flex items-center gap-2 !border cursor-pointer ${
            helpfulState === "no"
              ? "!bg-black !text-white !border-black scale-105 shadow-md"
              : "!bg-white !text-neutral-700 !border-gray-300 hover:!bg-gray-50 shadow-sm"
          }`}
        >
          <FiThumbsDown size={16} />
          <span>Needs improvement</span>
        </Button>
      </div>
      {helpfulState && (
        <p className="text-xs text-green-600 font-bold animate-fadeIn mt-4 block">
          ✨ Thank you for your feedback! Our editorial team uses this to improve Flowbee content.
        </p>
      )}
    </Card>
  );
};
