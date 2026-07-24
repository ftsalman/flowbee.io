import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiSearch, FiSend, FiCheckCircle } from "react-icons/fi";
import {
  MODULES_DATA,
  CATEGORIES,
} from "../constants/constants";

// Map category IDs to DevTalk style custom colors
const CATEGORY_COLORS = {
  "social-media": { text: "#1DA1F2", bg: "rgba(29, 161, 242, 0.12)" },
  "e-commerce": { text: "#37229e", bg: "rgba(55, 34, 158, 0.12)" },
  "sentiment-analysis": { text: "#229e5c", bg: "rgba(34, 158, 92, 0.12)" },
  "classification": { text: "#c49e09", bg: "rgba(196, 158, 9, 0.12)" },
  "content-moderation": { text: "#de5d43", bg: "rgba(222, 93, 67, 0.12)" },
  "customer-support": { text: "#4381de", bg: "rgba(67, 129, 222, 0.12)" },
  "services": { text: "#9e8522", bg: "rgba(158, 133, 34, 0.12)" },
  "marketing-and-sales": { text: "#e26094", bg: "rgba(226, 96, 148, 0.12)" },
  "extraction": { text: "#106979", bg: "rgba(16, 105, 121, 0.12)" },
  "productivity": { text: "#83229e", bg: "rgba(131, 34, 158, 0.12)" },
  "texts": { text: "#318596", bg: "rgba(49, 133, 150, 0.12)" },
};

const getCategoryStyle = (id) => {
  return CATEGORY_COLORS[id] || { text: "#0f172a", bg: "rgba(15, 23, 42, 0.1)" };
};

export const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("e-commerce");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModule, setActiveModule] = useState(null); // Toggles between list view & read view

  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormChange = (e) => {
    setTicketForm({
      ...ticketForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketForm({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeModule]);

  const allCategoryModules =
    MODULES_DATA[selectedCategory] || MODULES_DATA["e-commerce"];

  const filteredModules = allCategoryModules.filter(
    (mod) =>
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.desc.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.id === selectedCategory)?.label || "e-Commerce";

  return (
    <HelmetProvider>
      <div className="w-full bg-[#ffffff] text-[#0f172a] selection:bg-[#000000]/10 font-sans min-h-screen pb-16">
        <Helmet>
          <title>Support Center | Flowbee.io</title>
          <meta
            name="description"
            content="Browse and find pre-built machine learning and customer support automation modules tailored for your projects."
          />
        </Helmet>

        {/* CSS Stylesheet Replicating DevTalk Theme */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          .font-sans {
            font-family: 'Inter', sans-serif;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          
          .animate-marquee-reverse {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite reverse;
          }

          .bullet-divisor {
            width: 4px;
            height: 4px;
            background-color: #0f172a;
            opacity: 0.3;
            border-radius: 50%;
          }
        `}} />

        {/* Global Nav Bar */}
        <div className="max-w-6xl mx-auto px-6 py-6 border-b border-[#0f172a]/10 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveModule(null); }} className="text-xl font-bold tracking-tight text-[#0f172a] hover:opacity-85 transition-opacity">
            &#123; flowbee &#125;
          </a>
          <button className="bg-[#f4f4f5] hover:bg-neutral-200 text-black text-xs font-semibold px-4 py-2.5 rounded-xl border border-neutral-100 transition-colors">
            Menu
          </button>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto px-6 pt-12">
          
          {!activeModule ? (
            /* --- HOME 01 LIST VIEW --- */
            <div className="space-y-16">
              
              {/* Hero Banner */}
              <section className="py-8 text-left space-y-4 max-w-3xl">
                <div className="text-[13px] font-bold uppercase tracking-wider text-[#0f172a]/60">
                  Welcome to Flowbee Support
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0f172a] leading-none">
                  Stay updated with the best in AI &amp; Automation
                </h1>
                <div className="flex items-center gap-2.5 pt-4 text-xs font-semibold text-[#0f172a]/60">
                  <span>Words by</span>
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-[10px] text-black">
                    FS
                  </div>
                  <span>Flowbee Team</span>
                </div>
              </section>

              <hr className="border-t border-[#0f172a]/10" />

              {/* 2-Column Split Articles/Modules Layout */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Sidebar: Dive in by topic */}
                <div className="lg:col-span-4 space-y-6">
                  <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">
                    Dive in by topic
                  </h2>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {CATEGORIES.map((cat) => {
                      const isActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-4 py-2 text-xs font-semibold rounded-xl text-left border cursor-pointer transition-all ${
                            isActive
                              ? "bg-[#0f172a] text-white border-[#0f172a] shadow-sm"
                              : "bg-[#ffffff] text-[#0f172a] border-[#0f172a]/10 hover:bg-neutral-50"
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: 2-Column Module Card Grid */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Search inside list */}
                  <div className="relative border border-[#0f172a]/10 rounded-2xl bg-white shadow-sm overflow-hidden mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#0f172a]/40">
                      <FiSearch size={16} />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search modules..."
                      className="w-full pl-12 pr-6 py-3.5 border-none focus:outline-none text-sm font-semibold text-[#0f172a] placeholder:text-[#0f172a]/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredModules.map((mod, idx) => {
                      const colors = getCategoryStyle(selectedCategory);
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveModule(mod)}
                          className="group border border-[#0f172a]/10 rounded-[24px] p-6 flex flex-col justify-between space-y-4 hover:border-black cursor-pointer hover:shadow-sm transition-all duration-200"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-[#0f172a]/50 uppercase tracking-wider">
                              <span>Aug 24, 2026</span>
                              <span className="bullet-divisor"></span>
                              <span>10 min read</span>
                            </div>

                            <h3 className="text-lg font-bold tracking-tight text-[#0f172a] group-hover:underline decoration-1.5">
                              {mod.title}
                            </h3>

                            <p className="text-xs text-[#0f172a]/70 leading-relaxed font-normal line-clamp-3">
                              {mod.desc}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span
                              style={{ backgroundColor: colors.bg, color: colors.text }}
                              className="px-2.5 py-1 text-[9px] font-bold tracking-tight uppercase"
                            >
                              {activeCategoryLabel}
                            </span>
                            <span className="text-xs font-bold text-[#0f172a] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Read more →
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </section>

            </div>
          ) : (
            /* --- READ PAGE DETAIL VIEW --- */
            <div className="max-w-3xl mx-auto space-y-10 py-4">
              
              {/* Back Link */}
              <button
                onClick={() => setActiveModule(null)}
                className="text-xs font-bold text-[#0f172a] hover:opacity-70 flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
              >
                ← Back to Support Modules
              </button>

              {/* Title & Metadata Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0f172a]/50 uppercase tracking-wider">
                  <span>Aug 24, 2026</span>
                  <span className="bullet-divisor"></span>
                  <span>10 min read</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#0f172a] leading-none">
                  {activeModule.title}
                </h1>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span
                    style={getCategoryStyle(selectedCategory)}
                    className="px-2.5 py-1 text-[10px] font-bold tracking-tight uppercase"
                  >
                    {activeCategoryLabel}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-tight uppercase bg-neutral-100 text-neutral-500">
                    Integration Guide
                  </span>
                </div>
              </div>

              {/* Sponsor Callout Block */}
              <div className="border border-[#e4e4e7] bg-[#f9fafb] p-4 rounded-xl text-xs font-medium text-[#0f172a]/80 leading-relaxed">
                This integration is sponsored by Flowbee Automation. Read the documentation below to start invoking the module API.
              </div>

              {/* Article Content & Code Block */}
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#0f172a]/90 font-normal">
                <p>
                  To integrate the <strong>{activeModule.title}</strong> module, you can issue an asynchronous API request from your application codebase. This allows you to process documents, sentiments, or classifications without blocking user interface threads.
                </p>

                <h2 className="text-xl font-bold tracking-tight pt-4">API Code Example</h2>
                
                {/* Monokai-ish styled code block */}
                <pre className="bg-[#1e1e1e] text-[#f8f8f2] rounded-xl p-5 overflow-x-auto text-[11px] font-mono leading-relaxed space-y-1.5 shadow-inner">
                  <div><span className="text-[#f92672]">import</span> flowbee_sdk</div>
                  <br />
                  <div><span className="text-[#75715e]"># Initialize module connection</span></div>
                  <div>module = flowbee_sdk.load_module(</div>
                  <div>    name=<span className="text-[#e6db74]">"{activeModule.title.toLowerCase().replace(/\\s+/g, "_")}"</span>,</div>
                  <div>    category=<span className="text-[#e6db74]">"{selectedCategory}"</span></div>
                  <div>)</div>
                  <br />
                  <div><span className="text-[#f92672]">async def</span> <span className="text-[#a6e22e]">invoke_payload</span>(input_text):</div>
                  <div>    result = <span className="text-[#f92672]">await</span> module.process(</div>
                  <div>        payload=&#123;<span className="text-[#e6db74]">"text"</span>: input_text&#125;</div>
                  <div>    )</div>
                  <div>    <span className="text-[#f92672]">return</span> result.data</div>
                </pre>

                <p>
                  Deploy the code as shown above. The callback payload contains structured output metrics, confidence indices, and classification labels.
                </p>
              </div>

              <hr className="border-t border-[#0f172a]/10" />

              {/* Author Info Card */}
              <div className="border border-[#0f172a]/10 rounded-[24px] p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-xs text-black flex-shrink-0">
                  FS
                </div>
                <div className="space-y-1 text-left">
                  <div className="text-[10px] uppercase font-bold text-neutral-400">Words by</div>
                  <h4 className="text-base font-bold text-[#0f172a]">Flowbee Team</h4>
                  <p className="text-xs text-[#0f172a]/70 leading-relaxed font-normal">
                    Specialized developers and system support engineers building highly scalable, zero-latency automation layers.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* --- GLOBAL FOOTER & MARQUEE BANDS --- */}
        <div className="mt-24 space-y-16">
          
          {/* Top Scrolling Marquee Band */}
          <div className="relative w-full overflow-hidden border-y border-[#0f172a]/10 bg-white py-3.5">
            <div className="animate-marquee flex gap-12 whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-[#0f172a]">
              <span>NEWSLETTER — JOIN OUR COMMUNITY — UPDATES — LATEST INTEGRATIONS — </span>
              <span>NEWSLETTER — JOIN OUR COMMUNITY — UPDATES — LATEST INTEGRATIONS — </span>
              <span>NEWSLETTER — JOIN OUR COMMUNITY — UPDATES — LATEST INTEGRATIONS — </span>
              <span>NEWSLETTER — JOIN OUR COMMUNITY — UPDATES — LATEST INTEGRATIONS — </span>
            </div>
          </div>

          {/* Contact Ticket Form Section */}
          <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact text */}
            <div className="lg:col-span-4 space-y-6 text-[#0f172a] text-left">
              <div className="space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">join +10,000 developers</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                  Need setup help or custom solutions?
                </h3>
              </div>
              <p className="text-xs text-[#0f172a]/70 leading-relaxed font-normal">
                If you didn't find the answers in the documentation guides, write our engineering support desk directly.
              </p>
            </div>

            {/* Support Ticket Submission form */}
            <div className="lg:col-span-8 bg-white border border-[#0f172a]/10 rounded-[28px] p-6 sm:p-10 hover:border-black transition-colors duration-200 text-left">
              <h4 className="text-base font-bold text-[#0f172a] pb-3 border-b border-[#0f172a]/10 mb-6">
                Submit Support Ticket
              </h4>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-neutral-50 border border-[#0f172a]/10 rounded-full flex items-center justify-center mx-auto text-black">
                    <FiCheckCircle size={24} />
                  </div>
                  <h5 className="text-sm font-bold">Ticket Submitted Successfully</h5>
                  <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                    We've logged your support inquiry. A developer will respond via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTicket} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={ticketForm.name}
                        onChange={handleFormChange}
                        placeholder="Jane Doe"
                        className="w-full p-3 border border-[#0f172a]/10 focus:border-black focus:outline-none rounded-xl text-xs font-semibold text-[#0f172a] bg-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={ticketForm.email}
                        onChange={handleFormChange}
                        placeholder="jane@example.com"
                        className="w-full p-3 border border-[#0f172a]/10 focus:border-black focus:outline-none rounded-xl text-xs font-semibold text-[#0f172a] bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={ticketForm.subject}
                        onChange={handleFormChange}
                        placeholder="Summary of query"
                        className="w-full p-3 border border-[#0f172a]/10 focus:border-black focus:outline-none rounded-xl text-xs font-semibold text-[#0f172a] bg-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase">Category</label>
                      <select
                        name="category"
                        value={ticketForm.category}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-[#0f172a]/10 focus:border-black focus:outline-none rounded-xl text-xs font-bold text-[#0f172a] bg-white cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="whatsapp">WhatsApp Setup</option>
                        <option value="billing">Billing &amp; Invoice</option>
                        <option value="technical">Bug or Integration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">Message Details</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={ticketForm.message}
                      onChange={handleFormChange}
                      placeholder="Describe your request in detail..."
                      className="w-full p-3 border border-[#0f172a]/10 focus:border-black focus:outline-none rounded-xl text-xs font-semibold text-[#0f172a] bg-transparent"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </section>

          {/* Bottom Scrolling Marquee Band (reverse direction) */}
          <div className="relative w-full overflow-hidden border-y border-[#0f172a]/10 bg-white py-3.5">
            <div className="animate-marquee-reverse flex gap-12 whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-[#0f172a]">
              <span>JOBS — XCODE TIPS — EVENTS — COURSES — CODE SAMPLES — WORKSHOPS — </span>
              <span>JOBS — XCODE TIPS — EVENTS — COURSES — CODE SAMPLES — WORKSHOPS — </span>
              <span>JOBS — XCODE TIPS — EVENTS — COURSES — CODE SAMPLES — WORKSHOPS — </span>
              <span>JOBS — XCODE TIPS — EVENTS — COURSES — CODE SAMPLES — WORKSHOPS — </span>
            </div>
          </div>

          {/* Footer details */}
          <footer className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
            <span>© Flowbee. All rights reserved.</span>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </footer>

        </div>

      </div>
    </HelmetProvider>
  );
};

export default SupportPage;
