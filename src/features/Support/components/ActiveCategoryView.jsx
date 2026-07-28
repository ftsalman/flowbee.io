import React from "react";
import { motion } from "framer-motion";

export const ActiveCategoryView = ({ activeCategory, setActiveCategory, MODULES_DATA, setActiveModule, containerVariants, itemVariants }) => {
  const articles = MODULES_DATA[activeCategory.id] || [];

  const highlightArticles = [];
  const groups = [];
  
  articles.forEach(article => {
    if (article.section === "Highlight") {
      highlightArticles.push(article);
    } else {
      const sectionName = article.section || `${activeCategory.label} Essentials`;
      let group = groups.find(g => g.name === sectionName);
      if (!group) {
        group = { name: sectionName, items: [] };
        groups.push(group);
      }
      group.items.push(article);
    }
  });

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 pb-24 pt-8 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="pb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500">
          <li>
            <button 
              onClick={() => setActiveCategory(null)} 
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              All Collections
            </button>
          </li>
          <li>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </li>
          <li aria-current="page" className="text-gray-500">
            {activeCategory.label}
          </li>
        </ol>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col mb-10"
      >
        <div className="mb-6">
          <div className="flex items-center justify-center rounded-[12px] bg-[#FFF9D6] text-[#CCA600] h-[52px] w-[52px]">
            <activeCategory.icon size={24} />
          </div>
        </div>
        <h1 className="mb-2 text-[32px] md:text-[36px] font-bold leading-tight text-gray-900 tracking-tight">
          {activeCategory.label}
        </h1>
        <p className="text-[15px] font-normal text-gray-600 mb-4">
          {activeCategory.description}
        </p>
        <div className="text-[13px] text-gray-400 mt-2">
          {articles.length} articles
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        {highlightArticles.map((mod, idx) => (
          <motion.div key={`hi-${idx}`} variants={itemVariants}>
            <div 
              onClick={() => setActiveModule(mod)}
              className="bg-[#FFF9D6] rounded-[10px]  border-[#FBE37B] overflow-hidden cursor-pointer group shadow-sm hover:bg-[#FFF4B3] transition-colors"
            >
              <div className="px-6 py-[20px] flex justify-between items-center">
                <span className="text-[15px] text-[#CCA600] font-medium transition-colors">
                  {mod.title}
                </span>
                <svg className="w-4 h-4 text-[#CCA600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}

        {groups.map((group, groupIdx) => (
          <motion.section key={`grp-${groupIdx}`} variants={itemVariants} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="px-6 py-5 bg-white">
              <h2 className="text-[18px] font-bold text-gray-900 tracking-tight">{group.name}</h2>
            </div>
            <ul role="list" className="flex flex-col m-0 p-0 list-none">
              {group.items.map((mod, idx) => (
                <li key={`item-${idx}`} className="border-t border-gray-100 m-0">
                  <div 
                    onClick={() => setActiveModule(mod)} 
                    className="group flex justify-between items-center px-6 py-[18px] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[15px] text-gray-700 group-hover:text-[#CCA600] transition-colors">
                      {mod.title}
                    </span>
                    <svg className="w-4 h-4 text-[#CCA600] opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
};
