"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Award, Calendar, ShieldCheck, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustBadges({ evidence }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Verification assets copied from the data directory
  const verificationImages = [
    {
      src: "/assets/sgs_hk_lab_1.jpeg",
      title: evidence.sgs.title + " (Page 1)"
    },
    {
      src: "/assets/sgs_hk_lab_2.jpeg",
      title: evidence.sgs.title + " (Page 2)"
    },
    {
      src: "/assets/vietnam_cert.jpg",
      title: evidence.haccp.title
    }
  ];

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % verificationImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + verificationImages.length) % verificationImages.length);
  };

  return (
    <section id="evidence" className="section trust-section">
      <div className="title-wrap">
        <motion.span
          className="kicker"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {evidence.subtitle}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {evidence.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {evidence.desc}
        </motion.p>
      </div>

      <div className="evidence-grid">
        {/* Card 1: SGS Lab Report */}
        <motion.div
          className="evidence-card liquid-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
          whileHover={{ y: -4 }}
          onClick={() => openLightbox(0)}
        >
          <div className="card-badge">
            <ShieldCheck size={14} />
            <span>SGS VERIFIED</span>
          </div>

          <div className="evidence-card-header">
            <FileText className="evidence-icon" size={28} />
            <div>
              <h3>{evidence.sgs.title}</h3>
              <p className="evidence-date">
                <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                {evidence.sgs.dateLabel}: {evidence.sgs.dateValue}
              </p>
            </div>
          </div>

          <div className="evidence-details">
            <div className="detail-row">
              <span className="detail-label">{evidence.sgs.sampleLabel}</span>
              <span className="detail-val highlight">{evidence.sgs.sampleValue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{evidence.sgs.originLabel}</span>
              <span className="detail-val">{evidence.sgs.originValue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{evidence.sgs.destLabel}</span>
              <span className="detail-val">{evidence.sgs.destValue}</span>
            </div>
            <div className="detail-row border-t-glow">
              <span className="detail-label">{evidence.sgs.itemLabel}</span>
              <span className="detail-val text-gold">{evidence.sgs.itemValue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{evidence.sgs.resultLabel}</span>
              <span className="detail-val badge-gold">{evidence.sgs.resultValue}</span>
            </div>
          </div>

          <p className="evidence-note">{evidence.sgs.note}</p>

          <div className="action-hint proof-action">
            <ZoomIn size={14} />
            <span>{evidence.sgs.viewReport}</span>
          </div>
        </motion.div>

        {/* Card 2: HACCP Safety Certificate */}
        <motion.div
          className="evidence-card liquid-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.1 }}
          whileHover={{ y: -4 }}
          onClick={() => openLightbox(2)}
        >
          <div className="card-badge">
            <Award size={14} />
            <span>HACCP COMPLIANT</span>
          </div>

          <div className="evidence-card-header">
            <Award className="evidence-icon" size={28} />
            <div>
              <h3>{evidence.haccp.title}</h3>
              <p className="evidence-date">
                <ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                {evidence.haccp.facilityValue}
              </p>
            </div>
          </div>

          <div className="evidence-details">
            <div className="detail-row">
              <span className="detail-label">{evidence.haccp.facilityLabel}</span>
              <span className="detail-val">{evidence.haccp.facilityValue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{evidence.haccp.scopeLabel}</span>
              <span className="detail-val font-medium">{evidence.haccp.scopeValue}</span>
            </div>
          </div>

          <p className="evidence-note">{evidence.haccp.desc}</p>

          <div className="action-hint proof-action">
            <ZoomIn size={14} />
            <span>{evidence.haccp.viewCert}</span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label={evidence.close}
            >
              <X size={26} />
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-nav prev"
                onClick={prevImage}
                aria-label={evidence.prev}
              >
                <ChevronLeft size={36} />
              </button>

              <div className="lightbox-image-container">
                <img
                  src={verificationImages[activeImageIndex].src}
                  alt={verificationImages[activeImageIndex].title}
                  className="lightbox-image"
                />
                <div className="lightbox-title-bar">
                  <h4>{verificationImages[activeImageIndex].title}</h4>
                  <small>
                    {activeImageIndex + 1} / {verificationImages.length}
                  </small>
                </div>
              </div>

              <button
                className="lightbox-nav next"
                onClick={nextImage}
                aria-label={evidence.next}
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
