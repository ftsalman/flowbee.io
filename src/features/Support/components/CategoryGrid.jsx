import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";

export const CategoryGrid = ({ filteredCategories, setActiveCategory, containerVariants, itemVariants, modulesData }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const articleCount = modulesData && modulesData[cat.id] ? modulesData[cat.id].length : 0;
          return (
            <motion.div key={idx} variants={itemVariants}>
              <Card 
                onClick={() => setActiveCategory(cat)}
                className="group !bg-white !border !border-gray-200 !p-5 !rounded-2xl cursor-pointer hover:!shadow-md transition-all duration-300 h-full flex items-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFF9D6] flex items-center justify-center text-[#CCA600] mr-4 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1 leading-tight">{cat.label}</h3>
                  <p className="text-gray-500 text-[13px] font-medium m-0">
                    {articleCount} articles
                  </p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  );
};
