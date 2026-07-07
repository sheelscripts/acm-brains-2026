"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Countdown from "@/components/shared/Countdown";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const elementVariants = {
    hidden: { opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(16px)" },
    visible: (custom: number) => ({
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1] as const,
        delay: custom * 0.08,
      },
    }),
  };

  const handleScrollToDates = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("dates-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-canvas min-h-[calc(100vh-48px)] flex items-center">
      {/* Full-bleed campus aerial image as hero backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3.jpg"
          alt="GGSIPU East Delhi Campus aerial view"
          fill
          priority
          className="object-cover object-center brightness-110 saturate-75"
          sizes="100vw"
        />
        {/* Light overlay to keep hero aligned with light theme */}
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 via-[#f5f9ff]/85 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-12 pb-20 md:pt-24 md:pb-36 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 z-10">
        {/* Left Side: Messaging */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl bg-white/80 border border-white/80 backdrop-blur-[2px] px-5 py-6 sm:px-7 sm:py-8">
          {/* Eyebrow with ACM logo mark */}
          <motion.div
            custom={0}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-5"
          >
            <Image
              src="/BLUE WITH WHITE TEXT.png"
              alt="GGSIPU EDC ACM Student Chapter"
              width={32}
              height={32}
              className="opacity-90 object-contain"
            />
            <span className="text-[13px] text-ink font-sans font-[400]">
              GGSIPU EDC ACM Student Chapter · USAR
            </span>
          </motion.div>

          {/* Headline — IBM display at weight 300 on dark */}
          <motion.h1
            custom={1}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="text-[30px] sm:text-[44px] md:text-[58px] font-[300] tracking-[-1.5px] leading-[1.1] text-ink mb-6 font-sans"
          >
            International Conference on Blockchain, Robotics, AI &amp;{" "}
            <span className="text-primary">Network Security</span>
          </motion.h1>

          {/* Date / Location strip */}
          <motion.div
            custom={2}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="inline-flex items-center gap-2 text-[13px] text-ink font-[400]">
              <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              November 6–7, 2026
            </span>
            <span className="h-3 w-px bg-ink/20" />
            <span className="inline-flex items-center gap-2 text-[13px] text-ink font-[400]">
              <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Delhi, India
            </span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            custom={3}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="text-[15px] sm:text-[17px] font-[400] leading-relaxed text-ink mb-8 max-w-[52ch]"
          >
            The flagship research forum presenting peer-reviewed breakthroughs in decentralized, autonomous, intelligent, and secure systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://openreview.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center bg-primary px-6 text-[14px] font-medium text-white transition-colors hover:bg-primary-deep active:bg-primary-press rounded-none"
            >
              Submit Paper
            </a>
            <a
              href="#dates-section"
              onClick={handleScrollToDates}
              className="inline-flex h-12 items-center justify-center border border-hairline bg-white/75 px-6 text-[14px] font-medium text-ink transition-colors hover:border-primary/40 hover:bg-white rounded-none"
            >
              Important Dates
            </a>
          </motion.div>
        </div>

        {/* Right Side: Countdown */}
        <motion.div
          custom={5}
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-auto flex-shrink-0"
        >
          <div className="border border-hairline bg-canvas/90 backdrop-blur-sm p-1 shadow-[0_10px_28px_rgba(0,67,206,0.08)]">
            <Countdown targetDate="2026-11-06T09:00:00+05:30" variant="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
