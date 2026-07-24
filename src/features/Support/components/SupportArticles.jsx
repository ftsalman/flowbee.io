import React from "react";
import { DataList } from "../../../../lib/turtle-ui/components/list/DataList";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";
import { Avatar } from "../../../../lib/turtle-ui/components/avatar/Avatar";

export const SupportArticles = ({ activeCategoryLabel, activeArticles }) => {
  return (
    <div className="border-t border-gray-200/60 pt-16 space-y-8">
      <div>
        <h3 className="text-lg font-black text-gray-700 text-left">
          Popular Articles from for{" "}
          <span className="text-[#CA8A04]">"{activeCategoryLabel}"</span>
        </h3>
      </div>

      {/* Articles list using custom DataList and Card components */}
      <DataList
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-none p-0 bg-transparent shadow-none"
        data={activeArticles}
        render={(art, idx) => (
          <Card
            key={idx}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all flex flex-col justify-between p-0"
          >
            <div className="h-40 relative bg-gray-100">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <h4 className="font-extrabold text-sm text-gray-900 leading-snug line-clamp-2 text-left">
                {art.title}
              </h4>

              {/* Author block using custom Avatar component */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-55">
                <Avatar
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  imgSrc={art.authorImage}
                  imgProps={{ alt: art.author }}
                />
                <div className="text-left">
                  <span className="block font-bold text-xs text-gray-800">
                    {art.author}
                  </span>
                  <span className="block text-[10px] text-gray-400 mt-0.5">
                    {art.date} • {art.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}
      />
    </div>
  );
};
