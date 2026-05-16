"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    pos: "top-[10%] left-[0%]",
    delay: 0,
    label: "Adaptive Light",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    pos: "top-[34%] right-[-2%]",
    delay: 0.6,
    label: "Music Therapy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    pos: "bottom-[12%] left-[-2%]",
    delay: 1.1,
    label: "AI Motivation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
        <path d="M15 13a6 6 0 0 1-6 0" />
        <path d="M12 17v5M8 22h8" />
      </svg>
    ),
  },
];

export default function HeroImage() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: "clamp(340px, 50vw, 680px)" }}
    >
      {/* ── Ambient background blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(11,52,132,0.35)] blur-[80px]" />
        <div className="absolute right-[10%] top-[15%] h-[200px] w-[200px] rounded-full bg-[rgba(254,236,78,0.18)] blur-[60px]" />
        <div className="absolute bottom-[10%] left-[15%] h-[160px] w-[160px] rounded-full bg-[rgba(180,220,255,0.14)] blur-[50px]" />
      </div>

      {/* ── Floor shadow ── */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[40px] w-[70%] -translate-x-1/2 rounded-full bg-[rgba(4,14,42,0.5)] blur-[28px]" />

      {/* ── Static ambient glow (always on) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 55% 50%, rgba(254,236,78,0.09) 0%, rgba(11,52,132,0.07) 55%, transparent 100%)",
        }}
      />

      {/* ── Product image ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-full"
      >
        <Image
          src="/product/hero.png"
          alt="Neurokit device and mobile app"
          width={720}
          height={720}
          preload
          className="h-auto w-full drop-shadow-[0_32px_48px_rgba(4,14,42,0.55)]"
        />
      </motion.div>

      {/* ── Floating SVG badges ── */}
      {badges.map((b) => (
        <motion.div
          key={b.label}
          className={`absolute ${b.pos} z-40 hidden xl:flex`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <span className="text-[var(--sun)]">{b.icon}</span>
            <span className="whitespace-nowrap text-xs font-semibold">{b.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
