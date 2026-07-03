"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ─── Realistic Edible Bird's Nest (燕巢) SVG ────────────────────────────────
// Hundreds of bezier strands in layered groups, mimicking true swiftlet-saliva
// fiber texture: thin translucent threads crossing at random angles, thicker
// rim coils, and a hollow cup shape. Gold glow filter applied.
//
// ViewBox: 0 0 200 160  (wider than tall — nest is wider at top/rim)
// The nest cup opens upward. Bird sits above at top-center.
//
// KEY DESIGN DECISIONS (at small display size ~168×134px):
//   • All strokeWidths scaled UP: rim 2.5–4px, mid 1.2–2px, fine 0.7–1.2px
//   • All opacities raised: rim 0.9–1.0, mid 0.7–0.9, fine 0.5–0.7
//   • Gold glow stdDeviation increased to 1.8 so it blooms visibly at small scale
//   • More strands in critical areas (rim wraps, diagonal weaves)

const NEST_STRANDS = [
  // ══════════════════════════════════════════════════════════════
  // LAYER 0: HEAVY RIM COILS — the outermost thick boundary ring
  // ══════════════════════════════════════════════════════════════
  // Top rim ellipse — primary closed ring
  { d: "M 18,74  C 30,52  78,42  100,42  C 122,42  170,52  182,74  C 170,86  122,92  100,92  C 78,92  30,86  18,74 Z",  sw: 3.8, op: 1.0,  delay: 0.00 },
  { d: "M 20,75  C 33,54  79,44  100,44  C 121,44  167,54  180,75  C 167,87  121,93  100,93  C 79,93  33,87  20,75 Z",  sw: 2.6, op: 0.85, delay: 0.04 },
  { d: "M 16,73  C 28,50  77,40  100,40  C 123,40  172,50  184,73  C 172,85  123,91  100,91  C 77,91  28,85  16,73 Z",  sw: 1.6, op: 0.6,  delay: 0.08 },
  // Bottom base arc — wide, heavy
  { d: "M 38,100 C 50,118  78,127  100,127 C 122,127  150,118  162,100", sw: 3.5, op: 1.0,  delay: 0.00 },
  { d: "M 42,104 C 54,121  80,130  100,130 C 120,130  146,121  158,104", sw: 2.2, op: 0.85, delay: 0.05 },
  { d: "M 34,97  C 46,115  76,124  100,124 C 124,124  154,115  166,97",  sw: 1.4, op: 0.6,  delay: 0.09 },
  // Left wall strokes
  { d: "M 18,74  C 24,84  30,93  38,100",  sw: 3.5, op: 1.0,  delay: 0.00 },
  { d: "M 22,77  C 27,87  33,96  40,103",  sw: 2.2, op: 0.82, delay: 0.07 },
  { d: "M 26,79  C 30,89  36,97  44,105",  sw: 1.3, op: 0.55, delay: 0.12 },
  // Right wall strokes
  { d: "M 182,74 C 176,84  170,93  162,100", sw: 3.5, op: 1.0,  delay: 0.00 },
  { d: "M 178,77 C 173,87  167,96  160,103", sw: 2.2, op: 0.82, delay: 0.07 },
  { d: "M 174,79 C 170,89  164,97  156,105", sw: 1.3, op: 0.55, delay: 0.12 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 1: SECONDARY RIM WRAPS — extra coils just inside rim
  // ══════════════════════════════════════════════════════════════
  { d: "M 15,71  C 27,49  76,38  100,38  C 124,38  173,49  185,71", sw: 2.0, op: 0.8,  delay: 0.16 },
  { d: "M 19,77  C 31,56  79,46  100,46  C 121,46  169,56  181,77", sw: 1.6, op: 0.7,  delay: 0.20 },
  { d: "M 13,69  C 25,47  75,36  100,36  C 125,36  175,47  187,69", sw: 1.2, op: 0.5,  delay: 0.24 },
  { d: "M 40,105 C 52,124  78,133  100,133 C 122,133  148,124  160,105", sw: 2.0, op: 0.8,  delay: 0.16 },
  { d: "M 44,109 C 56,128  80,137  100,137 C 120,137  144,128  156,109", sw: 1.4, op: 0.65, delay: 0.22 },
  { d: "M 47,113 C 59,132  82,141  100,141 C 118,141  141,132  153,113", sw: 0.9, op: 0.45, delay: 0.28 },
  // Extra rim wraps — horizontal cross-rings inside cup walls
  { d: "M 28,80  C 44,68  76,64  100,64  C 124,64  156,68  172,80",  sw: 1.4, op: 0.7,  delay: 0.32 },
  { d: "M 30,84  C 46,72  78,68  100,68  C 122,68  154,72  170,84",  sw: 1.1, op: 0.6,  delay: 0.36 },
  { d: "M 32,87  C 48,75  79,71  100,71  C 121,71  152,75  168,87",  sw: 0.9, op: 0.5,  delay: 0.40 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 2: HORIZONTAL WEFT FIBERS — the main body weave
  // ══════════════════════════════════════════════════════════════
  { d: "M 36,82  C 53,77  76,75  100,75  C 124,75  147,77  164,82",  sw: 1.5, op: 0.82, delay: 0.45 },
  { d: "M 34,85  C 51,80  75,78  100,78  C 125,78  149,80  166,85",  sw: 1.3, op: 0.76, delay: 0.49 },
  { d: "M 32,88  C 50,83  75,81  100,81  C 125,81  150,83  168,88",  sw: 1.4, op: 0.80, delay: 0.53 },
  { d: "M 34,91  C 51,86  76,84  100,84  C 124,84  149,86  166,91",  sw: 1.3, op: 0.76, delay: 0.57 },
  { d: "M 36,94  C 52,89  77,87  100,87  C 123,87  148,89  164,94",  sw: 1.4, op: 0.80, delay: 0.61 },
  { d: "M 38,97  C 54,92  78,90  100,90  C 122,90  146,92  162,97",  sw: 1.5, op: 0.82, delay: 0.65 },
  { d: "M 40,100 C 56,95  79,93  100,93  C 121,93  144,95  160,100", sw: 1.6, op: 0.84, delay: 0.69 },
  { d: "M 43,103 C 59,98  80,96  100,96  C 120,96  141,98  157,103", sw: 1.7, op: 0.85, delay: 0.73 },
  { d: "M 46,106 C 61,102  81,100  100,100 C 119,100  139,102  154,106", sw: 1.8, op: 0.87, delay: 0.77 },
  { d: "M 50,110 C 64,106  82,104  100,104 C 118,104  136,106  150,110", sw: 1.9, op: 0.88, delay: 0.81 },
  { d: "M 54,114 C 67,111  83,109  100,109 C 117,109  133,111  146,114", sw: 2.0, op: 0.90, delay: 0.85 },
  { d: "M 59,118 C 71,115  85,113  100,113 C 115,113  129,115  141,118", sw: 2.0, op: 0.90, delay: 0.89 },
  { d: "M 65,122 C 76,119  87,117  100,117 C 113,117  124,119  135,122", sw: 2.0, op: 0.90, delay: 0.93 },
  { d: "M 72,126 C 81,123  89,121  100,121 C 111,121  119,123  128,126", sw: 1.8, op: 0.85, delay: 0.97 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 3: NW→SE DIAGONAL FIBERS
  // ══════════════════════════════════════════════════════════════
  { d: "M 28,76  C 48,84  68,98  86,114",  sw: 1.1, op: 0.75, delay: 1.05 },
  { d: "M 35,73  C 55,82  76,96  94,114",  sw: 1.0, op: 0.70, delay: 1.09 },
  { d: "M 43,70  C 62,79  82,93  100,113", sw: 1.1, op: 0.75, delay: 1.13 },
  { d: "M 52,69  C 70,78  91,92  109,112", sw: 1.0, op: 0.70, delay: 1.17 },
  { d: "M 62,68  C 78,77  98,91  116,111", sw: 0.9, op: 0.65, delay: 1.21 },
  { d: "M 74,67  C 88,76  106,89  122,109", sw: 0.9, op: 0.65, delay: 1.25 },
  { d: "M 88,67  C 100,76  116,88  130,107", sw: 0.8, op: 0.60, delay: 1.29 },
  { d: "M 22,80  C 40,88  62,102  80,118", sw: 1.2, op: 0.78, delay: 1.33 },
  { d: "M 24,86  C 42,94  63,107  79,122", sw: 1.0, op: 0.70, delay: 1.37 },
  { d: "M 26,92  C 44,100  64,112  80,126", sw: 0.9, op: 0.65, delay: 1.41 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 3b: NE→SW DIAGONAL FIBERS
  // ══════════════════════════════════════════════════════════════
  { d: "M 172,76  C 152,84  132,98  114,114", sw: 1.1, op: 0.75, delay: 1.45 },
  { d: "M 165,73  C 145,82  124,96  106,114", sw: 1.0, op: 0.70, delay: 1.49 },
  { d: "M 157,70  C 138,79  118,93  100,113", sw: 1.1, op: 0.75, delay: 1.53 },
  { d: "M 148,69  C 130,78  109,92   91,112", sw: 1.0, op: 0.70, delay: 1.57 },
  { d: "M 138,68  C 122,77  102,91   84,111", sw: 0.9, op: 0.65, delay: 1.61 },
  { d: "M 126,67  C 112,76   94,89   78,109", sw: 0.9, op: 0.65, delay: 1.65 },
  { d: "M 178,80  C 160,88  138,102  120,118", sw: 1.2, op: 0.78, delay: 1.69 },
  { d: "M 176,86  C 158,94  137,107  121,122", sw: 1.0, op: 0.70, delay: 1.73 },
  { d: "M 174,92  C 156,100  136,112  120,126", sw: 0.9, op: 0.65, delay: 1.77 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 4: FINE CROSSING INNER THREADS (main weave body)
  // ══════════════════════════════════════════════════════════════
  { d: "M 54,83  C 70,78  88,80  107,77",  sw: 0.9, op: 0.72, delay: 1.85 },
  { d: "M 58,86  C 74,81  92,83  112,80",  sw: 0.8, op: 0.68, delay: 1.88 },
  { d: "M 63,89  C 78,85  96,87  115,84",  sw: 0.9, op: 0.72, delay: 1.91 },
  { d: "M 68,92  C 82,88  100,89  119,86", sw: 0.8, op: 0.68, delay: 1.94 },
  { d: "M 73,95  C 86,91  103,92  122,89", sw: 0.9, op: 0.72, delay: 1.97 },
  { d: "M 78,98  C 91,95  108,95  126,92", sw: 0.8, op: 0.68, delay: 2.00 },
  { d: "M 83,101 C 96,98  113,98  130,95", sw: 0.9, op: 0.72, delay: 2.03 },
  { d: "M 54,90  C 70,86  89,88  108,85",  sw: 0.9, op: 0.72, delay: 2.06 },
  { d: "M 57,94  C 73,91  93,92  112,89",  sw: 0.8, op: 0.68, delay: 2.09 },
  { d: "M 61,98  C 76,95  96,96  115,93",  sw: 0.9, op: 0.72, delay: 2.12 },
  { d: "M 65,102 C 80,99  100,100  118,97", sw: 0.8, op: 0.68, delay: 2.15 },
  { d: "M 69,106 C 83,103  102,104  120,101", sw: 0.8, op: 0.65, delay: 2.18 },
  // Mirror right-to-left
  { d: "M 146,83 C 130,78  112,80   93,77",  sw: 0.9, op: 0.72, delay: 2.21 },
  { d: "M 142,86 C 126,81  108,83   88,80",  sw: 0.8, op: 0.68, delay: 2.24 },
  { d: "M 137,89 C 122,85  104,87   85,84",  sw: 0.9, op: 0.72, delay: 2.27 },
  { d: "M 132,92 C 118,88  100,89   81,86",  sw: 0.8, op: 0.68, delay: 2.30 },
  { d: "M 127,95 C 114,91   97,92   78,89",  sw: 0.9, op: 0.72, delay: 2.33 },
  { d: "M 146,90 C 130,86  111,88   92,85",  sw: 0.9, op: 0.72, delay: 2.36 },
  { d: "M 143,94 C 127,91  107,92   88,89",  sw: 0.8, op: 0.68, delay: 2.39 },
  { d: "M 139,98 C 124,95  104,96   85,93",  sw: 0.9, op: 0.72, delay: 2.42 },
  { d: "M 135,102 C 120,99  100,100   82,97", sw: 0.8, op: 0.68, delay: 2.45 },
  { d: "M 131,106 C 117,103   98,104   80,101", sw: 0.8, op: 0.65, delay: 2.48 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 5: SURFACE SHIMMER — slightly raised fine threads on rim
  // ══════════════════════════════════════════════════════════════
  { d: "M 44,78  C 60,73  80,72  100,72",   sw: 0.7, op: 0.80, delay: 2.55 },
  { d: "M 46,81  C 62,76  81,75  100,75",   sw: 0.6, op: 0.75, delay: 2.58 },
  { d: "M 48,84  C 63,79  82,78  100,78",   sw: 0.7, op: 0.80, delay: 2.61 },
  { d: "M 156,78 C 140,73  120,72  100,72", sw: 0.7, op: 0.80, delay: 2.64 },
  { d: "M 154,81 C 138,76  119,75  100,75", sw: 0.6, op: 0.75, delay: 2.67 },
  { d: "M 152,84 C 137,79  118,78  100,78", sw: 0.7, op: 0.80, delay: 2.70 },
  { d: "M 53,110 C 67,107  83,106  100,106", sw: 0.6, op: 0.72, delay: 2.73 },
  { d: "M 147,110 C 133,107  117,106  100,106", sw: 0.6, op: 0.72, delay: 2.76 },
  { d: "M 59,115 C 72,112  85,110  100,110",   sw: 0.55, op: 0.68, delay: 2.79 },
  { d: "M 141,115 C 128,112  115,110  100,110", sw: 0.55, op: 0.68, delay: 2.82 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 6: LONG SWEEPING SALIVARY ARCS (continuous loops)
  // ══════════════════════════════════════════════════════════════
  { d: "M 26,83  C 54,69  80,73  100,73  C 120,73  152,71  168,87",  sw: 0.9, op: 0.65, delay: 2.90 },
  { d: "M 24,87  C 52,73  79,77  100,77  C 121,77  154,75  172,89",  sw: 0.8, op: 0.60, delay: 2.94 },
  { d: "M 28,91  C 55,78  80,81  100,81  C 120,81  150,79  168,93",  sw: 0.7, op: 0.55, delay: 2.98 },
  { d: "M 30,95  C 57,82  81,85  100,85  C 119,85  148,83  166,97",  sw: 0.7, op: 0.55, delay: 3.02 },
  { d: "M 33,99  C 59,86  82,89  100,89  C 118,89  145,87  163,101", sw: 0.6, op: 0.50, delay: 3.06 },
  { d: "M 36,103 C 62,90  83,93  100,93  C 117,93  142,91  160,105", sw: 0.7, op: 0.55, delay: 3.10 },
  // Outward loops touching walls
  { d: "M 38,80  C 52,74  64,79  74,73  C 84,67  90,72  100,71",  sw: 0.8, op: 0.62, delay: 3.14 },
  { d: "M 162,80 C 148,74  136,79  126,73 C 116,67  110,72  100,71", sw: 0.8, op: 0.62, delay: 3.17 },
  { d: "M 36,90  C 50,85  62,89  72,84  C 82,79  90,84  100,83",  sw: 0.7, op: 0.58, delay: 3.20 },
  { d: "M 164,90 C 150,85  138,89  128,84 C 118,79  110,84  100,83", sw: 0.7, op: 0.58, delay: 3.23 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 7: CUP FLOOR — dense interior base
  // ══════════════════════════════════════════════════════════════
  { d: "M 63,108 C 76,104  89,102  100,102 C 111,102  124,104  137,108", sw: 1.1, op: 0.85, delay: 3.30 },
  { d: "M 66,111 C 78,108  90,106  100,106 C 110,106  122,108  134,111", sw: 1.0, op: 0.80, delay: 3.34 },
  { d: "M 70,114 C 82,111  91,109  100,109 C 109,109  118,111  130,114", sw: 0.9, op: 0.75, delay: 3.38 },
  { d: "M 74,117 C 85,115  92,113  100,113 C 108,113  115,115  126,117", sw: 0.8, op: 0.70, delay: 3.42 },
  { d: "M 78,121 C 88,119  93,117  100,117 C 107,117  112,119  122,121", sw: 0.7, op: 0.65, delay: 3.46 },
  // Cross threads across floor
  { d: "M 70,104 C 78,111  86,117  92,122", sw: 0.7, op: 0.65, delay: 3.50 },
  { d: "M 78,102 C 85,109  93,115  99,120", sw: 0.7, op: 0.65, delay: 3.53 },
  { d: "M 86,101 C 93,108  100,114  106,119", sw: 0.7, op: 0.65, delay: 3.56 },
  { d: "M 94,101 C 100,108  107,114  113,120", sw: 0.7, op: 0.65, delay: 3.59 },
  { d: "M 102,102 C 107,109  113,115  119,121", sw: 0.7, op: 0.65, delay: 3.62 },
  { d: "M 110,104 C 114,111  118,117  122,122", sw: 0.7, op: 0.62, delay: 3.65 },
  { d: "M 118,107 C 121,113  123,118  124,123", sw: 0.7, op: 0.58, delay: 3.68 },
  { d: "M 66,107 C 74,113  80,118  84,123",    sw: 0.7, op: 0.62, delay: 3.71 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 8: EXTRA MICRO-THREADS filling gap texture
  // ══════════════════════════════════════════════════════════════
  { d: "M 54,81  Q 70,77  86,81",  sw: 0.6, op: 0.72, delay: 3.78 },
  { d: "M 59,84  Q 75,80  91,84",  sw: 0.5, op: 0.68, delay: 3.81 },
  { d: "M 64,87  Q 80,83  96,87",  sw: 0.5, op: 0.65, delay: 3.84 },
  { d: "M 69,90  Q 85,86  101,90", sw: 0.5, op: 0.65, delay: 3.87 },
  { d: "M 114,81 Q 130,77  146,81", sw: 0.6, op: 0.72, delay: 3.90 },
  { d: "M 109,84 Q 125,80  141,84", sw: 0.5, op: 0.68, delay: 3.93 },
  { d: "M 104,87 Q 120,83  136,87", sw: 0.5, op: 0.65, delay: 3.96 },
  { d: "M  99,90 Q 115,86  131,90", sw: 0.5, op: 0.65, delay: 3.99 },
  { d: "M 57,94  Q 72,90  87,94",  sw: 0.6, op: 0.70, delay: 4.02 },
  { d: "M 61,98  Q 76,94  91,98",  sw: 0.5, op: 0.65, delay: 4.05 },
  { d: "M 113,94 Q 128,90  143,94", sw: 0.6, op: 0.70, delay: 4.08 },
  { d: "M 109,98 Q 124,94  139,98", sw: 0.5, op: 0.65, delay: 4.11 },
  { d: "M 65,102 Q 80,98   95,102", sw: 0.5, op: 0.62, delay: 4.14 },
  { d: "M 105,102 Q 120,98  135,102", sw: 0.5, op: 0.62, delay: 4.17 },
  { d: "M 69,106  Q 83,102  98,106",  sw: 0.5, op: 0.58, delay: 4.20 },
  { d: "M 102,106 Q 117,102  132,106", sw: 0.5, op: 0.58, delay: 4.23 },

  // ══════════════════════════════════════════════════════════════
  // LAYER 9: HIGHLIGHT RIM accent — gold-facing upper inner edge
  // ══════════════════════════════════════════════════════════════
  { d: "M 22,73  C 35,57  79,46  100,46  C 121,46  165,57  178,73", sw: 1.5, op: 0.8,  delay: 4.32 },
  { d: "M 26,75  C 39,60  80,49  100,49  C 120,49  161,60  174,75", sw: 1.0, op: 0.65, delay: 4.36 },
  { d: "M 29,71  C 41,56  80,45  100,45  C 120,45  159,56  171,71", sw: 0.7, op: 0.50, delay: 4.40 },
];

// Animate each strand drawing in with staggered delay
function NestStrand({ d, sw, op, delay, started }) {
  if (!started) return null;
  return (
    <motion.path
      d={d}
      stroke="white"
      strokeWidth={sw}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#nestGlow)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: op }}
      transition={{ duration: 2.0, delay, ease: "easeOut" }}
    />
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function SwallowNestSeal() {
  const [phase, setPhase] = useState("flying"); // "flying" | "landing" | "perched"
  const [nestStarted, setNestStarted] = useState(false);
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
      setNestStarted(true);
      return;
    }
    const landTimer  = setTimeout(() => setPhase("landing"), 4500);
    const perchTimer = setTimeout(() => {
      setPhase("perched");
      setTimeout(() => setNestStarted(true), 800);
    }, 5400);
    return () => {
      clearTimeout(landTimer);
      clearTimeout(perchTimer);
    };
  }, [reducedMotion]);

  const perchContent = (
    <motion.div
      key="swallow-perched"
      className="nest-seal-container"
      initial={{ opacity: 0, scale: 0.55 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "backOut" }}
    >
      <div className="nest-seal-inner">
        {/* ── Swallow: high-quality PNG (plain img — no Next.js wrapper) ── */}
        <div className="perched-swallow-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/swallow_luxury.png"
            alt="漢泉燕窩 swallow"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              background: "transparent",
              filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.55))",
            }}
          />
        </div>

        {/* ── Realistic Nest SVG ── */}
        <svg
          viewBox="0 0 200 160"
          className="nest-build-svg"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Gold glow: warm-amber halo prominent at small display size */}
            <filter id="nestGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feFlood floodColor="rgba(218,168,58,0.9)" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Warm ambient inside the cup */}
            <radialGradient id="nestBg" cx="50%" cy="68%" r="45%">
              <stop offset="0%" stopColor="rgba(191,139,61,0.18)" />
              <stop offset="100%" stopColor="rgba(191,139,61,0)" />
            </radialGradient>
          </defs>

          {/* Warm glow inside cup cavity */}
          <ellipse cx="100" cy="104" rx="60" ry="26" fill="url(#nestBg)" />

          {/* All nest strands */}
          {NEST_STRANDS.map((s, i) => (
            <NestStrand
              key={i}
              {...s}
              started={nestStarted || reducedMotion}
            />
          ))}
        </svg>
      </div>
    </motion.div>
  );

  if (reducedMotion) return perchContent;

  return (
    <>
      {/* ── FLYING PHASE ── */}
      <AnimatePresence>
        {phase === "flying" && (
          <motion.div
            key="swallow-flight"
            className="swallow-flight-layer"
            initial={{ x: "-30vw", y: "58vh", scale: 1.1, opacity: 0 }}
            animate={{
              x: ["-30vw", "5vw", "50vw", "calc(100vw - 230px)"],
              y: ["58vh", "30vh", "8vh", "72px"],
              scale: [1.1, 0.82, 0.36, 0.20],
              opacity: [0, 1, 1, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4.5,
              times: [0, 0.28, 0.70, 1],
              ease: [0.18, 0.88, 0.42, 1],
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/swallow_luxury.png"
              alt="漢泉燕窩 swallow"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                background: "transparent",
                filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.6))",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PERCHED + NEST PHASE ── */}
      <AnimatePresence>
        {(phase === "perched" || phase === "landing") && perchContent}
      </AnimatePresence>
    </>
  );
}
