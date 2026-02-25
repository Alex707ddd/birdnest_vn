"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ lang, onLangChange, labels, languages }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`top-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="brand" onClick={closeMenu}>
        VN<span>.</span>Birdnest
      </a>

      <button
        type="button"
        className="menu-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>
          {labels.home}
        </a>
        <a href="#about" onClick={closeMenu}>
          {labels.craft}
        </a>
        <a href="#products" onClick={closeMenu}>
          {labels.collection}
        </a>
        <a href="#ritual" onClick={closeMenu}>
          {labels.ritual}
        </a>
      </div>

      <div className="lang-switch">
        {languages.map((item, index) => (
          <div key={item.code} className="lang-item">
            <button
              type="button"
              className={lang === item.code ? "active" : ""}
              onClick={() => onLangChange(item.code)}
            >
              {item.label}
            </button>
            {index < languages.length - 1 ? <span className="lang-divider">|</span> : null}
          </div>
        ))}
      </div>
    </nav>
  );
}
