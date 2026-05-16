"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "App", href: "#app" },
  { label: "Metrics", href: "#status" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "pt-3" : "pt-5 sm:pt-6"
        }`}
      >
        <div
          className={`mx-4 flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border border-[var(--line)]/30 bg-white/80 shadow-[0_8px_32px_rgba(11,52,132,0.1)]"
              : "border border-white/20 bg-white/10 shadow-[0_12px_36px_rgba(4,14,42,0.12)]"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo/icon.png"
              alt="Neurokit"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
            <span className={`text-xs font-semibold ${scrolled ? "text-[var(--blue)]" : "text-white"}`}>
              Neurokit
            </span>
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative overflow-hidden rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  scrolled
                    ? "text-[var(--ink-muted)] hover:text-[var(--blue)]"
                    : "text-white/82 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-transform duration-300 ease-out ${
                    scrolled
                      ? "bg-[var(--blue)]/10 scale-x-0 origin-left group-hover:scale-x-100"
                      : "bg-white/16 scale-x-0 origin-left group-hover:scale-x-100"
                  }`}
                />
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition md:block ${
              scrolled
                ? "border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white"
                : "border border-[var(--sun)]/70 text-[var(--sun)] hover:bg-[var(--sun)] hover:text-[var(--blue)]"
            }`}
          >
            Contact
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex flex-col gap-1.5 md:hidden ${scrolled ? "text-[var(--blue)]" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-4 top-[84px] z-50 rounded-2xl border border-[var(--line)]/30 bg-white/90 px-5 pb-4 pt-3 shadow-[0_12px_40px_rgba(11,52,132,0.12)] backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-full px-3 py-2.5 text-sm font-medium text-[var(--ink-muted)] transition hover:bg-[var(--blue)]/10 hover:text-[var(--blue)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-block rounded-full bg-[var(--blue)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
