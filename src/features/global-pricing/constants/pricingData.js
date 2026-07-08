export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Global Pricing | Flowbee.io",
  "description": "View Flowbee.io WhatsApp Automation pricing for all regions including Global (USD), India (INR), and Middle East (AED).",
  "publisher": { "@type": "Organization", "name": "Flowbee.io" }
};

export const regions = [
  { code: 'USD', symbol: '$', label: 'Global (USD)' },
  { code: 'INR', symbol: '₹', label: 'India (INR)' },
  { code: 'AED', symbol: 'AED ', label: 'UAE / GCC (AED)' }
];

export const pricingTable = {
  INR: {
    starter: { monthly: 799, yearly: 7670, save: 1918, extraUser: 99, extraBranch: 449 },
    growth: { monthly: 1999, yearly: 19190, save: 4798, extraUser: 99, extraBranch: 449 },
    pro: { monthly: 7999, yearly: 76790, save: 19198, extraUser: 99, extraBranch: 449 }
  },
  AED: {
    starter: { monthly: 249, yearly: 2390, save: 598, extraUser: 49, extraBranch: 149 },
    growth: { monthly: 599, yearly: 5750, save: 1438, extraUser: 49, extraBranch: 149 },
    pro: { monthly: 1599, yearly: 15350, save: 3838, extraUser: 49, extraBranch: 149 }
  }
};

export const featureMatrix = [
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
  { f: "Priority Support", s: "❌", g: "❌", p: "✅" }
];
