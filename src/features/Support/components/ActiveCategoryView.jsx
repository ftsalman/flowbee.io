import React from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiArrowUpRight } from "react-icons/fi";

export const ActiveCategoryView = ({ activeCategory, setActiveCategory, MODULES_DATA, setActiveModule, containerVariants, itemVariants }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24 pt-10 min-h-[60vh]">
      <button onClick={() => setActiveCategory(null)} className="text-[13px] font-bold text-gray-500 hover:text-gray-900 flex items-center gap-1.5 mb-10 transition-colors cursor-pointer uppercase tracking-wider">
        <FiChevronRight className="rotate-180" /> Back to Categories
      </button>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center gap-5 mb-12"
      >
        <div className="w-16 h-16 rounded-[20px] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-800 shrink-0">
          <activeCategory.icon size={28} />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-2">{activeCategory.label}</h1>
          <p className="text-gray-500 text-lg">Browse all articles for {activeCategory.label.toLowerCase()}</p>
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {(MODULES_DATA[activeCategory.id] || []).length > 0 ? (
          (MODULES_DATA[activeCategory.id] || []).map(mod => (
            <motion.div 
              key={mod.title} 
              variants={itemVariants}
              onClick={() => setActiveModule(mod)} 
              className="group p-6 bg-white border border-[#E2E8F0] rounded-[20px] cursor-pointer hover:border-gray-900 hover:shadow-md transition-all flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:underline decoration-2 underline-offset-4">{mod.title}</h3>
                <p className="text-[15px] text-gray-500 line-clamp-2">{mod.desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-900 transition-colors">
                <FiArrowUpRight className="text-gray-400 group-hover:text-white transition-colors w-5 h-5" />
              </div>
            </motion.div>
          ))
        ) : (
          <div className="py-12 text-center text-gray-500 font-medium bg-white rounded-2xl border border-dashed border-gray-300">
            No articles available in this category yet.
          </div>
        )}
      </motion.div>
    </div>
  );
};
