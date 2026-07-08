import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppBadge = () => (
  <span className="inline-flex items-center gap-1.5 lg:gap-2 text-[#25D366]">
    WhatsApp <FaWhatsapp className="animate-pulse" />
  </span>
);
