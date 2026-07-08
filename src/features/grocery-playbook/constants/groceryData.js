import { 
  FiClock, FiMessageCircle, FiTag, FiRefreshCw, 
  FiAlertCircle, FiSun, FiStar, FiCalendar, FiTruck, FiUsers 
} from 'react-icons/fi';

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flowbee.io Supermarket WhatsApp Automation CRM",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Enterprise WhatsApp Business API automation and CRM platform built specifically for supermarkets, hypermarkets, and grocery stores.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@type": "Organization", "name": "Flowbee.io" }
};

export const marketContextData = [
  { icon: FiRefreshCw, title: "Frequent Purchases", desc: "Grocery customers buy repeatedly. Regular communication brings them back to your store." },
  { icon: FiTag, title: "Offers Drive Decisions", desc: "Customers decide where to shop based on discounts, combo offers, and fresh stock availability." },
  { icon: FiClock, title: "Timing Is Important", desc: "A morning fresh item offer or a weekend family deal works best when received at the right time." },
  { icon: FiMessageCircle, title: "WhatsApp is Personal", desc: "Customers notice WhatsApp messages much faster than social media posts or printed flyers." }
];

export const problemsData = [
  { title: "Offers Not Reaching Properly", desc: "Supermarkets print flyers or post on social media, but customers miss them. WhatsApp ensures direct delivery." },
  { title: "Same Offer Sent to Everyone", desc: "A fresh meat buyer and a baby product buyer don't need the same promotion. Lack of segmentation kills conversions." },
  { title: "Too Many Manual Messages", desc: "Staff waste hours manually sending product images, price lists, locations, and store timings." },
  { title: "Replies Are Unorganized", desc: "After broadcasting offers, customers ask 'Can you deliver?'. Without a Team Inbox, replies get lost in the chaos." },
  { title: "No Customer Segmentation", desc: "Without customer tags and groups, it is impossible to send highly relevant offers to the right people." },
  { title: "Missed Repeat Sales", desc: "Many customers visit once and disappear. Without automated follow-up offers, repeat revenue drops." },
  { title: "No Clear Campaign Report", desc: "You don't know how many customers actually received, read, or responded to your weekend offer messages." }
];

export const dailyUseCasesData = [
  { icon: FiSun, title: "Morning Fresh Item Broadcast", desc: "Send fresh fruits, vegetables, meat, fish, and bakery updates to nearby customers." },
  { icon: FiTag, title: "Weekend Offer Campaign", desc: "Send weekend grocery discounts and combo offers to families and repeat buyers." },
  { icon: FiStar, title: "Festival Promotions", desc: "Send festival-related product offers (Ramadan, Diwali, Eid) before the shopping rush." },
  { icon: FiCalendar, title: "Monthly Grocery Reminders", desc: "Send monthly grocery pack offers to customers who usually buy in bulk at month-end." },
  { icon: FiTruck, title: "Delivery Enquiry Handling", desc: "Automatically reply with delivery area limits, minimum order values, and timings." },
  { icon: FiUsers, title: "Bulk Order Management", desc: "Assign bulk grocery and wholesale enquiries directly to the store manager." },
  { icon: FiRefreshCw, title: "Customer Reactivation", desc: "Send special 'We Miss You' discount offers to customers who have not purchased recently." }
];

export const analyticsLabels = [
  "Total Broadcast Sent", "Messages Delivered", "Messages Read", "Customer Replies", 
  "Campaign Response Rate", "Orders from Broadcast", "Pending Replies", "Unread Chats",
  "Hot Leads", "Repeat Customers", "Agent Response Time", "Solved Chats",
  "Failed Messages", "Best Performing Offer", "Active Segments"
];

export const scenariosData = [
  { title: "Weekend Grocery Deal", desc: "Your supermarket sends a Friday morning broadcast with grocery offers. Customers reply with order requests. Team Inbox helps staff manage all replies efficiently." },
  { title: "Fresh Vegetables Arrival", desc: "Fresh vegetables arrive in the morning. You send an instant WhatsApp update to nearby customers and delivery customers to clear stock fast." },
  { title: "Ramadan or Eid Offer", desc: "You send special offers for dates, rice, meat, beverages, sweets, and family grocery packs exactly when festival shoppers are planning." },
  { title: "Monthly Family Grocery Pack", desc: "You broadcast a monthly grocery combo specifically to customers tagged as 'monthly buyers' on the 1st of every month." },
  { title: "Delivery Area Enquiry", desc: "Customers ask if delivery is available in their area. Auto reply instantly collects their location pin and guides them to the delivery team." },
  { title: "Inactive Reactivation", desc: "Customers who have not purchased for over 30 days automatically receive a special comeback offer to win back their business." }
];

export const benefitsData = [
  { title: "More Effective Offer Promotion", desc: "Send daily, weekly, and festival offers directly to customers on WhatsApp where open rates are 98%." },
  { title: "Better Repeat Purchases", desc: "Stay connected with customers and bring them back consistently with relevant, timely offers." },
  { title: "Faster Customer Replies", desc: "Auto reply helps customers get quick answers about offers, delivery, location, and availability 24/7." },
  { title: "Organized Broadcast Replies", desc: "Team Inbox helps your staff manage the massive influx of customer responses after campaign messages without crashing." },
  { title: "Smarter Customer Targeting", desc: "Send different offers to different customer groups using tags and segmentation (e.g. Meat vs Baby Products)." },
  { title: "Better Store Operations", desc: "Assign enquiries efficiently to sales, delivery, customer support, or specific branch managers." }
];

export const faqData = [
  { q: "Can Flowbee.io send supermarket offers through WhatsApp?", a: "Yes. You can send daily offers, weekend deals, festival offers, fresh item updates, and grocery promotions through WhatsApp broadcast securely." },
  { q: "Can we send different offers to different customers?", a: "Yes. You can segment customers using tags and groups (like Bulk Buyers or Baby Product shoppers), then send targeted campaigns." },
  { q: "Can Flowbee.io manage replies after a large broadcast?", a: "Yes. All customer replies drop into the unified Team Inbox, where your entire staff can assign, reply, and track order statuses concurrently." },
  { q: "Can customers place grocery orders through WhatsApp?", a: "Yes. Customers can send typed grocery lists, view native catalogue options, ask for product availability, and checkout via payment links." },
  { q: "Can Flowbee.io reply automatically to common questions?", a: "Yes. The Chatbot builder handles questions about offers, delivery radiuses, store locations, working hours, order status, and return policies instantly." },
  { q: "Is this useful for small grocery stores also?", a: "Yes. Flowbee.io scales perfectly. It is useful for standalone mini marts, large supermarkets, hypermarkets, wholesale shops, and multi-branch retail chains." },
  { q: "Can we track broadcast performance?", a: "Yes. The dashboard tracks sent, delivered, read, failed, and exact customer reply metrics from every campaign." }
];
