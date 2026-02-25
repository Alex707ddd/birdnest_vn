"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroVideo({ content }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.55]);

  return (
    <section id="hero" className="hero">
      <motion.video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/IMG_2786.JPG"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 72, damping: 20, mass: 1.05 }}
        style={{ y, opacity }}
      >
        <source src="/assets/1JDUVEDKS_41R364.mp4" type="video/mp4" />
      </motion.video>

      <div className="hero-overlay" />

      <motion.div
        className="hero-content liquid-panel"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 86, damping: 18, delay: 0.08 }}
      >
        <span className="kicker">{content.caption}</span>
        <h1>
          {content.title}
          <em>{content.subtitle}</em>
        </h1>
        <p>{content.desc}</p>
        <a href="#products" className="gold-btn">
          <span>{content.cta}</span>
          <ArrowRight size={14} />
        </a>
      </motion.div>

      <motion.a
        className="scroll-tip"
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
