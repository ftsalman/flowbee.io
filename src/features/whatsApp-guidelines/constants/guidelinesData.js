export const acceptableConsentExamples = [
  "Accepted WhatsApp updates through your website form",
  "Agreed during store registration or billing",
  "Contacted you through a Click-to-WhatsApp ad",
  "Accepted updates while placing an order or booking",
  "Scanned a QR code to join WhatsApp support or offers",
  "Submitted mobile number through a subscription form"
];

export const practicesToAvoid = [
  "Sending broadcasts to random or purchased number lists",
  "Messaging numbers collected or scraped from the internet",
  "Sending marketing messages to old databases without consent",
  "Messaging customers again after they have requested STOP"
];

export const stopRequestsList = [
  "Remove the customer from marketing communication",
  "Exclude the customer from future promotional broadcasts",
  "Send only important service-related messages where applicable"
];

export const messagingTiers = [
  {
    tier: "Tier 1: Initial Limit",
    limit: "250 / 1,000 Users",
    desc: "Unverified accounts start at 250 unique users. Verified profiles start at 1,000. Low message quality parameters can keep verified accounts capped at 250."
  },
  {
    tier: "Tier 2 Upgrade",
    limit: "10,000 Users",
    desc: "Message at least 500 unique customers within 7 days. Maintain a 'Good' Meta Message Quality rating score. Limit upgrade takes effect automatically after 24 hours."
  },
  {
    tier: "Tier 3 Upgrade",
    limit: "100,000 Users",
    desc: "Message at least 5,000 unique customers within 7 days. Ensure account health stays clear of customer block reports. Upgrade sets after a 24-hour processing window."
  },
  {
    tier: "Tier 4 Upgrade",
    limit: "Unlimited Users",
    desc: "Message at least 50,000 unique customers within a rolling 7-day window. Keeping quality flags green unlocks total, unlimited message dispatching capacity."
  }
];

export const billingCategories = [
  {
    category: "Marketing Conversation",
    desc: "Business-initiated broadcasts, discounts, offers, or product launches. Subject to regional country codes."
  },
  {
    category: "Utility Conversation",
    desc: "Business-initiated operational transaction pings, order receipts, shipping data, or booking confirmations."
  },
  {
    category: "Authentication Conversation",
    desc: "Strict business-initiated security verifications, login parameters, or user password reset OTP arrays."
  },
  {
    category: "Service (Customer-Initiated)",
    desc: "Conversations opening whenever an agent or bot answers an inbound customer inquiry within a 24-hour window."
  }
];

export const templateCategories = [
  {
    title: "Marketing",
    desc: "Offers, promotions, festival sales, new product launches.",
    example: "Ex: Eid Offer, Weekend Sale"
  },
  {
    title: "Utility",
    desc: "Updates related to transaction, order, booking, payment.",
    example: "Ex: Order Confirmation"
  },
  {
    title: "Authentication",
    desc: "Used for OTP, login codes, and verification codes.",
    example: "Ex: Password Reset Code"
  }
];

export const templateMapping = [
  { type: "Eid offer / discount", category: "Marketing", style: "purple" },
  { type: "Order shipped update", category: "Utility", style: "blue" },
  { type: "Appointment confirmed", category: "Utility", style: "blue" },
  { type: "OTP / login code", category: "Authentication", style: "orange" },
  { type: "New product launch", category: "Marketing", style: "purple" },
  { type: "Payment reminder", category: "Utility", style: "blue" }
];

export const spamExamplesList = [
  "Send bulk broadcasts without consent",
  "Send offers too frequently",
  "Send irrelevant messages",
  "Use fake urgency",
  "Share misleading offers",
  "Use too many emojis or capital letters",
  "Send repeated follow-ups to non-responders",
  "Message customers who replied STOP"
];

export const checklistItems = [
  "Are the contacts opted-in customers?",
  "Is the template approved?",
  "Is the template category correct?",
  "Is a STOP / unsubscribe option included?",
  "Is the audience relevant?",
  "Is the content free from restricted items?",
  "Is the message clear and not misleading?",
  "Is the account quality healthy?"
];

export const flowbeeResponsibilities = [
  "Send broadcasts only to customers with consent",
  "Include a STOP option in marketing messages",
  "Exclude STOP / unsubscribed customers from lists",
  "Use approved WhatsApp templates where required",
  "Select the correct template category mapping",
  "Use templates after the 24-hour window ends",
  "Avoid restricted business or product content fields",
  "Do not send misleading or spam-style offers",
  "Avoid sending high frequency repetitive updates",
  "Monitor account quality guidelines regularly"
];

export const summaryChecklist = [
  "Do not send messages without customer consent",
  "Respect STOP / unsubscribe requests",
  "Use approved templates after the 24-hour window",
  "Select the correct template category",
  "Avoid spam-style messages",
  "Do not request sensitive data through WhatsApp",
  "Avoid restricted products and services",
  "Keep your business profile accurate",
  "Control broadcast frequency metrics",
  "Monitor account quality regularly"
];
