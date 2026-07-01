"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "../lib/contact";

export default function WhatsAppFab() {
  const url = createWhatsAppUrl("您好，我想了解越南燕窩產品資訊，請與我聯絡。");

  return (
    <motion.a
      href={url}
      className="wa-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact via WhatsApp"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="wa-fab-ping" />
      <span className="wa-fab-text">WhatsApp</span>
      <MessageCircle size={20} />
    </motion.a>
  );
}
