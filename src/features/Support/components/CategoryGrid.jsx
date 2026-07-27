import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../lib/turtle-ui/components/card/Card";

export const CategoryGrid = ({ filteredCategories, setActiveCategory, containerVariants, itemVariants }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div key={idx} variants={itemVariants}>
              <Card 
                onClick={() => setActiveCategory(cat)}
                className="group !bg-white !border !border-[#E2E8F0] !p-8 !rounded-[20px] cursor-pointer hover:!shadow-lg hover:!border-gray-300 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-[22px] font-bold tracking-tight text-gray-900 mb-2">{cat.label}</h3>
                <p className="text-gray-500 text-[15px] font-normal leading-relaxed m-0">
                  {cat.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  );
};
