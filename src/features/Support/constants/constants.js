import {
  FiTwitter,
  FiFacebook,
  FiMail,
  FiGrid,
  FiCloud,
  FiShoppingBag,
  FiSmile,
  FiFilter,
  FiShield,
  FiUsers,
  FiLayers,
  FiTrendingUp,
  FiTarget,
  FiEye,
  FiMessageSquare,
} from "react-icons/fi";

export const CATEGORIES = [
  { id: "social-media", label: "Social Media", icon: FiTwitter },
  { id: "e-commerce", label: "e-Commerce", icon: FiShoppingBag },
  { id: "sentiment-analysis", label: "Sentiment Analysis", icon: FiSmile },
  { id: "classification", label: "Classification", icon: FiFilter },
  { id: "content-moderation", label: "Content Moderation", icon: FiShield },
  { id: "customer-support", label: "Customer Support", icon: FiUsers },
  { id: "services", label: "Services", icon: FiLayers },
  { id: "marketing-and-sales", label: "Marketing and Sales", icon: FiTrendingUp },
  { id: "extraction", label: "Extraction", icon: FiTarget },
  { id: "productivity", label: "Productivity", icon: FiEye },
  { id: "texts", label: "Texts", icon: FiMessageSquare },
];

export const INTEGRATIONS = [
  { icon: FiTwitter, color: "text-[#1DA1F2] bg-[#1DA1F2]/10" },
  { icon: FiFacebook, color: "text-[#1877F2] bg-[#1877F2]/10" },
  { icon: FiMail, color: "text-[#EA4335] bg-[#EA4335]/10" },
  { icon: FiGrid, color: "text-[#0F9D58] bg-[#0F9D58]/10" },
  { icon: FiCloud, color: "text-[#00A1E0] bg-[#00A1E0]/10" },
];

export const MODULES_DATA = {
  "e-commerce": [
    { title: "Tweets Sentiment Analysis (English)", desc: "Classifying tweets in English according to their staff sentiment...", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop" },
    { title: "Retail Classifier", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1472851294608-062f824d296e?q=80&w=600&auto=format&fit=crop" },
    { title: "Entity Extractor", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" },
    { title: "Business Classifier", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Taxonomy Classifier", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop" },
    { title: "Product Sentiment", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=600&auto=format&fit=crop" },
    { title: "Tweet Sentiment Analysis (Spanish)", desc: "Classifying tweets in Spanish according to their staff sentiment...", image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=600&auto=format&fit=crop" },
    { title: "Hotel Aspect", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop" },
    { title: "Boilerplate Extractor", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" },
    { title: "Keyword Extractor", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" },
    { title: "News Classifier", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop" },
    { title: "Useful Data Extractor", desc: "Keywords can be compounded by one or more words.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  ],
  "social-media": [
    { title: "Instagram Auto-Reply", desc: "Instantly comment back or DM users based on configured triggers.", image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=600&auto=format&fit=crop" },
    { title: "Sentiment Tracker", desc: "Aggregate social media mentions and track overall brand health.", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop" },
    { title: "Bio Link Redirector", desc: "Manage multi-links for TikTok and Instagram bios efficiently.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" },
  ],
  "sentiment-analysis": [
    { title: "Customer Review Analyzer", desc: "Classify feedback on Amazon, Yelp, or Google Reviews.", image: "https://images.unsplash.com/photo-1552581234-2612b75d8953?q=80&w=600&auto=format&fit=crop" },
    { title: "Urgency Detector", desc: "Highlight angry or high-priority customer requests in your inbox.", image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=600&auto=format&fit=crop" },
  ],
  "classification": [
    { title: "Lead Scorer", desc: "Qualify inbound customer numbers based on initial greeting keywords.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" },
    { title: "Language Identifier", desc: "Detect the incoming text language to route it to appropriate agent.", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop" },
  ]
};

export const ARTICLES_DATA = {
  "e-commerce": [
    {
      title: "A practical explanation of a Naive Bayes classifier",
      author: "Raul Garrido",
      date: "Jul 21",
      readTime: "8 min read",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Getting started with Python & Machine Learning",
      author: "Bruno Besanella",
      date: "Jul 21",
      readTime: "12 min read",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "An introduction to Support Vector Machines (SVM)",
      author: "Bruno Besanella",
      date: "Jul 21",
      readTime: "15 min read",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    }
  ]
};
