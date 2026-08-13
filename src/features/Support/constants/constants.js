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
  "getting-started": [],
  "dashboard": [],
  "team-inbox": [],
  "account-billing": [],
  "contacts": [],
  "chatbot": [],
  "whatsapp-forms": [],
  "broadcast-messaging": [],
  "agents": [],
  "whatsapp-e-commerce": [],
};
