import { 
  FiBriefcase, FiStar, FiLayers, FiUsers, FiZap, FiShoppingBag 
} from "react-icons/fi";

export const tiers = [
  {
    name: "Bronze",
    rate: "15%",
    india: "₹1L",
    uae: "25K",
    period: "1 Year",
    color: "text-orange-600",
    bg: "bg-orange-50/50",
    border: "border-orange-100",
  },
  {
    name: "Silver",
    rate: "20%",
    india: "₹1L-2L",
    uae: "25K-50K",
    period: "2 Years",
    color: "text-slate-500",
    bg: "bg-slate-50/50",
    border: "border-slate-200",
  },
  {
    name: "Gold",
    rate: "25%",
    india: "₹2L-3L",
    uae: "50K-1L",
    period: "3 Years",
    color: "text-yellow-600",
    bg: "bg-yellow-50/50",
    border: "border-yellow-200",
  },
  {
    name: "Platinum",
    rate: "30%",
    india: "₹3L-4L",
    uae: "1L-2L",
    period: "Inf.",
    color: "text-cyan-600",
    bg: "bg-cyan-50/50",
    border: "border-cyan-200",
  },
  {
    name: "Diamond",
    rate: "40%",
    india: "₹4L+",
    uae: "2L+",
    period: "Inf.",
    color: "text-blue-600",
    bg: "bg-blue-50/50",
    border: "border-blue-200",
  },
];

export const targetAudience = [
  {
    t: "Digital Agencies",
    icon: FiBriefcase,
    d: "Incorporate WhatsApp automation into your client service packages and boost your margins.",
  },
  {
    t: "Influencers",
    icon: FiStar,
    d: "Promote a tool that actually works. High utility means high retention and steady checks.",
  },
  {
    t: "IT Providers",
    icon: FiLayers,
    d: "Bundled software solutions. Offer Flowbee as the communication layer for your builds.",
  },
  {
    t: "Coaches",
    icon: FiUsers,
    d: "Teach automation. Get paid when your students implement our high-conversion chat flows.",
  },
  {
    t: "Freelancers",
    icon: FiZap,
    d: "Perfect side-income for consultants. Refer once, get paid every single month.",
  },
  {
    t: "Resellers",
    icon: FiShoppingBag,
    d: "Share with other vendors. Help them sell on WhatsApp while you earn from their success.",
  },
];

export const APPLY_WHATSAPP_LINK = "https://wa.me/919037837100";
export const HOTLINE_TEL = "tel:+919544144369";
export const HOTLINE_DISPLAY = "+91 95441 44369";
