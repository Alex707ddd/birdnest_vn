"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Realistic barn swallow SVG ───────────────────────────────────────────
// Traced from reference image: dark body/wings, white belly,
// rust-red throat/face, forked tail, short beak — classic barn swallow.
function SwallowSVG() {
  return (
    <svg
      viewBox="0 0 320 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.35))" }}
    >
      {/* ── Left wing (sweeps up-left from body) ── */}
      <path
        d="M155,90 C135,78 105,65 68,52 C40,43 12,42 4,47
           C22,53 58,65 92,76 C118,85 140,89 155,93 Z"
        fill="#1a1824"
      />

      {/* ── Right wing (sweeps up-right from body) ── */}
      <path
        d="M178,83 C202,67 238,50 272,38 C291,31 305,32 303,37
           C288,44 260,57 234,70 C212,80 193,84 178,87 Z"
        fill="#1a1824"
      />

      {/* ── Main body (dark, slightly tilted) ── */}
      <path
        d="M130,98 C132,80 148,72 168,72 C188,72 205,80 210,92
           C215,104 210,116 196,120 C178,125 148,120 136,112 Z"
        fill="#1a1824"
      />

      {/* ── White / cream belly patch ── */}
      <path
        d="M148,98 C150,86 160,81 172,82 C183,83 192,90 193,100
           C194,108 187,114 177,115 C163,116 147,108 148,98 Z"
        fill="#ede9e3"
      />

      {/* ── Rust-red throat / face ── */}
      <ellipse cx="198" cy="83" rx="16" ry="14"
               fill="#b83228" transform="rotate(-18 198 83)" />

      {/* ── Head (dark cap over red) ── */}
      <path
        d="M192,70 C198,62 210,60 218,65 C225,70 226,80 220,86
           C214,92 200,93 193,87 C186,81 187,73 192,70 Z"
        fill="#1a1824"
      />

      {/* ── Eye (white sclera + dark iris + catchlight) ── */}
      <circle cx="211" cy="72" r="4.5" fill="#fff" />
      <circle cx="211" cy="72" r="2.8" fill="#111" />
      <circle cx="210" cy="71" r="1.1" fill="white" />

      {/* ── Beak (short, pointed, right-facing) ── */}
      <path d="M222,71 L238,76 L222,81 Z" fill="#2e2a26" />
      <path d="M222,71 L236,74 L222,76 Z" fill="#3d3630" />

      {/* ── Forked tail — outer left fork (longer) ── */}
      <path
        d="M133,100 C120,112 98,130 74,152 C65,160 58,167 61,170
           C70,165 90,148 112,130 C128,118 136,108 138,101 Z"
        fill="#1a1824"
      />

      {/* ── Forked tail — inner right fork (shorter) ── */}
      <path
        d="M138,103 C132,118 124,136 118,156 C115,164 115,172 119,172
           C124,166 130,148 136,130 C141,116 142,107 140,102 Z"
        fill="#1a1824"
      />

      {/* ── Subtle blue iridescence on wing top edges ── */}
      <path
        d="M155,90 C135,78 105,65 68,52 C40,43 12,42 4,47
           C22,50 55,60 90,71 C116,80 140,87 155,90 Z"
        fill="rgba(80, 90, 140, 0.25)"
      />
      <path
        d="M178,83 C202,67 238,50 272,38 C291,31 305,32 303,37
           C288,42 260,55 234,68 C212,78 193,83 178,86 Z"
        fill="rgba(80, 90, 140, 0.25)"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────
export default function SwallowNestSeal() {
  const [strandCount, setStrandCount] = useState(0);
  const [isDissolving, setIsDissolving] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Nest building loop: 30-second cycle.
  // 1 strand every 4s → complete at 24s → rest 6s → dissolve → loop.
  useEffect(() => {
    if (reducedMotion) {
      setStrandCount(6);
      return;
    }
    const interval = setInterval(() => {
      setStrandCount((prev) => {
        if (prev < 6) return prev + 1;
        setIsDissolving(true);
        setTimeout(() => {
          setStrandCount(0);
          setIsDissolving(false);
        }, 1400);
        return 6;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="nest-seal-container static-seal">
        <svg viewBox="0 0 100 100" className="nest-seal-svg">
          <path d="M20,65 Q50,90 80,65" stroke="rgba(191,139,61,0.65)" strokeWidth="1.5" fill="none" />
          <path d="M15,58 Q50,88 85,58" stroke="rgba(191,139,61,0.5)" strokeWidth="1" fill="none" />
          <path d="M28,70 Q50,92 72,70" stroke="rgba(191,139,61,0.6)" strokeWidth="1.2" fill="none" />
          <path d="M10,50 Q50,95 90,50" stroke="rgba(191,139,61,0.35)" strokeWidth="1" fill="none" />
          <path d="M22,62 Q50,85 78,62" stroke="rgba(191,139,61,0.55)" strokeWidth="1.3" fill="none" />
          <path d="M35,75 Q50,93 65,75" stroke="rgba(191,139,61,0.7)" strokeWidth="1.6" fill="none" />
          <text x="50" y="42" textAnchor="middle" fill="rgba(191,139,61,0.85)"
                fontSize="9" letterSpacing="0.1em" fontFamily="var(--font-serif)">燕窩</text>
        </svg>
      </div>
    );
  }

  return (
    <>
      {/* ── Swallow flight overlay (fixed, full-viewport, pointer-events none) ── */}
      {/* Starts LARGE bottom-left, arcs to small top-right over 5.5 s.        */}
      {/* Repeats every ~30 s (5.5 s flight + 24.5 s pause).                   */}
      <motion.div
        className="swallow-glide"
        initial={{ x: "-28vw", y: "52vh", opacity: 0 }}
        animate={{
          x: ["-28vw", "10vw", "55vw", "82vw"],
          y: ["52vh",  "28vh",  "5vh", "-4vh"],
          scale: [1,    0.82,   0.38,   0.18],
          opacity: [0,  1,      1,      0],
        }}
        transition={{
          duration: 5.5,
          times: [0, 0.28, 0.78, 1],
          ease: [0.2, 0.8, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 24.5,
        }}
      >
        <SwallowSVG />
      </motion.div>

      {/* ── Nest-building seal (positioned top-right of hero) ── */}
      <div className="nest-seal-container">
        <div className={`nest-seal-wrapper ${isDissolving ? "dissolve" : ""}`}>
          <svg viewBox="0 0 100 100" className="nest-seal-svg">
            {strandCount >= 1 && (
              <motion.path d="M20,65 Q50,90 80,65"
                stroke="rgba(191,139,61,0.65)" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            {strandCount >= 2 && (
              <motion.path d="M15,58 Q50,88 85,58"
                stroke="rgba(191,139,61,0.5)" strokeWidth="1" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            {strandCount >= 3 && (
              <motion.path d="M28,70 Q50,92 72,70"
                stroke="rgba(191,139,61,0.6)" strokeWidth="1.2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            {strandCount >= 4 && (
              <motion.path d="M10,50 Q50,95 90,50"
                stroke="rgba(191,139,61,0.35)" strokeWidth="1" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            {strandCount >= 5 && (
              <motion.path d="M22,62 Q50,85 78,62"
                stroke="rgba(191,139,61,0.55)" strokeWidth="1.3" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            {strandCount >= 6 && (
              <motion.path d="M35,75 Q50,93 65,75"
                stroke="rgba(191,139,61,0.7)" strokeWidth="1.6" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }} />
            )}
            <AnimatePresence>
              {strandCount >= 4 && (
                <motion.text
                  x="50" y="42" textAnchor="middle"
                  fill="rgba(191,139,61,0.88)" fontSize="9.5"
                  letterSpacing="0.1em" fontFamily="var(--font-serif)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  燕窩
                </motion.text>
              )}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </>
  );
}
