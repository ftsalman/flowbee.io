import { FiAlertCircle, FiClock, FiPhoneOff } from 'react-icons/fi';

// --- OFFICIAL SEO STRUCTURED DATA SCHEMA ---
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flowbee.io Jewellery WhatsApp Automation CRM",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Enterprise WhatsApp Business API automation and Omnichannel CRM platform built specifically for retail jewellery showrooms, gold shops, and luxury retailers.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@type": "Organization", "name": "Flowbee.io" }
};

export const frictionBlocksData = [
  { icon: FiAlertCircle, title: "Lost Enquiries", desc: "Eliminate forgotten threads regarding making charges, exchange policies, or precise diamond clarity availability." },
  { icon: FiClock, title: "Slow Response Decay", desc: "Stop losing impatient, high-intent bridal buyers to faster competitors when they request heavy necklace specifications." },
  { icon: FiPhoneOff, title: "Dropped Follow-ups", desc: "Deploy automated time-delayed reminders so high-ticket leads do not go cold 48 hours after visiting the physical showroom." }
];

export const scenariosData = [
  { title: "Peak Season Traffic Surges", desc: "During peak wedding months, WhatsApp traffic spikes exponentially. Flowbee automatically qualifies leads, capturing budget parameters and intent before human intervention is required, ensuring zero dropped leads." },
  { title: "Calculated Event Marketing", desc: "Prior to major cultural purchasing events (Diwali, Akshaya Tritiya, Dhanteras), execute multi-tier broadcast architectures that target users based on their specific historical purchase weight and purity preferences." },
  { title: "VIP Product Syndication", desc: "Upon acquisition of exclusive diamond or Polki collections, system workflows can automatically syndicate preview media exclusively to high-LTV (Lifetime Value) profiles before general public release." }
];

export const faqData = [
  { q: "Is the catalog integration capable of syncing with our existing ERP?", a: "Yes. Flowbee.io supports REST API webhooks that allow your native inventory management software (ERP/POS) to dynamically update product availability, live pricing, and media assets inside the WhatsApp catalog structure." },
  { q: "How does the Team Inbox manage concurrent multi-agent access?", a: "The architecture supports omnichannel synchronization. Multiple sales executives can log into the centralized dashboard simultaneously. The system includes collision-detection and explicit chat assignment to prevent redundant replies." },
  { q: "Can we migrate our existing WhatsApp Business numbers to the Official API?", a: "Absolutely. Our deployment team handles the complete migration of your existing mobile numbers into the Official WhatsApp Business API framework, verifying your brand for the official Green Tick badge." },
  { q: "Are broadcast campaigns subject to volume limitations or bans?", a: "By operating on the Official WhatsApp API, your account is protected from arbitrary bans associated with unofficial apps. Message tier limits (1K, 10K, 100K, Unlimited) scale dynamically based on template quality and account trust metrics." }
];
