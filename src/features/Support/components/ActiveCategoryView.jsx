import React from "react";
import { motion } from "framer-motion";

export const ActiveCategoryView = ({ activeCategory, setActiveCategory, MODULES_DATA, setActiveModule, containerVariants, itemVariants }) => {
  const articles = MODULES_DATA[activeCategory.id] || [];

  return (
    <div className="max-w-[850px] mx-auto px-5 sm:px-10 pb-24 pt-8 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="pb-4 text-base" aria-label="Breadcrumb">
        <ol className="m-0 flex list-none flex-wrap items-center p-0">
          <li className="contents">
            <button 
              onClick={() => setActiveCategory(null)} 
              className="pr-2 text-[#595959] font-medium no-underline hover:text-black transition-colors cursor-pointer text-[15px]"
            >
              All Categories
            </button>
            <div className="pr-2" aria-hidden="true">
              <svg width="6" height="10" viewBox="0 0 6 10" className="block h-2.5 w-2.5 fill-[#595959]" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.648862 0.898862C0.316916 1.23081 0.316916 1.769 0.648862 2.10094L3.54782 4.9999L0.648862 7.89886C0.316916 8.23081 0.316917 8.769 0.648862 9.10094C0.980808 9.43289 1.519 9.43289 1.85094 9.10094L5.35094 5.60094C5.68289 5.269 5.68289 4.73081 5.35094 4.39886L1.85094 0.898862C1.519 0.566916 0.980807 0.566916 0.648862 0.898862Z"></path>
              </svg>
            </div>
          </li>
          <li aria-current="page" className="text-[#595959] text-[15px]">
            {activeCategory.label}
          </li>
        </ol>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-10 max-sm:gap-8 max-sm:pt-2 pt-4 mb-10"
      >
        <div>
          <div className="mb-5">
            <div className="flex items-center rounded-[14px] bg-[#FFF9D6] text-[#CCA600] h-14 w-14 justify-center shadow-sm">
              <activeCategory.icon size={26} />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-2 text-[32px] md:text-[40px] font-bold leading-tight text-gray-900 tracking-tight">
              {activeCategory.label}
            </h1>
            <div className="text-[17px] font-normal leading-relaxed text-[#595959]">
              <p>{activeCategory.description}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex">
              <span className="flex text-[15px] text-[#595959] font-medium">
                {articles.length} articles
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5"
      >
        <section className="flex flex-col rounded-xl border border-solid border-[#E6E6E6] bg-white p-2 sm:p-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
          <div className="p-3 pb-6 text-gray-900">
            <h2 className="m-0 text-[20px] font-bold">Articles in {activeCategory.label}</h2>
          </div>
          <hr className="mx-3 mb-2 mt-0 border-0 border-t border-solid border-[#E6E6E6]" />
          
          <ul role="list" className="m-0 list-none p-0">
            {articles.map((mod, idx) => (
              <motion.li key={idx} variants={itemVariants} className="m-0 list-none">
                <div 
                  onClick={() => setActiveModule(mod)} 
                  className="group flex flex-row justify-between items-center gap-2 py-3 px-3 rounded-[10px] no-underline transition-all duration-200 ease-linear hover:bg-[#FFF9D6] cursor-pointer"
                >
                  <div className="flex flex-col p-0">
                    <span className="m-0 text-[16px] text-gray-800 group-hover:text-[#CCA600] font-normal transition-colors">
                      {mod.title}
                    </span>
                  </div>
                  <div className="flex shrink-0 flex-col justify-center p-0">
                    <svg className="block h-[18px] w-[18px] text-[#CCA600] opacity-0 group-hover:opacity-100 transition-all transform -rotate-90 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>
      </motion.div>
    </div>
  );
};
