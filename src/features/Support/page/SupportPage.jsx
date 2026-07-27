import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CATEGORIES, MODULES_DATA } from "../constants/constants";
import { getSupportArticles } from "../utils/firebaseSupport";

// Components
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { CategoryGrid } from "../components/CategoryGrid";
import { QuickLinks } from "../components/QuickLinks";
import { ActiveCategoryView } from "../components/ActiveCategoryView";
import { ArticleView } from "../components/ArticleView";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeModule, setActiveModule] = useState(null);

  // Ticket Form state
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Dynamic articles state
  const [dynamicArticles, setDynamicArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getSupportArticles();
      setDynamicArticles(articles);
    };
    fetchArticles();
  }, []);

  const mergedModulesData = React.useMemo(() => {
    const merged = JSON.parse(JSON.stringify(MODULES_DATA)); // Deep clone
    dynamicArticles.forEach(article => {
      if (!merged[article.categoryId]) {
        merged[article.categoryId] = [];
      }
      merged[article.categoryId].push({
        title: article.title,
        desc: article.desc,
        content: article.content,
        image: article.image,
        isDynamic: true
      });
    });
    return merged;
  }, [dynamicArticles]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory, activeModule]);

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

  // Filter categories if searching from home
  const filteredCategories = CATEGORIES.filter((cat) =>
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <HelmetProvider>
      <div className="w-full bg-[#F8F9FA] text-gray-900 selection:bg-[#FFD400]/40 selection:text-black font-sans min-h-screen flex flex-col">
        <Helmet>
          <title>Help Center | Flowbee.io</title>
          <meta
            name="description"
            content="Find answers, documentation, and contact support."
          />
        </Helmet>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          .font-sans { font-family: 'Inter', sans-serif; }
        `,
          }}
        />

        <div className="flex-1">
          {!activeCategory && !activeModule ? (
            <>
              <HeroSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <div className="relative z-20 -mt-8 md:-mt-16">
                <CategoryGrid
                  filteredCategories={filteredCategories}
                  setActiveCategory={setActiveCategory}
                  containerVariants={containerVariants}
                  itemVariants={itemVariants}
                  modulesData={mergedModulesData}
                />
              </div>

              <QuickLinks />
            </>
          ) : activeCategory && !activeModule ? (
            <ActiveCategoryView
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              MODULES_DATA={mergedModulesData}
              setActiveModule={setActiveModule}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          ) : (
            <ArticleView
              activeCategory={activeCategory}
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              CATEGORIES={CATEGORIES}
              MODULES_DATA={mergedModulesData}
              setActiveCategory={setActiveCategory}
            />
          )}

          <ContactSection
            submitSuccess={submitSuccess}
            handleSubmitTicket={handleSubmitTicket}
            ticketForm={ticketForm}
            handleFormChange={handleFormChange}
            isSubmitting={isSubmitting}
          />
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default SupportPage;
