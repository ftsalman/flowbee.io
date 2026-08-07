import React, { useState } from "react";
import { DataList } from "../../../../lib/turtle-ui/components/list/DataList";

const FaqAccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200/80 rounded-xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center gap-3 text-left bg-white hover:bg-gray-50/50 transition-colors cursor-pointer"
      >
        <span 
          className="flex-shrink-0 text-[10px] text-neutral-700 transition-transform duration-200 flex items-center justify-center" 
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
        <span className="font-medium text-neutral-900 text-[17px] leading-snug">{faq.question}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pl-[44px] -mt-1">
          <p className="text-[#5A5A5A] leading-[1.8] whitespace-pre-wrap text-[16px]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export const FaqSection = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 pt-10">
      <h3 id="faq" className="faq-heading text-3xl font-bold text-neutral-900 mb-8 tracking-tight scroll-mt-24">
        Frequently asked questions
      </h3>
      <DataList
        data={faqs}
        className="space-y-4"
        render={(faq, idx) => <FaqAccordionItem key={idx} faq={faq} />}
      />
    </div>
  );
};
