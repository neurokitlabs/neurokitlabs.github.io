"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import ScrollProgress from "@/components/scroll-progress";
import Navbar from "@/components/navbar";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import HeroImage from "@/components/hero-image";

const productStages = [
  {
    title: "3D Design",
    image: "/product/front-3d.png",
    caption: "Early form exploration and component planning.",
  },
  {
    title: "Working Device",
    image: "/product/front.png",
    caption: "A functional device built to support focus through light and music.",
  },
  {
    title: "Connected Device",
    image: "/product/angle.png",
    caption: "The device connects with the mobile app for guided study sessions.",
  },
];

const appSlides = [
  {
    title: "Onboarding",
    image: "/app/onboarding.png",
    caption: "Students enter the Neurokit experience.",
  },
  {
    title: "Profile Setup",
    image: "/app/profile-setup.png",
    caption: "Goals and preferences personalize the session.",
  },
  {
    title: "Music Mode",
    image: "/app/music.png",
    caption: "Students choose Learn or Chill mode before studying.",
  },
  {
    title: "Cognitive Warm-Up",
    image: "/app/warmup.png",
    caption: "A short brain-priming activity prepares students for focus.",
  },
  {
    title: "AI Motivation",
    image: "/app/motivation-start.png",
    caption: "Personalized encouragement starts the session.",
  },
  {
    title: "Study Session",
    image: "/app/session-running.png",
    caption: "The app guides the active study session while the device runs.",
  },
  {
    title: "Closing Motivation",
    image: "/app/motivation-end.png",
    caption: "Students receive encouragement after completing the session.",
  },
  {
    title: "Rewards",
    image: "/app/rewards.png",
    caption: "Points and rewards make consistency visible.",
  },
  {
    title: "Overview",
    image: "/app/overview.png",
    caption: "Students can review progress and session activity.",
  },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/neurokit.pkmkc" },
  { name: "YouTube", href: "https://www.youtube.com/@neurokitpkmkc" },
  { name: "GitHub", href: "https://github.com/neurokitlabs" },
];

const activityGallery = [
  {
    title: "Student User Testing",
    image: "/activity/testing.png",
    description: "Direct student trials to observe focus, usability, and session flow.",
  },
  {
    title: "Demo-Ready Product",
    image: "/activity/product.png",
    description: "Neurokit hardware and app prepared for the demo filming.",
  },
  {
    title: "Hands-on App Testing",
    image: "/activity/interface.png",
    description: "Validation of Neurokit app flows on mobile for session simulations.",
  },
  {
    title: "Development Process",
    image: "/activity/development.png",
    description: "Iteration, assembly, and implementation moments.",
    imageClassName: "object-[0%_50%]",
  },
];

function ProductImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 74vw, (max-width: 1024px) 52vw, 500px",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={900}
      height={900}
      sizes={sizes}
      className={`h-full w-full object-contain ${className}`}
    />
  );
}

function BluetoothConnectedBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-[var(--blue)]/12 bg-white/70 px-3 py-2 text-[var(--blue)] shadow-[0_10px_30px_rgba(11,52,132,0.12)] backdrop-blur-md ${className}`}
    >
      <span className="text-[var(--blue)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 7l10 10-5 4V3l5 4L7 17" />
        </svg>
      </span>
      <span className="whitespace-nowrap text-xs font-semibold">
        Connected
      </span>
    </div>
  );
}

function ProductEvolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      productStages.length - 1,
      Math.max(0, Math.floor(latest * productStages.length * 0.98))
    );
    setActiveStage(idx);
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0.05, 0.92],
    ["0%", "100%"]
  );

  const stage = productStages[activeStage];

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative bg-[var(--stone)] lg:h-[220svh]"
    >
      <div className="sticky top-0 hidden h-svh items-center justify-center overflow-hidden lg:flex">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[0.9fr_1.1fr] items-center gap-12 px-12">
          <div>
            <p className="section-label">PRODUCT</p>
            <h2 className="section-title mt-4 max-w-lg">
              From 3D concept to working device.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--ink-muted)]">
              Neurokit evolved from an early product design into a connected light-and-music therapy device for guided study sessions.
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--blue)]">
                <span>{String(activeStage + 1).padStart(2, "0")}</span>
                <div className="h-px flex-1 bg-[var(--line)]">
                  <motion.div
                    className="h-px bg-[var(--sun)]"
                    style={{ width: progressWidth }}
                  />
                </div>
                <span>{String(productStages.length).padStart(2, "0")}</span>
              </div>

              <div className="mt-10 flex gap-3">
                {productStages.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    aria-label={`Show ${item.title}`}
                    className="group flex flex-1 items-center justify-center"
                  >
                    <div
                      className={`h-1.5 w-full rounded-full transition-colors ${
                        index === activeStage
                          ? "bg-[var(--sun)]"
                          : "bg-[var(--line)] group-hover:bg-[var(--line)]/80"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="mt-8 h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="[font-family:Ovo,serif] text-3xl leading-tight text-[var(--blue)]">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-base leading-7 text-[var(--ink-muted)]">
                      {stage.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="relative flex h-[64vh] items-center justify-center">
            <div className="absolute h-[50vh] w-[50vh] rounded-full bg-[rgba(254,236,78,0.2)] blur-[90px]" />
            <div className="absolute h-[60vh] w-[60vh] rounded-full bg-[rgba(11,52,132,0.12)] blur-[100px]" />

            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="flex h-[56vh] w-full items-center justify-center"
                >
                  <ProductImage
                    src={stage.image}
                    alt={`Neurokit ${stage.title}`}
                    className="max-h-[56vh] max-w-[500px] drop-shadow-[0_24px_50px_rgba(11,52,132,0.15)]"
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {activeStage === 2 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.25 },
                      y: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <BluetoothConnectedBadge />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:hidden">
        <SectionHeading
          label="PRODUCT"
          title="From 3D concept to working device."
          description="Neurokit evolved from an early product design into a connected light-and-music therapy device for guided study sessions."
        />
        <div className="mt-10 grid gap-5">
          {productStages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[1.6rem] border border-[var(--line)]/45 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[var(--blue)]">{item.title}</h3>
                  <span className="rounded-full bg-[var(--sun)] px-3 py-1 text-xs font-bold text-[var(--blue)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex aspect-[4/3] items-center justify-center rounded-[1.2rem] bg-[var(--stone)] p-5">
                  <ProductImage src={item.image} alt={item.title} />
                </div>
                {index === 2 ? (
                  <div className="mt-3 flex justify-center">
                    <BluetoothConnectedBadge />
                  </div>
                ) : null}
                <p className="mt-4 text-sm leading-6 text-[var(--ink-muted)]">{item.caption}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppWalkthrough() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const slide = appSlides[activeSlide];
  const progress = ((activeSlide + 1) / appSlides.length) * 100;

  const changeSlide = (step: 1 | -1) => {
    setDirection(step);
    setActiveSlide((current) => (current + step + appSlides.length) % appSlides.length);
  };

  const carouselSlides = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeSlide + offset + appSlides.length) % appSlides.length;
    return { ...appSlides[index], index, offset };
  });

  const getPhoneSlot = (offset: number) => {
    const isCenter = offset === 0;
    const isPreview = Math.abs(offset) === 1;

    return {
      x: offset * 190,
      y: Math.abs(offset) > 1 ? 36 : 0,
      scale: isCenter ? 1 : isPreview ? 0.78 : 0.66,
      opacity: isCenter ? 1 : isPreview ? 0.42 : 0,
      zIndex: isCenter ? 20 : isPreview ? 5 : 1,
      filter: isCenter ? "blur(0px)" : isPreview ? "blur(0.4px)" : "blur(3px)",
    };
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        changeSlide(1);
      }
      if (event.key === "ArrowLeft") {
        changeSlide(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="app" className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--blue)] text-white">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_22%_18%,rgba(254,236,78,0.2),transparent_28%),radial-gradient(circle_at_80%_74%,rgba(255,255,255,0.16),transparent_30%)]" />
      
      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-24 lg:px-12">
        <Reveal>
          <div className="grid gap-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-32 xl:gap-40">
            
            {/* Left: App Visual */}
            <div className="order-2 relative flex justify-center lg:order-1 lg:justify-end lg:pr-10">
              <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(254,236,78,0.08)] blur-[80px]" />
              
              <div className="relative flex h-[520px] w-full max-w-[340px] items-center justify-center sm:h-[600px]">
                <AnimatePresence custom={direction} initial={false}>
                  {carouselSlides.map((item) => (
                    <motion.div
                      key={item.index}
                      custom={direction}
                      initial={getPhoneSlot(direction * 3)}
                      animate={getPhoneSlot(item.offset)}
                      exit={{
                        ...getPhoneSlot(item.offset),
                        opacity: 0,
                        filter: "blur(3px)",
                      }}
                      transition={{
                        x: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
                        y: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
                        scale: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
                        opacity: { duration: Math.abs(item.offset) > 1 ? 0.1 : 0.24, ease: "easeOut" },
                        filter: { duration: 0.12, ease: "easeOut" },
                      }}
                      className={`absolute inset-0 h-full w-full ${
                        item.offset === 0 ? "" : "pointer-events-none hidden sm:block"
                      }`}
                      aria-hidden={item.offset !== 0}
                    >
                      <Image
                        src={item.image}
                        alt={item.offset === 0 ? item.title : ""}
                        fill
                        sizes="(max-width: 640px) 84vw, 340px"
                        className={`rounded-[2.2rem] object-cover object-center ${
                          item.offset === 0
                            ? "drop-shadow-[0_24px_50px_rgba(0,0,0,0.3)]"
                            : ""
                        }`}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--sun)]">
                APP WALKTHROUGH
              </p>
              <h2 className="mt-4 max-w-md [font-family:Ovo,serif] text-4xl leading-tight text-white sm:text-5xl">
                A guided session, step by step.
              </h2>
              
              <div className="mt-10 hidden w-full max-w-sm lg:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-28"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {slide.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
                      {slide.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 hidden w-full max-w-sm flex-col gap-8 lg:flex">
                <div className="flex items-center gap-4 text-sm font-semibold text-white/78">
                  <span>{String(activeSlide + 1).padStart(2, "0")}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/14">
                    <motion.div
                      className="h-full rounded-full bg-[var(--sun)]"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <span>{String(appSlides.length).padStart(2, "0")}</span>
                </div>

                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <button
                    type="button"
                    onClick={() => changeSlide(-1)}
                    aria-label="Previous slide"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => changeSlide(1)}
                    aria-label="Next slide"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--sun)] text-[var(--blue)] shadow-lg transition hover:scale-105"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="order-3 w-full max-w-sm justify-self-center lg:hidden">
              <div className="mt-2 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-20 text-center"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {slide.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
                      {slide.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex w-full flex-col gap-4">
                <div className="flex items-center gap-4 text-sm font-semibold text-white/78">
                  <span>{String(activeSlide + 1).padStart(2, "0")}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/14">
                    <motion.div
                      className="h-full rounded-full bg-[var(--sun)]"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <span>{String(appSlides.length).padStart(2, "0")}</span>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => changeSlide(-1)}
                    aria-label="Previous slide"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => changeSlide(1)}
                    aria-label="Next slide"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--sun)] text-[var(--blue)] shadow-lg transition hover:scale-105"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeGalleryCard, setActiveGalleryCard] = useState<string | null>(null);

  const toggleGalleryCard = (cardId: string) => {
    setActiveGalleryCard((current) => (current === cardId ? null : cardId));
  };

  const isPresentationOpen = activeGalleryCard === "presentation";

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="hero-texture relative isolate min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,236,78,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col-reverse items-center justify-center gap-8 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:flex-row lg:gap-6 lg:px-12 lg:pb-20 lg:pt-16">
            <Reveal className="w-full shrink-0 text-center lg:w-[42%] lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--sun)]">
                AI Study Companion
              </p>
              <h1 className="[font-family:Ovo,serif] text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Neurokit
              </h1>
              <div className="mx-auto mt-3 h-1.5 w-28 rounded-full bg-[var(--sun)] sm:w-36 lg:mx-0" />
              <p className="mt-5 [font-family:Ovo,serif] text-xl leading-snug text-white/90 sm:text-2xl">
                The focus layer for the endless-scroll generation.
              </p>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/70 sm:text-lg lg:mx-0">
                An AI-powered study companion that combines personalized motivation, adaptive light and music therapy, and gamified cognitive warm-ups.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href="#product" className="rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-semibold text-[var(--blue)] transition hover:translate-y-[-1px] hover:shadow-lg">
                  Explore Product
                </a>
                <a href="#app" className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                  View App
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex w-full items-center justify-center lg:w-[58%] lg:justify-end">
              <HeroImage />
            </Reveal>
          </div>
        </section>

        <section id="about" className="paper-texture relative border-t border-[var(--line)]/80">
          <div className="mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 lg:px-12">
            <Reveal className="mx-auto text-center">
              <p className="section-label">About Neurokit</p>
              <h2 className="section-title mt-4 text-center">
                Focus, memory, and motivation connected in one system.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-[var(--ink-muted)]">
              <p>
                Neurokit helps students build better study sessions through a connected app and device.
                <span className="mt-2 block">
                  The app provides motivation, warm-ups, and rewards, while the device supports each session with adaptive light and music therapy.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        <ProductEvolution />
        <AppWalkthrough />

        <section id="status" className="relative border-y border-[var(--line)]">
          <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <Reveal>
              <SectionHeading
                label="Product Metrics"
                title="Current status, measured."
                description="A snapshot of the live hardware-and-app product, based on current testing and specification data."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:auto-rows-[145px] sm:grid-cols-2 lg:auto-rows-[165px] lg:grid-cols-4">
              <Reveal className="sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2">
                <article className="h-full rounded-[2rem] bg-[var(--blue)] px-7 py-8 text-white shadow-[0_24px_70px_rgba(11,52,132,0.18)]">
                  <p className="section-label !text-[var(--sun)]">Current Status</p>
                  <h2 className="mt-4 [font-family:Ovo,serif] text-3xl leading-tight sm:text-4xl">
                    Working connected product.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
                    The hardware and mobile app are integrated and functional. The app is currently hardware-linked, so release is pending broader validation and refinement.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.05}>
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Early Memory Gain</p>
                  <p className="mt-2 [font-family:Ovo,serif] text-3xl leading-none text-[var(--blue)]">+11.35%</p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">Wechsler Memory Scale pilot result</p>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Light Intensity</p>
                  <p className="mt-2 [font-family:Ovo,serif] text-3xl leading-none text-[var(--blue)]">536 lx</p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">Cool white 6000K average output</p>
                </article>
              </Reveal>

              <Reveal delay={0.1}>
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Distance Range</p>
                  <p className="mt-2 [font-family:Ovo,serif] text-3xl leading-none text-[var(--blue)]">30-70 cm</p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">Adaptive sensing test span</p>
                </article>
              </Reveal>

              <Reveal delay={0.12}>
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Audio Output</p>
                  <p className="mt-2 [font-family:Ovo,serif] text-3xl leading-none text-[var(--blue)]">~65 dB</p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">Classical 65.8, natural 65.4 average</p>
                </article>
              </Reveal>

              <Reveal delay={0.14} className="sm:col-span-2 lg:col-span-2">
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Functional Coverage</p>
                  <div className="mt-2 flex items-end gap-3">
                    <p className="[font-family:Ovo,serif] text-3xl leading-none text-[var(--blue)]">10 / 10</p>
                    <p className="text-sm font-medium text-[var(--ink-muted)]">scenarios passed</p>
                  </div>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">Bluetooth, warm-up, session controls, AI motivation, rewards, light and audio output all validated.</p>
                </article>
              </Reveal>

              <Reveal delay={0.16} className="sm:col-span-2 lg:col-span-2">
                <article className="glass-card metric-card h-full !rounded-[1.4rem] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--blue)]/70">Product Specs</p>
                  <p className="mt-2 [font-family:Ovo,serif] text-2xl leading-tight text-[var(--blue)]">15 x 14.5 x 20 cm</p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">1.6 kg, 12V 3A, max 39C</p>
                </article>
              </Reveal>

            </div>
          </div>
        </section>

        <section id="gallery" className="relative border-b border-[var(--line)] bg-[var(--stone)]/55">
          <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <SectionHeading
              label="Gallery"
              title="Real activities behind the product."
              description="Presentation moments, testing sessions, product details, app interface, and day-to-day development progress."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <Reveal>
                <article
                  className="group relative h-full cursor-pointer overflow-hidden rounded-[1.6rem] border border-[var(--line)]/35 bg-white"
                  onClick={() => toggleGalleryCard("presentation")}
                >
                  <div className="relative aspect-[16/9] w-full lg:h-full lg:aspect-auto">
                    <Image
                      src="/activity/presentation.png"
                      alt="Neurokit presentation activity"
                      fill
                      sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 58vw"
                      className="object-cover object-center"
                    />
                    <div
                      className={`absolute inset-0 bg-[rgba(11,52,132,0.76)] transition-opacity duration-300 ${
                        isPresentationOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 flex items-end p-5 transition-opacity duration-300 ${
                        isPresentationOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <p className="max-w-xl text-sm font-semibold leading-6 text-white sm:text-base">
                        Presentation Activity
                        <span className="mt-1 block text-xs font-medium text-white/85 sm:text-sm">
                          Team presentation with an in-person product showcase.
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {activityGallery.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article
                      className="group relative cursor-pointer overflow-hidden rounded-[1.3rem] border border-[var(--line)]/35 bg-white"
                      onClick={() => toggleGalleryCard(item.title)}
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 2.5rem), 20vw"
                          className={`object-cover object-center ${item.imageClassName ?? ""}`}
                        />
                        <div
                          className={`absolute inset-0 bg-[rgba(11,52,132,0.76)] transition-opacity duration-300 ${
                            activeGalleryCard === item.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 ${
                            activeGalleryCard === item.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <p className="text-xs font-semibold leading-5 text-white sm:text-sm">
                            {item.title}
                            <span className="mt-1 block text-[11px] font-medium leading-4 text-white/85 sm:text-xs">
                              {item.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <Reveal>
              <article className="rounded-[2rem] bg-[var(--blue)] px-7 py-10 text-white shadow-[0_24px_70px_rgba(11,52,132,0.22)] sm:px-10">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--sun)]">Contact</p>
                <h2 className="mt-4 [font-family:Ovo,serif] text-3xl leading-tight sm:text-4xl">
                  Bring Neurokit into your study routine.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/84 sm:text-base">
                  Contact us at: {" "}
                  <a
                    href="mailto:neurokitunsrat@gmail.com"
                    className="inline-flex items-center rounded-full border border-white/24 bg-white/12 px-3 font-semibold text-white transition hover:border-[var(--sun)]/45 hover:bg-white/18 hover:text-[var(--sun)]"
                  >
                    neurokitunsrat@gmail.com
                  </a>
                </p>              
              </article>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] bg-[var(--blue)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              <Image src="/logo/icon.png" alt="Neurokit" width={32} height={32} className="h-8 w-8 rounded-lg" />
              <span className="text-sm font-semibold text-white">Neurokit</span>
            </div>
            <span className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold text-white/72">
              &copy; 2025 Neurokit. All rights reserved.
            </span>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white/50 transition hover:text-[var(--sun)]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
