"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function ProductCard({ item, index, bookingLabel }) {
  return (
    <motion.article
      className={`card liquid-panel ${item.video ? "has-video" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 110, damping: 20, delay: index * 0.06 }}
    >
      <div className="media">
        {item.video ? (
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 25vw"
          />
        )}

        {item.badge ? <span className="badge">{item.badge}</span> : null}
      </div>

      <div className="card-body">
        <h3>{item.title}</h3>
        <p className="subtitle">{item.subtitle}</p>
        <p className="card-desc">{item.desc}</p>
        <hr className="card-divider" />
        <a href="#booking" className="inline-link">
          <span>{bookingLabel}</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}

export default function ProductGallery({ section, products }) {
  return (
    <motion.section
      id="products"
      className="section products"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
    >
      <div className="title-wrap">
        <h2>
          {section.title} <span>{section.accent}</span>
        </h2>
        <p>{section.desc}</p>
      </div>

      <div className="cards">
        {products.map((item, index) => (
          <ProductCard
            key={item.id}
            item={item}
            index={index}
            bookingLabel={section.bookingLink}
          />
        ))}
      </div>
    </motion.section>
  );
}
