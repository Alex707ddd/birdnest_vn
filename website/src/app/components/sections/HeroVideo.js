"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";

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

      <div className="hero-content">
        <span className="kicker">{content.caption}</span>
        <h1>
          {content.title}
          <em>{content.subtitle}</em>
        </h1>
        <p>{content.desc}</p>
        <div className="hero-actions">
          <a href="#ritual" className="gold-btn">
            <span>{content.cta}</span>
            <ArrowRight size={14} />
          </a>
          <a href="#evidence" className="ghost-btn">
            <ShieldCheck size={14} />
            <span>{content.proofCta}</span>
          </a>
        </div>
      </div>

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
