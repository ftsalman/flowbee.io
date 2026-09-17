export const regions = [
  { code: "INR", symbol: "₹", label: "India" },
  { code: "AED", symbol: "AED ", label: "UAE / Middle East" },
  { code: "USD", symbol: "$", label: "Global" },
];

export const pricingTable = {
  INR: {
    starter: {
      quarterly: 2997,
      halfYearly: 5095,
      yearly: 9590,
      save: 2398,
      extraUser: 99,
      extraBranch: 449,
    },
    growth: {
      quarterly: 5997,
      halfYearly: 10195,
      yearly: 19190,
      save: 4798,
      extraUser: 99,
      extraBranch: 449,
    },
    pro: {
      quarterly: 23997,
      halfYearly: 40795,
      yearly: 76790,
      save: 19198,
      extraUser: 99,
      extraBranch: 449,
    },
  },
  AED: {
    starter: {
      monthly: 249,
      quarterly: 747,
      halfYearly: 1270,
      yearly: 2390,
      save: 598,
      extraUser: 49,
      extraBranch: 149,
    },
    growth: {
      monthly: 599,
      quarterly: 1797,
      halfYearly: 3055,
      yearly: 5750,
      save: 1438,
      extraUser: 49,
      extraBranch: 149,
    },
    pro: {
      monthly: 1599,
      quarterly: 4797,
      halfYearly: 8155,
      yearly: 15350,
      save: 3838,
      extraUser: 49,
      extraBranch: 149,
    },
  },
};

export const getPlanFeatures = (plan) => {
  return [
    `👥 ${plan === "starter" ? "3" : plan === "growth" ? "10" : "100"} Users Included`,
    plan === "starter"
      ? "5 Basic Chatbots"
      : plan === "growth"
        ? "20 Advanced Chatbots"
        : "Unlimited Chatbots",
    plan === "starter"
      ? "100+ Templates"
      : plan === "growth"
        ? "200+ Templates"
        : "Unlimited Templates",
    "Bulk Broadcast Messaging",
    "Blue Tick Verification Support",
    plan === "starter"
      ? "Up to 10 Keywords"
      : plan === "growth"
        ? "Up to 100 Keywords"
        : "Unlimited Keywords",
    "Unlimited Conversations",
    plan !== "starter" && "Interactive Form Support",
    plan !== "starter" && "Advanced Automation Triggers",
    plan !== "starter" && "Appointment Booking Module",
    plan !== "starter" && "Carousel Message Support",
    plan !== "starter" && "API & Webhook Access",
    plan !== "starter" && "Payment Integration (Stripe)",
    plan === "pro" && "Full UI Customizations",
    plan === "pro" && "Native Integrations (Zoho/Odoo)",
    plan === "pro" && "Priority Support & Manager",
  ].filter(Boolean);
};

export const featureMatrixData = [
  { f: "Standard Users", s: "3", g: "10", p: "100" },
  { f: "Chatbots", s: "5 Basic", g: "20 Adv.", p: "Unlimited" },
  { f: "Pre-built Templates", s: "100+", g: "200+", p: "Unlimited" },
  { f: "Broadcast Messages", s: "✅", g: "✅", p: "✅" },
  { f: "Blue Tick Verification", s: "✅", g: "✅", p: "✅" },
  { f: "Keyword Triggering", s: "10", g: "100", p: "Unlimited" },
  { f: "Unlimited Conversations", s: "✅", g: "✅", p: "✅" },
  { f: "Form Support", s: "❌", g: "✅", p: "✅" },
  { f: "Automation Triggers", s: "❌", g: "✅", p: "✅" },
  { f: "Appointment Booking", s: "❌", g: "✅", p: "✅" },
  { f: "Carousel Message", s: "❌", g: "✅", p: "✅" },
  { f: "API & Webhooks", s: "❌", g: "✅", p: "✅" },
  { f: "Payment Integration", s: "❌", g: "✅", p: "✅" },
  { f: "Customizations", s: "❌", g: "❌", p: "✅" },
  { f: "Native Integrations", s: "❌", g: "❌", p: "✅" },
  { f: "Priority Support", s: "❌", g: "❌", p: "✅" },
];

export const REGISTER_LINK = "https://app.flowbee.io/auth/register";
export const META_PRICING_LINK = "https://business.whatsapp.com/products/platform-pricing";
