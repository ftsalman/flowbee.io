import { 
  FiSmartphone, FiClock, FiBriefcase, FiMessageCircle, 
  FiAlertCircle, FiGlobe, FiFileText, FiMapPin, FiUsers, FiCalendar 
} from 'react-icons/fi';
import { FaPlaneDeparture } from 'react-icons/fa';

// --- OFFICIAL SEO STRUCTURED DATA SCHEMA ---
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flowbee.io Tours & Travels WhatsApp Automation CRM",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Enterprise WhatsApp Business API automation and Omnichannel CRM platform built specifically for travel agencies, tour operators, and visa service providers.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@type": "Organization", "name": "Flowbee.io" }
};

export const marketContextData = [
  { icon: FiSmartphone, title: "Mobile-First Planning", desc: "Most customers now search, compare, and communicate through mobile before booking travel services." },
  { icon: FiClock, title: "Speed Matters in Sales", desc: "When customers ask about a tour package or ticket price, fast response directly influences booking decisions." },
  { icon: FiBriefcase, title: "Support Continues", desc: "Travel customers need updates, reminders, documents, tickets, hotel details, and emergency support post-booking." },
  { icon: FiMessageCircle, title: "Natural Channel", desc: "Customers are already comfortable receiving package details, reminders, and support messages through WhatsApp." }
];

export const problemsData = [
  { title: "Too Many Package Enquiries", desc: "Customers ask for Dubai packages, Kerala tours, Umrah, visas, and hotels. Without automation, staff spend hours answering repeats." },
  { title: "Slow Replies Reduce Bookings", desc: "Travel customers contact multiple agencies. If your reply is delayed, the lead books somewhere else." },
  { title: "No Proper Team Inbox", desc: "One asks about visa, another about tickets. Without a shared inbox, chats are confusing and follow-ups are missed." },
  { title: "Manual Detail Sharing", desc: "Staff repeatedly send the same package PDFs, itineraries, inclusions, visa documents, and price details manually." },
  { title: "Untargeted Broadcasts", desc: "A family holiday lead shouldn't get a student visa offer. Sending the same message to all contacts is ineffective." },
  { title: "Missed Follow-Ups", desc: "Many ask today and book days later. Without reminders and tracking, hot travel leads are lost." },
  { title: "Disorganized Post-Booking", desc: "Customers need ticket updates, visa status, pickup details, and emergency contacts. Poor organization ruins the experience." }
];

export const dailyUseCasesData = [
  { icon: FiGlobe, title: "Package Enquiries", desc: "Customer asks for Europe or Umrah packages. Flowbee.io replies instantly and collects basic details." },
  { icon: FiFileText, title: "Visa Services", desc: "Customers select visa type, get document checklists, submit details, and connect with visa staff." },
  { icon: FaPlaneDeparture, title: "Ticketing Support", desc: "Collect flight ticket options, travel dates, passenger counts, and preferred airlines automatically." },
  { icon: FiMapPin, title: "Hotel Bookings", desc: "Gather destination, check-in/out dates, guest count, and hotel category preferences seamlessly." },
  { icon: FiUsers, title: "Group Tours", desc: "Send group departure updates, payment reminders, and travel instructions through WhatsApp." },
  { icon: FiCalendar, title: "Post-Booking", desc: "Send itineraries, ticket details, hotel vouchers, pickup details, and emergency contacts." }
];

export const benefitsData = [
  { title: "Faster Enquiry Response", desc: "Reply instantly to common travel questions and avoid losing leads due to slow response times." },
  { title: "Better Lead Conversion", desc: "Collect customer travel requirements precisely and assign hot leads to the right closing team." },
  { title: "Organized Team Communication", desc: "Use Team Inbox to manage package, visa, and ticketing enquiries without internal confusion." },
  { title: "Smarter Broadcasts", desc: "Send targeted travel offers to the right customer groups based on destination, interest, and booking stage." },
  { title: "Superior Experience", desc: "Give customers quick updates, clear package information, and smooth support before and after travel." },
  { title: "More Repeat Business", desc: "Stay connected with past travellers and send them relevant loyalty offers for future trips." }
];

export const broadcastTemplatesData = [
  {
    type: "Holiday Package",
    typeColor: "blue",
    content: "“Dreaming of your next holiday? Explore our latest travel packages with flights, hotel stay, sightseeing, and complete support.”",
    cta: "View Packages"
  },
  {
    type: "Umrah Package",
    typeColor: "emerald",
    content: "“Book your Umrah journey with complete travel support, visa assistance, hotel options, and group guidance.”",
    cta: "Check Dates"
  },
  {
    type: "Visa Service",
    typeColor: "purple",
    content: "“Need visa assistance? Get document checklist, application guidance, and expert support from our visa team.”",
    cta: "Visa Documents"
  },
  {
    type: "Last-Minute Deal",
    typeColor: "orange",
    content: "“Limited-time travel offer available now. Perfect for families looking for a quick weekend getaway.”",
    cta: "Book Now"
  }
];

export const analyticsLabels = [
  "Package Enquiries", "Visa Enquiries", "Ticketing Enquiries", "Confirmed Bookings", 
  "Pending Follow-Ups", "Unread Chats", "Avg Response Time", "Broadcast Delivered",
  "Campaign Replies", "Agent Performance", "Open Chats", "Lead Source"
];

export const scenariosData = [
  { title: "Customer Asks for Dubai Package", desc: "Instantly collects number of travellers, date, budget, and type. The enquiry is assigned to the holiday sales team automatically." },
  { title: "Visa Document Checklist", desc: "Customer selects visa service and receives the required document list automatically. Chat routes to the visa team." },
  { title: "Group Tour Announcement", desc: "Send a broadcast to customers interested in group tours with departure date, price, inclusions, and booking CTA." },
  { title: "Payment Pending Follow-Up", desc: "A customer confirmed interest but has not paid yet. Flowbee.io helps the team track and send polite payment reminders." },
  { title: "Travel Date Reminder", desc: "Before travel, customers receive automated reminders for passport, ticket, hotel voucher, pickup time, and emergency contact." },
  { title: "After-Trip Repeat Booking", desc: "After the trip, the customer receives feedback messages, review requests, and new travel offers to drive loyalty." }
];

export const faqData = [
  { q: "Can Flowbee.io manage travel package enquiries?", a: "Yes. Flowbee.io can collect customer destination, travel date, number of travellers, budget, and package preference through WhatsApp." },
  { q: "Can we send travel offers through broadcast?", a: "Yes. You can send targeted WhatsApp broadcasts for holiday packages, visa services, Umrah packages, ticket offers, and seasonal campaigns." },
  { q: "Can multiple staff handle WhatsApp chats?", a: "Yes. Flowbee.io Team Inbox allows multiple staff to handle customer chats, assign enquiries, add notes, and track status." },
  { q: "Can Flowbee.io reply automatically to customers?", a: "Yes. You can set auto replies for package enquiry, visa service, ticketing, office location, document checklist, and support." },
  { q: "Can we segment customers by destination or service?", a: "Yes. You can tag customers as Dubai Lead, Umrah Lead, Visa Enquiry, Honeymoon Lead, Ticketing Lead, and more." },
  { q: "Is Flowbee.io useful after booking also?", a: "Yes. You can send itinerary, ticket details, hotel voucher, payment reminders, travel checklist, and support messages through WhatsApp." }
];
