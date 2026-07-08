import React from "react";
import {
  FiShoppingBag,
  FiPlusSquare,
  FiGlobe,
  FiActivity,
  FiHome,
  FiBookOpen,
  FiCoffee,
  FiTruck,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const REGISTER_LINK = "https://app.flowbee.io/auth/register";
export const SALES_WHATSAPP_LINK = "https://wa.me/919544144369";

export const INDUSTRY_OPTIONS = [
  {
    path: "/industry/travel-and-tourism",
    label: "✈️ Travel, Tourism & Visas",
  },
  {
    path: "/industry/jewellery",
    label: "💎 Jewellery & Luxury Retail",
  },
  {
    path: "/industry/supermarket-and-grocery",
    label: "🛒 Supermarkets & Groceries",
  },
];

export const MAJOR_INDUSTRIES = [
  {
    title: "Supermarkets & Groceries",
    icon: <FiShoppingBag />,
    color: "text-green-600",
    bg: "bg-green-50",
    image: "/images/supermarket.png",
    problem:
      "Busy customers hate calling or waiting for manual order confirmations.",
    solution:
      "Provide a digital catalog where customers browse and order in 2 clicks. Invoices are generated automatically and sent to their chat.",
    points: ["Daily Stock Alerts", "Automated Billing", "Re-order via Chat"],
    metrics: ["50% Repeat Rate", "No Phone Wait"],
  },
  {
    title: "Clinics & Healthcare",
    icon: <FiPlusSquare />,
    color: "text-blue-500",
    bg: "bg-blue-50",
    image: "/images/clinic.png",
    problem: "High no-show rates and overwhelming patient calls for reports.",
    solution:
      "AI Bots handle appointment scheduling and automatically deliver lab reports as PDFs the moment they are ready.",
    points: ["Auto-Reminders", "Secure Data", "AI Health Qualify"],
    metrics: ["-40% No-Shows", "Instant Support"],
  },
  {
    title: "Travel & Visas",
    icon: <FiGlobe />,
    color: "text-orange-500",
    bg: "bg-orange-50",
    image: "/images/travels.png",
    problem: "Wasting money on Meta Ads leads that never answer the phone.",
    solution:
      "Click-to-WhatsApp ads funnel users to a bot that qualifies budget and destination instantly, locking in the interest.",
    points: ["E-Ticket Delivery", "Visa Automation", "Payment Links"],
    metrics: ["300% Ads ROI", "24/7 Itinerary Bot"],
  },
  {
    title: "Retail & Fashion",
    icon: <FiActivity />,
    color: "text-pink-500",
    bg: "bg-pink-50",
    image: "/images/retail.png",
    problem:
      "Email marketing has 1% open rates; most customers abandon carts.",
    solution:
      "Automated cart recovery messages sent to WhatsApp with personalized discounts. 98% open rates ensure sales.",
    points: ["New Arrival Alerts", "Loyalty Rewards", "Sizing Guide Bot"],
    metrics: ["+65% Revenue", "Direct Feedback"],
  },
];

export const MARKET_COVERAGE_DATA = [
  {
    title: "Real Estate",
    icon: <FiHome />,
    description: "Collect budget and location via AI bots. Send tour links instantly.",
  },
  {
    title: "Education",
    icon: <FiBookOpen />,
    description: "Automate fee reminders and handle inquiries 24/7.",
  },
  {
    title: "Food & Cafe",
    icon: <FiCoffee />,
    description: "Digital menu triggers and automated table bookings.",
  },
  {
    title: "Logistics",
    icon: <FiTruck />,
    description: "Live driver tracking and POD photos directly to chat.",
  },
  {
    title: "Consultancy",
    icon: <FiActivity />,
    description: "Lead pipelines and automated appointment calendars.",
  },
  {
    title: "Events",
    icon: <FiTarget />,
    description: "Broadcast ticket QR codes and manage VIP lists.",
  },
];

export const ADVANTAGE_DATA = [
  { title: "Verified API", icon: <FiShield /> },
  { title: "99.9% Uptime", icon: <FiTrendingUp /> },
  { title: "Global Support", icon: <FiGlobe /> },
  { title: "Expert Setup", icon: <FiAward /> },
];
