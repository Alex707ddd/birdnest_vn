"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// ─── Elegant, refined swallow SVG ────────────────────────────────────────────
// More naturalistic than a cartoon: thinner, sleeker wings, subtle feather
// detail lines, proper silhouette proportions.
function SwallowPerched({ flipped = false }) {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "100%",
        transform: flipped ? "scaleX(-1)" : "none",
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.45))",
      }}
    >
      {/* ── Left wing (spread) */}
      <path
        d="M148,87 C124,73 88,58 52,44 C28,35 8,34 3,40
           C18,47 52,60 84,73 C110,83 132,87 148,90 Z"
        fill="#1a1722"
      />
      {/* subtle blue iridescence on left wing leading edge */}
      <path
        d="M148,87 C124,73 88,58 52,44 C28,35 8,34 3,40
           C16,45 48,57 80,70 C108,81 132,87 148,89 Z"
        fill="rgba(72,80,148,0.22)"
      />
      {/* feather detail lines left wing */}
      <path d="M80,72 C90,68 120,76 148,88" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" fill="none"/>
      <path d="M55,57 C70,56 110,68 148,87" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none"/>

      {/* ── Right wing (spread) */}
      <path
        d="M168,80 C192,65 228,48 260,36 C275,30 282,31 280,36
           C268,43 240,57 216,70 C196,80 178,83 168,86 Z"
        fill="#1a1722"
      />
      {/* blue iridescence right wing */}
      <path
        d="M168,80 C192,65 228,48 260,36 C275,30 282,31 280,36
           C268,42 240,56 216,69 C196,79 178,83 168,85 Z"
        fill="rgba(72,80,148,0.22)"
      />
      {/* feather detail lines right wing */}
      <path d="M216,70 C205,72 182,80 168,85" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" fill="none"/>
      <path d="M245,55 C228,58 195,72 168,83" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none"/>

      {/* ── Main body */}
      <path
        d="M130,96 C133,79 148,70 165,70 C182,70 198,78 203,91
           C208,104 202,117 188,122 C170,128 138,122 132,110 Z"
        fill="#1a1722"
      />

      {/* ── Cream / white belly */}
      <path
        d="M147,99 C150,88 158,83 168,84 C178,85 186,92 186,102
           C186,111 179,117 170,117 C157,118 145,109 147,99 Z"
        fill="#ede6de"
      />
      {/* belly shading */}
      <path
        d="M156,99 C157,93 163,90 168,91 C174,92 178,97 177,104"
        stroke="rgba(180,165,145,0.4)" strokeWidth="1" fill="none"
      />

      {/* ── Rust-red throat / cheek */}
      <ellipse cx="196" cy="82" rx="17" ry="14"
               fill="#a42c22" transform="rotate(-20 196 82)" />
      {/* throat highlight */}
      <ellipse cx="193" cy="79" rx="7" ry="5"
               fill="rgba(200,80,60,0.35)" transform="rotate(-20 193 79)" />

      {/* ── Head (dark cap) */}
      <path
        d="M189,68 C195,60 209,58 217,64 C224,70 224,81 218,87
           C211,93 197,93 190,87 C183,81 184,72 189,68 Z"
        fill="#161420"
      />

      {/* ── Eye */}
      <circle cx="210" cy="71" r="5" fill="white" />
      <circle cx="210" cy="71" r="3.2" fill="#0d0b10" />
      <circle cx="208.5" cy="69.8" r="1.2" fill="rgba(255,255,255,0.85)" />

      {/* ── Beak (slim, pointed) */}
      <path d="M220,69 L236,73 L220,78 Z" fill="#26221e" />
      <path d="M220,69 L234,72 L220,74 Z" fill="#3a342e" />

      {/* ── Forked tail — outer left (long, elegant) */}
      <path
        d="M132,103 C118,116 96,136 70,160 C61,169 54,174 57,176
           C66,170 88,150 110,132 C126,119 134,110 137,104 Z"
        fill="#1a1722"
      />
      {/* ── Forked tail — inner right */}
      <path
        d="M137,106 C131,121 122,140 115,161 C112,170 113,177 117,177
           C122,170 129,151 135,132 C140,118 141,109 139,104 Z"
        fill="#1a1722"
      />

      {/* ── Very subtle wing gap / body boundary */}
      <path d="M148,89 C155,86 162,83 168,83" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

// Swallow with wings UP (mid-flap pose for the wing-beat animation)
function SwallowFlapUp() {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.45))" }}
    >
      {/* Wings raised upward */}
      <path
        d="M148,90 C128,70 92,50 56,34 C30,23 10,22 5,28
           C20,36 56,52 88,67 C114,78 136,86 148,92 Z"
        fill="#1a1722"
      />
      <path
        d="M168,83 C190,62 226,44 258,30 C274,23 282,24 280,30
           C267,38 238,54 214,68 C192,79 174,85 168,88 Z"
        fill="#1a1722"
      />
      {/* body same */}
      <path d="M130,96 C133,79 148,70 165,70 C182,70 198,78 203,91 C208,104 202,117 188,122 C170,128 138,122 132,110 Z" fill="#1a1722"/>
      <path d="M147,99 C150,88 158,83 168,84 C178,85 186,92 186,102 C186,111 179,117 170,117 C157,118 145,109 147,99 Z" fill="#ede6de"/>
      <ellipse cx="196" cy="82" rx="17" ry="14" fill="#a42c22" transform="rotate(-20 196 82)" />
      <path d="M189,68 C195,60 209,58 217,64 C224,70 224,81 218,87 C211,93 197,93 190,87 C183,81 184,72 189,68 Z" fill="#161420"/>
      <circle cx="210" cy="71" r="5" fill="white" />
      <circle cx="210" cy="71" r="3.2" fill="#0d0b10" />
      <circle cx="208.5" cy="69.8" r="1.2" fill="rgba(255,255,255,0.85)" />
      <path d="M220,69 L236,73 L220,78 Z" fill="#26221e" />
      <path d="M132,103 C118,116 96,136 70,160 C61,169 54,174 57,176 C66,170 88,150 110,132 C126,119 134,110 137,104 Z" fill="#1a1722"/>
      <path d="M137,106 C131,121 122,140 115,161 C112,170 113,177 117,177 C122,170 129,151 135,132 C140,118 141,109 139,104 Z" fill="#1a1722"/>
    </svg>
  );
}

// ─── Nest strands: pure white, ultra-thin, gold-outlined, grow from bottom ──
// Each strand is a bezier curve. We animate pathLength 0→1 with a delay.
const NEST_STRANDS = [
  // Bottom wide base (first to appear)
  { d: "M28,95 Q60,110 92,95",  sw: 0.9,  delay: 0 },
  { d: "M22,88 Q60,106 98,88",  sw: 0.7,  delay: 5 },
  { d: "M32,100 Q60,112 88,100",sw: 1.0,  delay: 10 },
  { d: "M18,82 Q60,104 102,82", sw: 0.6,  delay: 15 },
  { d: "M36,104 Q60,114 84,104",sw: 0.8,  delay: 20 },
  // Middle strands
  { d: "M30,78 Q60,96 90,78",   sw: 0.6,  delay: 25 },
  { d: "M40,108 Q60,116 80,108",sw: 0.7,  delay: 30 },
  { d: "M26,73 Q60,92 94,73",   sw: 0.5,  delay: 35 },
  // Upper rim
  { d: "M42,112 Q60,118 78,112",sw: 0.8,  delay: 40 },
  { d: "M34,68 Q60,88 86,68",   sw: 0.45, delay: 45 },
  { d: "M44,115 Q60,120 76,115",sw: 0.7,  delay: 50 },
  { d: "M38,63 Q60,84 82,63",   sw: 0.4,  delay: 55 },
];

function NestStrand({ d, sw, delay, started }) {
  return started ? (
    <motion.path
      d={d}
      stroke="white"
      strokeWidth={sw}
      fill="none"
      strokeLinecap="round"
      filter="url(#goldGlow)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
    />
  ) : null;
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function SwallowNestSeal() {
  const [phase, setPhase] = useState("flying"); // "flying" | "flapping" | "landing" | "perched"
  const [nestStarted, setNestStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showFlapFrame, setShowFlapFrame] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  // Sequence: fly → mid-flight wing flap → land → perch → nest builds
  useEffect(() => {
    if (reducedMotion) {
      setPhase("perched");
      setNestStarted(true);
      return;
    }
    // Wing flap at t=2.2s (mid-flight)
    const flapTimer = setTimeout(() => {
      setShowFlapFrame(true);
      setTimeout(() => setShowFlapFrame(false), 350);
    }, 2200);

    // Landing at t=5s
    const landTimer = setTimeout(() => setPhase("landing"), 5000);
    // Perched at t=5.8s
    const perchTimer = setTimeout(() => {
      setPhase("perched");
      // Nest starts building after 0.8s grace period
      setTimeout(() => setNestStarted(true), 800);
    }, 5800);

    return () => {
      clearTimeout(flapTimer);
      clearTimeout(landTimer);
      clearTimeout(perchTimer);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="nest-seal-container">
        <div className="nest-seal-inner">
          <div className="perched-swallow-wrap">
            <SwallowPerched />
          </div>
          <svg viewBox="0 0 120 130" className="nest-build-svg">
            <defs>
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feFlood floodColor="rgba(191,139,61,0.7)" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {NEST_STRANDS.map((s, i) => (
              <path key={i} d={s.d} stroke="white" strokeWidth={s.sw} fill="none"
                    strokeLinecap="round" filter="url(#goldGlow)" opacity="1"/>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── PHASE: FLYING — swallow crosses screen ── */}
      <AnimatePresence>
        {phase === "flying" && (
          <motion.div
            key="swallow-flight"
            className="swallow-flight-layer"
            // Start: large at bottom-left; End: small at top-right (the seal position)
            initial={{ x: "-32vw", y: "55vh", scale: 1, opacity: 0 }}
            animate={{
              x: ["−32vw", "8vw",  "52vw", "calc(100vw - 220px)"],
              y: ["55vh",  "32vh", "10vh", "80px"],
              scale: [1,    0.78,  0.38,  0.22],
              opacity: [0,   1,     1,     1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 5.0,
              times: [0, 0.28, 0.72, 1],
              ease: [0.18, 0.88, 0.42, 1],
            }}
          >
            {showFlapFrame ? <SwallowFlapUp /> : <SwallowPerched />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE: PERCHED + NEST — stays in corner ── */}
      <AnimatePresence>
        {(phase === "perched" || phase === "landing") && (
          <motion.div
            key="swallow-perched"
            className="nest-seal-container"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <div className="nest-seal-inner">
              {/* Perched swallow on top of the nest */}
              <div className="perched-swallow-wrap">
                <SwallowPerched />
              </div>

              {/* Nest strands grow below the swallow */}
              <svg viewBox="0 0 120 130" className="nest-build-svg">
                <defs>
                  <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="0.9" result="blur" />
                    <feFlood floodColor="rgba(191,139,61,0.65)" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {NEST_STRANDS.map((s, i) => (
                  <NestStrand key={i} {...s} started={nestStarted} />
                ))}
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
