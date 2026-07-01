"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

const socialIcons = [Instagram, Facebook, MessageCircle];

export default function SiteFooter({ section }) {
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 90, damping: 19 }}
    >
      <div className="section footer-grid">
        <div className="footer-brand">
          <a href="#hero" className="brand">
            VN<span>.</span>Birdnest
          </a>
          <p>{section.about}</p>

          <div className="footer-socials">
            {socialIcons.map((Icon, index) => (
              <a key={index} href="#" aria-label="social-link">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>{section.contactTitle}</h4>
          <ul>
            <li>{section.preOrderOnly}</li>
            <li>
              <MapPin size={15} />
              {section.shipping}
            </li>
            <li>
              <Mail size={15} />
              {section.email}
            </li>
          </ul>
        </div>

        <div>
          <h4>{section.certTitle}</h4>
          <ul>
            {section.certItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section footer-bottom">
        <small>{section.legal}</small>
        <div>
          {section.links.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
