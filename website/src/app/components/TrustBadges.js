"use client";

import { motion } from "framer-motion";
import { Hand, Leaf, Plane, ShieldCheck } from "lucide-react";

const iconMap = [Leaf, Hand, ShieldCheck, Plane];

export default function TrustBadges({ section }) {
  return (
    <motion.section
      className="section trust"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 95, damping: 18 }}
    >
      <div className="trust-grid liquid-panel">
        {section.items.map((item, index) => {
          const Icon = iconMap[index];

          return (
            <article key={item.title} className="trust-item">
              <Icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}
