"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Bot, Brain, Network, LucideIcon } from "lucide-react";
import { Track } from "@/lib/content";

interface TrackCardProps {
  track: Track;
  index: number;
}

// Icon dictionary to map string to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Database: Database,
  Bot: Bot,
  Brain: Brain,
  Network: Network,
};

// Per-track Carbon accent colors (matching order: Blockchain, Robotics, AI, Network Security)
const TRACK_COLORS: Record<number, { icon: string; badge: string; hover: string; bullet: string }> = {
  0: {
    icon: "bg-primary/10 text-primary",
    badge: "bg-primary/8 text-primary border-primary/20",
    hover: "hover:border-primary",
    bullet: "bg-primary/50",
  },
  1: {
    icon: "bg-[#24a148]/10 text-[#24a148]",
    badge: "bg-[#24a148]/8 text-[#24a148] border-[#24a148]/20",
    hover: "hover:border-[#24a148]",
    bullet: "bg-[#24a148]/50",
  },
  2: {
    icon: "bg-ruby/10 text-ruby",
    badge: "bg-ruby/8 text-ruby border-ruby/20",
    hover: "hover:border-ruby",
    bullet: "bg-ruby/50",
  },
  3: {
    icon: "bg-lemon/15 text-[#9b6829]",
    badge: "bg-lemon/10 text-[#9b6829] border-lemon/30",
    hover: "hover:border-[#9b6829]",
    bullet: "bg-[#9b6829]/40",
  },
};

export default function TrackCard({ track, index }: TrackCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = ICON_MAP[track.icon] || Database;
  const colors = TRACK_COLORS[index % 4] || TRACK_COLORS[0];

  const cardVariants = {
    hidden: { opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(16px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1] as const,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col justify-between p-5 sm:p-7 bg-canvas border border-hairline rounded-none transition-all duration-200 hover-lift ${colors.hover}`}
    >
      <div>
        {/* Track Icon */}
        <div className={`flex h-11 w-11 items-center justify-center rounded-none transition-colors ${colors.icon}`}>
          <IconComponent className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </div>

        {/* Track Domain */}
        <h3 className="mt-5 text-[20px] font-[300] tracking-[-0.2px] text-ink leading-tight">
          {track.domain}
        </h3>

        {/* Sub-topics list */}
        <ul className="mt-5 flex flex-col gap-2.5" aria-label={`Sub-topics for ${track.domain}`}>
          {track.topics.map((topic, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-[14px] text-ink-secondary leading-relaxed font-[300]"
            >
              {/* Square Carbon bullet */}
              <span className={`mt-2.5 h-1 w-1 shrink-0 rounded-none ${colors.bullet}`} aria-hidden="true" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: track index badge + CTA */}
      <div className="mt-6 flex items-center justify-between">
        <span className={`inline-flex items-center px-2 py-0.5 rounded-none text-[9px] font-sans uppercase tracking-widest border ${colors.badge}`}>
          Track {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center text-[12px] font-medium text-primary group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
          <span>View Details</span>
          <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
