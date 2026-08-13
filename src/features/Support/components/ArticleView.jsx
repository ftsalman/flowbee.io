import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiSearch, FiFolder, FiFileText, FiLink, FiUser, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ArticleView = ({ activeCategory, activeModule, setActiveModule, CATEGORIES, MODULES_DATA, setActiveCategory }) => {
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [activeToc, setActiveToc] = useState("The Problem Businesses Face");
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setActiveModule(null);
  };

  const handleModuleClick = (mod, cat) => {
    if (activeCategory?.id !== cat.id) {
      setActiveCategory(cat);
    }
    setActiveModule(mod);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 h-[calc(100vh-80px)] overflow-hidden flex flex-col lg:flex-row gap-8">
      
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background-color: #E5E7EB; border-radius: 20px; }
        .custom-scroll:hover::-webkit-scrollbar-thumb { background-color: #D1D5DB; }
      `}</style>
      
      {/* Left Sidebar Navigation */}
      <aside className="w-full lg:w-[280px] shrink-0 border-r border-gray-100 pr-4 h-full overflow-y-auto custom-scroll">
        <div className="sticky top-0 pb-10">
          {/* Search Box */}
          <div className="relative mb-8">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-transparent focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 rounded-xl py-3 pl-10 pr-4 text-sm outline-none transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">
              <span className="text-[10px] font-medium text-gray-500">⌘ K</span>
            </div>
          </div>

          {/* Categories List */}
          <div className="space-y-6">
            {CATEGORIES?.map((cat) => {
              const isActiveCat = activeCategory?.id === cat.id;
              const modules = MODULES_DATA?.[cat.id] || [];
              
              return (
                <div key={cat.id} className="flex flex-col">
                  <div 
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors ${isActiveCat ? 'text-gray-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span className="text-gray-400"><cat.icon size={16} /></span>
                    <span className="text-[15px]">{cat.label}</span>
                    <span className="ml-auto text-[11px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{modules.length}</span>
                  </div>

                  {isActiveCat && modules.length > 0 && (
                    <div className="mt-2 ml-4 pl-4 border-l-2 border-gray-100 flex flex-col gap-1">
                      {modules.map((mod, idx) => {
                        const isActiveMod = activeModule?.title === mod.title;
                        return (
                          <div 
                            key={idx}
                            onClick={() => handleModuleClick(mod, cat)}
                            className={`py-2 px-3 rounded-md text-[14px] cursor-pointer transition-colors ${
                              isActiveMod 
                                ? 'bg-[#FFD400]/20 text-gray-900 font-semibold border-l-4 border-[#FFD400] -ml-[18px] pl-[26px]' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {mod.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl lg:px-8 h-full overflow-y-auto custom-scroll pb-20">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-8 overflow-hidden whitespace-nowrap text-ellipsis">
          <span onClick={() => window.location.href = '/'} className="hover:text-gray-900 cursor-pointer">Home</span>
          <span>/</span>
          <span onClick={() => { setActiveCategory(null); setActiveModule(null); }} className="hover:text-gray-900 cursor-pointer">Docs</span>
          <span>/</span>
          <span onClick={() => setActiveModule(null)} className="hover:text-gray-900 cursor-pointer">{activeCategory?.label}</span>
          <span>/</span>
          <span className="font-semibold text-gray-900 truncate">{activeModule?.title}</span>
        </div>

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden shrink-0 border border-gray-100">
              {activeModule?.creatorImage ? (
                <img src={activeModule.creatorImage} alt={activeModule?.creatorName || "Creator"} className="w-full h-full object-cover" />
              ) : (
                <FiUser size={20} />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-gray-900 leading-tight">
                {activeModule?.creatorName || "Flowbee Support Team"}
              </span>
              <span className="text-[13px] text-gray-500">
                {activeModule?.createdDate 
                  ? new Date(activeModule.createdDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                  : "Recently updated"}
              </span>
            </div>
          </div>
        </div>

        <motion.article 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight mb-8">
            {activeModule?.title}
          </h1>

          {activeModule?.image && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img src={activeModule.image} alt={activeModule.title} className="w-full h-auto object-cover max-h-[500px]" />
              <div className="p-4 text-center text-gray-500 italic text-sm border-t border-gray-100 bg-gray-50/50">
                Some Business Images
              </div>
            </div>
          )}
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500 whitespace-pre-wrap">
            {activeModule?.isDynamic ? (
               <div 
                 className="text-gray-700 leading-relaxed ql-editor"
                 dangerouslySetInnerHTML={{ __html: activeModule.content }} 
               />
            ) : (
              <>
                <p className="text-lg text-gray-600 leading-relaxed">{activeModule?.desc}</p>
                <p>This is a detailed documentation page for the <strong>{activeModule?.title}</strong> module. In a real-world scenario, this content would be fetched from a CMS or markdown file.</p>
                
                <h3>Integration Example</h3>
                <pre className="bg-[#0f172a] text-white p-6 rounded-2xl overflow-x-auto text-sm shadow-xl font-mono leading-relaxed my-6">
                  <span className="text-pink-400">import</span> flowbee <span className="text-pink-400">from</span> 'flowbee-sdk';{'\n\n'}
                  <span className="text-gray-400">// Initialize client</span>{'\n'}
                  <span className="text-blue-300">const</span> client = <span className="text-pink-400">new</span> flowbee.Client();{'\n\n'}
                  <span className="text-blue-300">const</span> response = <span className="text-pink-400">await</span> client.modules.invoke({'{'}{'\n'}
                  {'  '}name: <span className="text-green-300">"{activeModule?.title?.replace(/\s+/g, "_").toLowerCase()}"</span>,{'\n'}
                  {'  '}data: <span className="text-green-300">"..."</span>{'\n'}
                  {'}'});
                </pre>
                
                <p>Ensure you handle the asynchronous responses properly in your application lifecycle. If you encounter any issues, please submit a support ticket using the form below.</p>
                
                <h3 id="we-are-a-meta-business-partner">We Are a Meta Business Partner</h3>
                <p>To get started, navigate to your dashboard and create a new access token. Make sure you store it securely, as it will only be displayed once.</p>
                
                <h3 id="the-problem-businesses-face">The Problem Businesses Face</h3>
                <p>Next, configure your webhook endpoint to receive real-time updates. Your endpoint must be capable of responding with a 200 OK within 3 seconds to avoid timeouts.</p>
                
                <h3 id="how-flowbee-solves-it">How Flowbee Solves It</h3>
                <p>Our API supports batch operations. You can send up to 1,000 records in a single payload. Ensure your payload follows the JSON schema defined in our API reference.</p>
                
                <h3 id="broadcast-messaging">Broadcast Messaging</h3>
                <p>Additionally, rate limits apply. You can make up to 100 requests per minute on the standard plan. For higher limits, contact our sales team.</p>

                <h3 id="chatbot-automation">Chatbot Automation</h3>
                <p>If you receive a 401 Unauthorized error, double-check your API key. If the issue persists, try rotating your key from the developer portal.</p>
                
                <h3 id="team-inbox">Team Inbox</h3>
                <p>For 429 Too Many Requests, implement exponential backoff in your retry logic to prevent being temporarily banned.</p>
                
                <h3 id="booking-&-appointment">Booking & Appointment</h3>
                <p>Join our developer community on Discord or our community forums to share your use cases, ask questions, and collaborate with other developers building with Flowbee.</p>
              </>
            )}
          </div>
        </motion.article>
      </main>

      {/* Right Sidebar (Table of Contents & Share) */}
      <aside className="w-full lg:w-[260px] shrink-0 lg:pl-6 h-full overflow-y-auto custom-scroll pb-10">
        <div className="sticky top-0 space-y-10">
          
          {/* Table of Contents */}
          <div>
            <h3 className="text-[15px] font-bold text-gray-500 mb-6 uppercase tracking-wider">Table of Contents</h3>
            <div className="relative border-l-2 border-gray-100 flex flex-col gap-5 text-[14px]">
              {[
                "We Are a Meta Business Partner",
                "The Problem Businesses Face",
                "How Flowbee Solves It",
                "Broadcast Messaging",
                "Chatbot Automation",
                "Team Inbox",
                "Booking & Appointment"
              ].map((item) => (
                <div 
                  key={item}
                  onClick={() => {
                    setActiveToc(item);
                    const el = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`pl-4 cursor-pointer transition-colors ${
                    activeToc === item
                      ? "border-l-2 border-[#FFD400] -ml-[2px] font-semibold text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Share Box */}
          <div className="bg-[#F8F9FA] rounded-[16px] p-6">
            <h3 className="text-[15px] font-bold text-gray-900 mb-4">Share This Article :</h3>
            <div className="bg-white border border-gray-100 rounded-lg p-6 flex justify-start w-full">
               <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors shadow-sm">
                 <FiLink size={16} />
               </div>
            </div>
          </div>

          {/* Was it helpful */}
          <div className="bg-[#F8F9FA] rounded-[16px] p-6">
            <h3 className="text-[15px] font-bold text-gray-900 mb-4">Was it helpful ?</h3>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-[13px] font-bold bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <FiThumbsUp size={16} /> Yes
              </button>
              <button className="flex items-center gap-2 text-[13px] font-bold bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <FiThumbsDown size={16} /> No
              </button>
            </div>
          </div>

        </div>
      </aside>

    </div>
  );
};
