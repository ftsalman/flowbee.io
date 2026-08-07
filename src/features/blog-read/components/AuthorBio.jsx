import React from "react";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";

export const AuthorBio = ({ author, authorImage }) => {
  return (
    <Card className="!mt-12 !bg-white !rounded-3xl !p-6 sm:!p-8 !border !border-gray-200 !shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
      <div className="w-16 h-16 rounded-2xl bg-[#FFD400] flex items-center justify-center font-black text-black text-2xl shadow-md flex-shrink-0 overflow-hidden">
        {authorImage ? (
          <img src={authorImage} alt={author} className="w-full h-full object-cover" />
        ) : (
          (author || "F")[0]
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <h4 className="font-extrabold text-lg text-neutral-900">
            {author || "Flowbee Team"}
          </h4>
          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider border border-blue-200">
            Author
          </span>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed">
          We are passionate about building the world's leading WhatsApp AI automation and customer engagement platform. Follow us for weekly insights on scaling conversion and workflow efficiency.
        </p>
      </div>
    </Card>
  );
};
