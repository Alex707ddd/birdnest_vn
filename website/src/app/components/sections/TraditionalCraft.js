"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TraditionalCraft({ section }) {
  return (
    <motion.section
      id="about"
      className="section craft"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 92, damping: 18 }}
    >
      <div className="craft-grid">
        <motion.div
          className="craft-media liquid-panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 90, damping: 19 }}
        >
          <Image
            src="/assets/IMG_2786.JPG"
            alt="Birdnest craftsmanship"
            fill
            sizes="(max-width: 880px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          className="craft-content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 90, damping: 19, delay: 0.04 }}
        >
          <span>{section.caption}</span>
          <h2>
            {section.title} <em>{section.subtitle}</em>
          </h2>
          <p>{section.desc}</p>

          <div className="craft-steps">
            {section.steps.map((step, index) => (
              <article key={step.title} className="craft-step liquid-panel">
                <b>{index + 1}</b>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
