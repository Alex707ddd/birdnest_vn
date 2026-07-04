"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ─── Constants ───────────────────────────────────────────────────────────────
// Sprite sheet: 6 frames × 240px wide × 180px tall = 1440×180 total
const SPRITE_W = 240;  // one frame width
const SPRITE_H = 180;  // frame height
const FRAME_COUNT = 6; // total frames in sprite (f1,f2,f3,f3,f2,f1)

// ─── Main Component ──────────────────────────────────────────────────────────
export default function SwallowNestSeal() {
  const [phase, setPhase] = useState("flying"); // "flying" | "perched"
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setPhase("perched");
      return;
    }
    // After fly-in animation (4.8s), switch to perched
    const t = setTimeout(() => setPhase("perched"), 4800);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  if (reducedMotion) return <PerchedState />;

  return (
    <>
      <AnimatePresence>
        {phase === "flying" && <FlyingState key="flying" />}
      </AnimatePresence>
      <AnimatePresence>
        {phase === "perched" && <PerchedState key="perched" />}
      </AnimatePresence>
    </>
  );
}

// ─── Flying State ────────────────────────────────────────────────────────────
// Framer Motion moves the entire element across the screen.
// Inside, a CSS div with background-image + steps() animates the wing beat.
function FlyingState() {
  return (
    <motion.div
      className="swallow-flight-layer"
      // Fly from bottom-left to top-right corner
      initial={{
        x: "-5vw",
        y: "60vh",
        scale: 1.0,
        opacity: 0,
        rotate: -8,
      }}
      animate={{
        x: ["0vw", "30vw", "65vw", "calc(100vw - 290px)"],
        y: ["55vh",  "28vh",  "6vh",  "68px"],
        scale: [1.0,   0.72,  0.32,  0.18],
        opacity: [0,      1,    1,      1],
        rotate: [-8, -4, 2, 0],
      }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{
        duration: 4.8,
        times: [0, 0.28, 0.70, 1],
        ease: [0.22, 0.92, 0.36, 1],
      }}
      style={{ width: SPRITE_W, height: SPRITE_H }}
    >
      {/* CSS sprite animation — wings flap independently of position */}
      <div className="swallow-sprite-anim" />
    </motion.div>
  );
}

// ─── Perched State ────────────────────────────────────────────────────────────
// Bird settles into top-right corner, nest photo fades in below.
function PerchedState() {
  return (
    <motion.div
      className="nest-seal-container"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "backOut" }}
    >
      {/* Perched swallow — static frame 1 (wings slightly raised) */}
      <div className="perched-swallow-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sw_f1.png"
          alt="漢泉燕窩 — barn swallow"
          className="perched-swallow-img"
        />
      </div>

      {/* Real nest photo — fades in 0.8s after bird lands */}
      <motion.div
        className="nest-photo-wrap"
        initial={{ opacity: 0, y: 12, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/nest_real.png"
          alt="漢泉燕窩 — edible bird's nest"
          className="nest-photo-img"
        />
      </motion.div>
    </motion.div>
  );
}
