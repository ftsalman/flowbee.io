import React from "react";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";
import { FiMessageSquare, FiMoreVertical } from "react-icons/fi";

export const SupportCardPreview = ({ previewArticle, setActiveTab }) => {
  return (
    <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm max-w-xl mx-auto space-y-6 text-center">
      <div>
        <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
          Exact Grid Representation
        </span>
        <h3 className="text-2xl font-extrabold text-neutral-900">
          How your article will appear on the support grid
        </h3>
      </div>
      
      <div className="text-left max-w-[320px] mx-auto">
        <Card className="bg-white rounded-2xl border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all flex flex-col overflow-hidden group cursor-pointer p-0">
          <div className="h-32 w-full overflow-hidden relative bg-gray-100">
            <img
              src={
                previewArticle.image ||
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
              }
              alt={previewArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#CA8A04] shadow-sm">
              <FiMessageSquare size={14} />
            </div>
            <button className="absolute top-2.5 right-2.5 p-1 rounded-full bg-white/95 backdrop-blur-md text-gray-500 hover:text-gray-800 transition-colors shadow-sm border-none cursor-pointer">
              <FiMoreVertical size={14} />
            </button>
          </div>
          <div className="p-4 flex flex-col justify-between flex-1 min-h-[90px] text-left">
            <h4 className="font-extrabold text-[13px] text-gray-900 leading-snug group-hover:text-[#CA8A04] transition-colors line-clamp-2">
              {previewArticle.title || "Untitled Article"}
            </h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-2 mt-1">
              {previewArticle.desc || "No description provided..."}
            </p>
          </div>
        </Card>
      </div>

      <Button
        onClick={() => setActiveTab({ id: "editor", label: "✏️ Editor" })}
        className="!bg-black text-white !font-bold !rounded-xl !px-6 !py-2.5"
      >
        ← Back to Editor
      </Button>
    </div>
  );
};
