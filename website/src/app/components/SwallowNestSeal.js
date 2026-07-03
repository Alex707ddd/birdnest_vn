"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwallowNestSeal() {
  const [strandCount, setStrandCount] = useState(0);
  const [isDissolving, setIsDissolving] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Nest building loop: 30-second loop.
  // Add 1 strand every 4 seconds. Reaches 6 strands (completed) at 24s.
  // Rests for 6s, then dissolves and loops.
  useEffect(() => {
    if (reducedMotion) {
      setStrandCount(6);
      return;
    }

    const interval = setInterval(() => {
      setStrandCount((prev) => {
        if (prev < 6) {
          return prev + 1;
        } else {
          setIsDissolving(true);
          setTimeout(() => {
            setStrandCount(0);
            setIsDissolving(false);
          }, 1200); // fade out transition
          return 6;
        }
      });
    }, 4000); // 4 seconds per strand (24s to complete + 6s rest = 30s loop)

    return () => clearInterval(interval);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="nest-seal-container static-seal">
        <svg viewBox="0 0 100 100" className="nest-seal-svg">
          {/* Completed Nest Mark rendered statically */}
          <path d="M20,65 Q50,90 80,65" stroke="rgba(191, 139, 61, 0.65)" strokeWidth="1.5" fill="none" />
          <path d="M15,58 Q50,88 85,58" stroke="rgba(191, 139, 61, 0.5)" strokeWidth="1" fill="none" />
          <path d="M28,70 Q50,92 72,70" stroke="rgba(191, 139, 61, 0.6)" strokeWidth="1.2" fill="none" />
          <path d="M10,50 Q50,95 90,50" stroke="rgba(191, 139, 61, 0.35)" strokeWidth="1" fill="none" />
          <path d="M22,62 Q50,85 78,62" stroke="rgba(191, 139, 61, 0.55)" strokeWidth="1.3" fill="none" />
          <path d="M35,75 Q50,93 65,75" stroke="rgba(191, 139, 61, 0.7)" strokeWidth="1.6" fill="none" />
          {/* Static text monogram */}
          <text x="50" y="42" textAnchor="middle" fill="rgba(191, 139, 61, 0.75)" fontSize="9" letterSpacing="0.1em" fontFamily="var(--font-serif)">燕窩</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="nest-seal-container">
      {/* Swallow Flight: Glides across on mount once */}
      <motion.div
        className="swallow-glide"
        initial={{ x: "-100vw", y: "80vh", scale: 0.6, opacity: 0 }}
        animate={{
          x: "110vw",
          y: "-20vh",
          scale: [0.6, 1.2, 0.8],
          opacity: [0, 0.85, 0.85, 0]
        }}
        transition={{
          duration: 2.4,
          ease: [0.25, 1, 0.5, 1]
        }}
      >
        <svg viewBox="0 0 64 64" className="swallow-svg">
          {/* Elegant swallow silhouette */}
          <path
            d="M32,4 C30,16 12,24 2,28 C16,30 26,34 30,44 C32,34 42,30 56,28 C46,24 34,16 32,4 Z M30,44 C28,52 20,58 12,60 C24,58 28,52 30,44 Z M32,44 C34,52 42,58 50,60 C38,58 34,52 32,44 Z"
            fill="rgba(191, 139, 61, 0.75)"
          />
        </svg>
      </motion.div>

      {/* Nest Building Seal */}
      <div className={`nest-seal-wrapper ${isDissolving ? "dissolve" : ""}`}>
        <svg viewBox="0 0 100 100" className="nest-seal-svg">
          {/* Strand 1: Base foundation */}
          {strandCount >= 1 && (
            <motion.path
              d="M20,65 Q50,90 80,65"
              stroke="rgba(191, 139, 61, 0.65)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Strand 2: Inner support */}
          {strandCount >= 2 && (
            <motion.path
              d="M15,58 Q50,88 85,58"
              stroke="rgba(191, 139, 61, 0.5)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Strand 3: Center thickness */}
          {strandCount >= 3 && (
            <motion.path
              d="M28,70 Q50,92 72,70"
              stroke="rgba(191, 139, 61, 0.6)"
              strokeWidth="1.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Strand 4: Outer envelope */}
          {strandCount >= 4 && (
            <motion.path
              d="M10,50 Q50,95 90,50"
              stroke="rgba(191, 139, 61, 0.35)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Strand 5: High rim */}
          {strandCount >= 5 && (
            <motion.path
              d="M22,62 Q50,85 78,62"
              stroke="rgba(191, 139, 61, 0.55)"
              strokeWidth="1.3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Strand 6: Final reinforcement */}
          {strandCount >= 6 && (
            <motion.path
              d="M35,75 Q50,93 65,75"
              stroke="rgba(191, 139, 61, 0.7)"
              strokeWidth="1.6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* Core Brand Monogram (Fades in slowly as nest completes) */}
          <AnimatePresence>
            {strandCount >= 4 && (
              <motion.text
                x="50"
                y="42"
                textAnchor="middle"
                fill="rgba(191, 139, 61, 0.85)"
                fontSize="9.5"
                letterSpacing="0.1em"
                fontFamily="var(--font-serif)"
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
  );
}
