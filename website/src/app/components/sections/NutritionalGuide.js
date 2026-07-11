"use client";

import { motion } from "framer-motion";

export default function NutritionalGuide({ section }) {
  return (
    <motion.section
      id="ritual"
      className="ritual"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 88, damping: 19 }}
    >
      <div className="ritual-glow" />

      <div className="section ritual-content">
        <h2>{section.title}</h2>
        <p className="ritual-subtitle">{section.subtitle}</p>

        <div className="ritual-grid">
          <div className="ritual-line" />
          {section.steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="ritual-step"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 110, damping: 20, delay: index * 0.06 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.article>
          ))}
        </div>

        <aside className="ritual-tips liquid-panel">
          <h4>{section.tipsTitle}</h4>
          <ul>
            {section.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </aside>
      </div>
    </motion.section>
  );
}
