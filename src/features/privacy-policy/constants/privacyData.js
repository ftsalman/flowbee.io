export const privacyHeaderData = {
  effectiveDate: "April 10, 2025",
  entity: "Task force Technologies Est., Sharaco Technologies Pvt Ltd"
};

export const privacySections = [
  {
    title: "1. Introduction",
    icon: "FiInfo",
    content: [
      "At Flowbee.io, your privacy is our priority. We are committed to protecting your personal data and ensuring transparency in how your information is collected, used, disclosed, and safeguarded when you interact with our platform, products, and services (collectively referred to as the “Services”).",
      "This Privacy Policy applies to all individuals who access or use our website (www.flowbee.io), web applications, mobile apps, integrations, APIs, and any other digital properties operated by Task force Technologies Est. And Sharaco Technologies Pvt Ltd.",
      "By using our Services, you acknowledge that you have read and understood this Privacy Policy, and you agree to our handling of your personal data as described herein. If you do not agree with the terms of this Policy, you should discontinue use of our Services."
    ]
  },
  {
    title: "2. Scope of this Policy",
    icon: "FiGlobe",
    content: [
      "This Privacy Policy applies to:"
    ],
    list: [
      "All users of the Task Force Technologies Est., Sharaco Technologies Pvt Ltd. and Flowbee.io platform (businesses, agents, admins, staff)",
      "Website visitors and demo users",
      "Partners and resellers",
      "End-customers whose data may be processed via our platform",
      "Users interacting with our WhatsApp automation, CRM, or ecommerce tools"
    ],
    footer: "This Policy does not apply to the practices of third parties that Task Force Technologies Est., Sharaco Technologies Pvt Ltd. & Flowbee.io does not own or control, including third-party services that users may choose to integrate with Task Force Technologies Est., Sharaco Technologies Pvt Ltd. and Flowbee.io."
  },
  {
    title: "3. Definitions",
    icon: "FiFileText",
    definitions: [
      { term: "Personal Data:", desc: "Information that identifies or can be used to identify an individual (e.g., name, phone number, email, device ID, IP address)." },
      { term: "Data Controller:", desc: "The individual or business entity who decides how and why Personal Data is processed." },
      { term: "Data Processor:", desc: "An entity that processes data on behalf of a controller. Flowbee.io acts as a Data Processor when customers upload or manage end-user data." },
      { term: "Service Data:", desc: "Data input or generated during the use of Flowbee.io, such as customer messages, files, appointment records, and contact details." }
    ]
  }
];

export const informationCollected = [
  {
    title: "4.1. Information You Provide to Us",
    content: [
      "Full name, business name, email address, phone number (especially WhatsApp numbers)",
      "Business registration and billing information",
      "Contact lists, chat templates, automation flows",
      "Files uploaded: PDFs, images, audio, video",
      "Credentials or tokens from linked third-party apps (e.g., Meta, Google, WooCommerce)",
      "Links or other soft data."
    ],
    isList: true
  },
  {
    title: "4.2. Automatically Collected Information",
    content: "IP address, device type, OS, browser type/version, time zone, screen resolution, access timestamps, usage metrics (page views, clicks), log files and error reports.",
    isList: false
  },
  {
    title: "4.3. Behavioral and Analytical Information",
    content: "User preferences, communication patterns, email open rates, demo engagement, WhatsApp message metadata (time sent, delivery status, message type).",
    isList: false
  },
  {
    title: "4.4. Location and Device Data",
    content: "With your permission, we may access location data for regional customization and mobile device information (device ID, manufacturer, OS, app version).",
    isList: false
  }
];

export const retentionData = [
  { type: "WhatsApp Chat Logs", period: "90 days max (auto-deleted)" },
  { type: "Media Files", period: "90 days max (images, PDFs, voice)" },
  { type: "Product Order Info", period: "90 days from date of order" },
  { type: "Customer Contact Lists", period: "Lifetime of flowbee.io" },
  { type: "Account and Billing Details", period: "Retained while account is active" },
  { type: "Cookies and Session Logs", period: "90 days" }
];

export const yourRights = {
  title: "11. Your Rights",
  content: "Includes Access, Rectification, Deletion, Restriction of Processing, Data Portability, Object to processing, and Withdrawal of Consent. Exercise via support@flowbee.io."
};

export const securityMeasures = {
  title: "12. Security Measures",
  content: "HTTPS/SSL encryption, Tier-1 cloud storage, 2FA/RBAC, Firewalls, and internal audits."
};

export const contactInfo = {
  title: "16. Contact Us",
  companyLine1: "Task Force Technologies Est., Sharaco Technologies Pvt Ltd.",
  companyLine2: "Flowbee.io Privacy Office",
  email: "support@flowbee.io",
  responseTime: "Response within 7 working days"
};
