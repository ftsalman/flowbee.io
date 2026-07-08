// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────
export const REGISTER_LINK = "https://app.flowbee.io/auth/register";
export const WHATSAPP_DEMO_LINK = "https://wa.me/917012345678?text=Hi%2C+I+want+a+demo";

// ─────────────────────────────────────────────
// Client Logos Marquee (1-29)
// ─────────────────────────────────────────────
export const CLIENT_LOGOS = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  src: `/images/Clients/${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

// ─────────────────────────────────────────────
// Integration Logos
// ─────────────────────────────────────────────
export const INTEGRATIONS = [
  { name: "Zoho", src: "/images/logos/zoho.png" },
  { name: "Shopify", src: "/images/logos/shopify.png" },
  { name: "WooComm", src: "/images/logos/woocommerce.png" },
  { name: "Odoo", src: "/images/logos/odoo.png" },
  { name: "Stripe", src: "/images/logos/stripe.png" },
  { name: "Custom API", isIcon: true },
];

// ─────────────────────────────────────────────
// Ads Section - Bottom Metrics
// ─────────────────────────────────────────────
export const ADS_METRICS = [
  { metric: "0%", label: "Website Drop-off" },
  { metric: "5x", label: "Higher Conversion" },
  { metric: "< 1s", label: "Automated Reply" },
  { metric: "100%", label: "Lead Ownership" },
];

// ─────────────────────────────────────────────
// Broadcast Section - Features
// ─────────────────────────────────────────────
export const BROADCAST_FEATURES = [
  {
    title: "Smart Throttling",
    desc: "AI automatically paces your message sending to keep your number strictly within Meta's safe limits.",
    iconKey: "cpu",
  },
  {
    title: "Dynamic Personalization",
    desc: "Insert custom variables like {{name}} or {{order_id}} to make every bulk message feel 1-on-1.",
    iconKey: "users",
  },
  {
    title: "Granular Analytics",
    desc: "Track exactly who received, opened, and replied to your broadcast in real-time.",
    iconKey: "chart",
  },
];

// ─────────────────────────────────────────────
// AI Bot Section - Features
// ─────────────────────────────────────────────
export const BOT_FEATURES = [
  { title: "Visual Flow Builder", desc: "Drag & drop message sequences.", iconKey: "layers" },
  { title: "Intent Recognition", desc: "AI understands natural language.", iconKey: "cpu" },
  { title: "Product Catalog", desc: "Send products directly in chat.", iconKey: "shopping" },
  { title: "Human Handoff", desc: "Seamlessly route to live agents.", iconKey: "users" },
];

// ─────────────────────────────────────────────
// Roadmap Steps
// ─────────────────────────────────────────────
export const ROADMAP_STEPS = [
  { step: "01", title: "Connect API", desc: "Securely link via Meta.", iconKey: "lock", color: "text-blue-500" },
  { step: "02", title: "Setup Flows", desc: "Automate your replies.", iconKey: "zap", color: "text-[#25D366]" },
  { step: "03", title: "Scale & Grow", desc: "Sell effortlessly.", iconKey: "trending", color: "text-orange-500" },
];

// ─────────────────────────────────────────────
// Bento Cards
// ─────────────────────────────────────────────
export const CRM_TAGS = ["Lead Scoring", "Auto-Routing", "Custom Tags", "API Webhooks"];

// ─────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────
export const INDUSTRIES = [
  { name: "E-Commerce", icon: "🛒" },
  { name: "Real Estate", icon: "🏡" },
  { name: "Education", icon: "🎓" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💳" },
  { name: "Travel", icon: "✈️" },
  { name: "Automotive", icon: "🚗" },
  { name: "Food & Bev", icon: "🍔" },
];
