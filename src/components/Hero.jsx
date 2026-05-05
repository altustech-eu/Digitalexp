import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DigitalExperienceHero() {
  const container = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!isMounted) return null;

  const documents = [
    {
      id: "01",
      tag: "BLUEPRINT",
      title: "Enterprise Target Operating Model",
      desc: "Strategic operating architecture built for scale. Covers enterprise decomposition maps, governance layers, process ownership, and execution control systems.",
      path: "/career360_enterprise_tom.html",
      action: "Open Blueprint",
    },
    {
      id: "02",
      tag: "OPERATING SYSTEM",
      title: "Digital Experience Operating System",
      desc: "The core Digital Experience execution engine. Defines value streams, AI workflows, process systems, operating cadence, and internal delivery logic.",
      path: "/Digital Experience Operating System.html",
      action: "Open Operating System",
    },
    {
      id: "03",
      tag: "FRAMEWORK",
      title: "Content Digital Framework",
      desc: "Performance-led content and demand framework designed to drive measurable pipeline growth, attribution clarity, and revenue efficiency.",
      path: "/career360_content_digital_framework.html",
      action: "Explore Framework",
    },
    {
      id: "04",
      tag: "E-BOOK",
      title: "Business Operating Blueprint",
      desc: "Foundational internal doctrine covering Digital Experience business philosophy, operating principles, structural systems, and execution standards.",
      path: "/career360_ebook.html",
      action: "Read Blueprint",
    },
    {
      id: "05",
      tag: "MODEL B",
      title: "Operating Model Supplementary",
      desc: "Extended operating model layer focused on performance metrics, retention systems, optimization loops, and enterprise efficiency benchmarks.",
      path: "/career360_enterprise_tom (1).html",
      action: "View Supplement",
    },
    {
      id: "06",
      tag: "MODEL C",
      title: "Enterprise Operating Model V2",
      desc: "Advanced operating model built for high-performance teams, standardized delivery, cross-functional scale, and global process consistency.",
      path: "/career360_enterprise_tom (2).html",
      action: "Open V2 Model",
    },
  ];

  return (
    <div
      ref={container}
      className="bg-black text-white selection:bg-[#e2ff00] selection:text-black font-sans overflow-x-hidden"
    >
      {/* FILM GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] sm:left-[-10%] w-[100%] sm:w-[60%] h-[60%] sm:h-[80%] bg-[#e2ff00] blur-[80px] sm:blur-[150px] opacity-10 sm:opacity-20 rotate-[35deg] pointer-events-none" />

        <motion.div style={{ scale, opacity }} className="relative z-10 text-center w-full">
          <span className="text-[10px] sm:text-[8px] font-black tracking-[0.35em] uppercase text-gray-500 mb-8 block">
            Digital Experience · Enterprise Infrastructure
          </span>

          <h1 className="text-[8vw] sm:text-[8vw] md:text-[2.8vw] font-black leading-[0.95] uppercase tracking-tight max-w-[1800px] mx-auto">
            Digital Experience <br />
            Built for Enterprise <br />
            Scale, Precision <br />
            <span className="bg-[#e2ff00] text-black px-2 sm:px-4 py-0 sm:py-1 mt-2 inline-block">
              & Absolute Trust
            </span>
          </h1>

          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6">
            <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-[#e2ff00] to-transparent" />
            <p className="max-w-xs sm:max-w-2xl text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-medium px-4">
              Digital Experience is a modern enterprise operating company focused on
              business infrastructure, digital systems, content operations, and scalable
              execution models for high-growth organizations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* DOCUMENT GRID */}
      <section className="bg-black py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
            {documents.map((doc) => (
              <NavCard key={doc.id} {...doc} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mt-12 md:mt-20 w-full max-w-5xl border-t border-zinc-900 pt-16">
            <StatItem number="2025" label="Founded in Chennai" />
            <StatItem number="2X" label="Operating Hubs" />
            <StatItem number="24/7" label="Enterprise Continuity" />
          </div>
        </div>
      </section>
    </div>
  );
}

function NavCard({ id, tag, title, desc, path, action }) {
  return (
    <button
      onClick={() => {
        window.location.href = path;
      }}
      className="text-left w-full bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl group transition hover:border-[#e2ff00]/50 hover:bg-zinc-900 flex flex-col justify-between min-h-[260px]"
    >
      <div>
        <span className="text-[#e2ff00] font-mono text-xs tracking-wider">
          {id} / {tag}
        </span>

        <h3 className="text-2xl font-black tracking-tight mt-4 group-hover:text-[#e2ff00] transition duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-3 font-light leading-relaxed">
          {desc}
        </p>
      </div>

      <span className="text-xs text-zinc-500 group-hover:text-white flex items-center gap-2 mt-8 transition duration-300">
        {action} →
      </span>
    </button>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="flex flex-col items-start border-b border-white/10 pb-6 sm:pb-10 w-full">
      <h2
        className="text-[60px] sm:text-[80px] md:text-[100px] font-black leading-none mb-4 sm:mb-6"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.6)",
        }}
      >
        {number}
      </h2>

      <div className="flex items-center gap-3">
        <span className="text-[#e2ff00] text-[10px] sm:text-xs">◆</span>
        <span className="text-gray-300 font-bold text-[11px] sm:text-[13px] tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}