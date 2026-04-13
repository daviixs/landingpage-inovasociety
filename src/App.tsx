/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { WorkflowBuilder } from "@/components/WorkflowBuilder";
import { ClientGrowth } from "@/components/ClientGrowth";
import { FreeTrial } from "@/components/FreeTrial";
import { GlobalReach } from "@/components/GlobalReach";
import { Footer } from "@/components/Footer";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

/**
 * FadeIn component: A wrapper that starts with opacity: 0 and transitions to opacity: 1 
 * after a configurable delay (ms) using a setTimeout + React state.
 */
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay: number;
  duration?: number;
  className?: string;
}> = ({ children, delay, duration = 1000, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ease-out ${className} ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedHeading component: Splits text by \n into lines, then each line into individual characters.
 * Each character is an inline-block <span> with CSS transitions on opacity and transform (translateX).
 */
const AnimatedHeading: React.FC<{ text: string }> = ({ text }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const charDelay = 30;
  const initialDelay = 200;

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), initialDelay);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");

  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 leading-tight"
      style={{ letterSpacing: "-0.04em" }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => {
            const delay = lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500 ease-out"
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transform: isAnimating ? "translateX(0)" : "translateX(-18px)",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
};

export default function App() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16">
          {/* Navbar */}
          <nav className="pt-6">
            <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
              {/* Left: Logo */}
              <div className="text-2xl font-semibold tracking-tight">VEX</div>

              {/* Center: Links */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                {["Story", "Investing", "Building", "Advisory"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Right: Button */}
              <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Start a Chat
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <main className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              {/* Left Column */}
              <div>
                <AnimatedHeading text={"Shaping tomorrow\nwith vision and action."} />

                <FadeIn delay={800}>
                  <p className="text-base md:text-lg text-gray-300 mb-5 max-w-lg">
                    We back visionaries and craft ventures that define what comes next.
                  </p>
                </FadeIn>

                <FadeIn delay={1200}>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start a Chat
                    </button>
                    <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                      Explore Now
                    </button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column */}
              <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
                <FadeIn delay={1400}>
                  <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                    <span className="text-lg md:text-xl lg:text-2xl font-light">
                      Investing. Building. Advisory.
                    </span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <div className="min-h-[60vh] w-full flex flex-col items-center justify-center relative bg-black border-b border-white/5 overflow-hidden">
        <div
          aria-hidden="true"
          className={cn(
            "-z-0 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_50%)]",
            "blur-[30px]"
          )}
        />

        <section className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
          <h2 className="mb-8 text-center font-medium text-white text-xl tracking-tight md:text-3xl lg:text-4xl">
            <span className="text-gray-400">Trusted by experts.</span>
            <br />
            <span className="font-semibold">Used by the leaders.</span>
          </h2>
          <div className="mx-auto mb-8 h-px w-full max-w-md bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <LogoCloud logos={logos} />

          <div className="mt-8 mx-auto h-px w-full max-w-4xl bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </section>
      </div>

      {/* Workflow Builder Section */}
      <WorkflowBuilder />

      {/* Client Exponential Growth Section */}
      <ClientGrowth />

      {/* Free Trial Section */}
      <FreeTrial />

      {/* Global Reach (Final Section) */}
      <GlobalReach />

      {/* Platform Level Footer */}
      <Footer />
    </div>
  );
}