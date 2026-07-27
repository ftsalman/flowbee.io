import {
  FiPlayCircle,
  FiLayout,
  FiInbox,
  FiCreditCard,
  FiUsers,
  FiCpu,
  FiClipboard,
  FiRadio,
  FiBriefcase,
  FiShoppingBag,
} from "react-icons/fi";

export const CATEGORIES = [
  { id: "getting-started", label: "Getting Started with Flowbee.io", icon: FiPlayCircle, description: "Let's help users take their first steps!" },
  { id: "dashboard", label: "Dashboard", icon: FiLayout, description: "Flowbee.io Dashboard Overview" },
  { id: "team-inbox", label: "Team Inbox", icon: FiInbox, description: "Team Inbox" },
  { id: "account-billing", label: "Account & Billing", icon: FiCreditCard, description: "Account & Billing" },
  { id: "contacts", label: "Contacts", icon: FiUsers, description: "Contacts" },
  { id: "chatbot", label: "Chatbot", icon: FiCpu, description: "Chatbot" },
  { id: "whatsapp-forms", label: "WhatsApp Forms", icon: FiClipboard, description: "WhatsApp Forms" },
  { id: "broadcast-messaging", label: "Broadcast Messaging", icon: FiRadio, description: "Broadcast Messaging" },
  { id: "agents", label: "Agents", icon: FiBriefcase, description: "Agents" },
  { id: "whatsapp-e-commerce", label: "WhatsApp E-commerce", icon: FiShoppingBag, description: "WhatsApp E-commerce" },
];

export const MODULES_DATA = {
  "getting-started": [
    { title: "About Flowbee.io?", desc: "Learn the basics about Flowbee.io." },
    { title: "Pre-Requirements Before Onboarding to Flowbee.io", desc: "What you need before getting started." },
    { title: "How to Sign Up to Flowbee.io", desc: "Step by step guide to signing up." },
    { title: "Welcome to Flowbee.io Doc", desc: "Welcome documentation." },
  ],
  "dashboard": [
    { title: "Flowbee Dashboard Overview", desc: "Understand your main dashboard metrics." },
  ],
  "team-inbox": [
    { title: "What is Team Inbox?", desc: "Overview of the team inbox feature." },
    { title: "Manage Inbox", desc: "How to manage and organize your inbox." },
    { title: "Compose Box", desc: "Using the compose box to send messages." },
    { title: "Inbox Tools & Navigation", desc: "Navigating tools within the inbox." },
    { title: "Errors & FAQ", desc: "Common errors and frequently asked questions." },
  ],
  "account-billing": [
    { title: "Chat History Retention Policy", desc: "Learn about our data retention policies." },
  ],
  "contacts": [
    { title: "Introduction", desc: "Introduction to contacts." },
    { title: "Add Contact", desc: "How to add a new contact." },
    { title: "Contact Groups", desc: "Organizing contacts into groups." },
    { title: "Contact Management", desc: "Managing your contact lists." },
  ],
  "chatbot": [
    { title: "Introduction", desc: "Introduction to chatbots." },
    { title: "Chatbot Interface", desc: "Navigating the chatbot interface." },
    { title: "Chatbot Nodes", desc: "Understanding chatbot nodes." },
    { title: "Set Up Default Bot", desc: "Setting up your default bot." },
    { title: "Keyword Trigger Setup", desc: "Setting up triggers for keywords." },
    { title: "Session Timeout & Manual Chat Expiry", desc: "Handling chat sessions." },
  ],
  "whatsapp-forms": [
    { title: "Introduction", desc: "Introduction to WhatsApp forms." },
    { title: "Form Capabilities", desc: "What you can do with WhatsApp forms." },
  ],
  "broadcast-messaging": [
    { title: "Introduction", desc: "Introduction to broadcast messaging." },
    { title: "WhatsApp Messaging Limits & Tiers", desc: "Understanding messaging limits." },
    { title: "WhatsApp Templates", desc: "Using templates for WhatsApp." },
    { title: "Create Template – Support & Approval", desc: "Creating and getting templates approved." },
    { title: "Broadcast Overview & Analytics", desc: "Analyzing your broadcasts." },
    { title: "Send Broadcast Campaign", desc: "How to send a broadcast campaign." },
  ],
  "agents": [
    { title: "Agents", desc: "Managing your agents." },
  ],
  "whatsapp-e-commerce": [
    { title: "WhatsApp E-commerce", desc: "Introduction to WhatsApp E-commerce." },
    { title: "Connect WhatsApp Catalog", desc: "Connecting your product catalog." },
    { title: "Product Management", desc: "Managing your products." },
    { title: "Product Category Management", desc: "Managing product categories." },
    { title: "Order Dashboard (WhatsApp Commerce)", desc: "Viewing your orders." },
    { title: "E-commerce Automation", desc: "Automating your e-commerce workflows." },
    { title: "External E-commerce Store", desc: "Connecting external stores." },
  ],
};
