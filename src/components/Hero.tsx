"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BG_WORDS } from "@/lib/constants";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Dynamically import GSAP for client-side only
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;

      const handleMouseMove = (e: MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            x: x * 20,
            y: y * 15,
            rotateY: x * 5,
            rotateX: -y * 5,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      };

      const section = sectionRef.current;
      if (section) {
        section.addEventListener("mousemove", handleMouseMove);
        return () => section.removeEventListener("mousemove", handleMouseMove);
      }
    };

    initGSAP();
  }, []);

  // Animate entrance
  useEffect(() => {
    const animateEntrance = async () => {
      const gsap = (await import("gsap")).default;

      gsap.fromTo(
        ".hero-text-animate",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".hero-image-animate",
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "power3.out", delay: 0.6 }
      );

      gsap.fromTo(
        ".hero-badge-animate",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 1 }
      );
    };

    animateEntrance();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center section-padding pt-32 mt-8 overflow-hidden"
    >
      {/* Background decorative text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {BG_WORDS.map((word, i) => (
          <span
            key={word}
            className="bg-text"
            style={{
              top: `${15 + i * 22}%`,
              left: i % 2 === 0 ? "-5%" : "20%",
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left — Text Content */}
        <div className="space-y-6">
          <div className="hero-text-animate opacity-0">
            <span className="text-lg md:text-xl font-bold uppercase tracking-widest">
              Hi, I am
            </span>
          </div>

          <h1 className="hero-text-animate opacity-0 text-hero font-black uppercase tracking-tighter leading-none">
            VIDYUSH
            <br />
            <span className="text-outline">SINGH</span>
          </h1>

          <div className="flex flex-wrap gap-3 hero-text-animate opacity-0">
            {["Frontend Developer", "UI/UX Designer", "Freelancer", ].map(
              (role, i) => (
                <Badge
                  key={role}
                  color={
                    i === 0
                      ? "bg-brutal-red"
                      : i === 1
                        ? "bg-brutal-yellow"
                        : i === 2
                          ? "bg-brutal-violet"
                          : "bg-brutal-white"
                  }
                  className="hero-badge-animate opacity-0"
                >
                  {role}
                </Badge>
              )
            )}
          </div>

          <p className="hero-text-animate opacity-0 text-lg md:text-xl font-bold max-w-lg leading-relaxed mt-4">
            Building bold, fast, and memorable digital experiences.
          </p>
        </div>

        {/* Right — Image */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={imageRef}
            className="hero-image-animate opacity-0 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ perspective: "1000px" }}
          >
            {/* Decorative background shape */}
            <div
              className="absolute -inset-4 bg-brutal-yellow brutal-border-lg -z-10"
              style={{
                transform: `rotate(${isHovered ? "3deg" : "-3deg"})`,
                transition: "transform 0.4s ease",
              }}
            />

            <div
              className="brutal-border-lg overflow-hidden bg-brutal-red relative"
              style={{
                transform: `rotate(${isHovered ? "-3deg" : "4deg"})`,
                transition: "transform 0.4s ease",
                width: "clamp(280px, 30vw, 420px)",
                height: "clamp(340px, 36vw, 520px)",
              }}
            >
              <Image
                src="/images/Vidyush.png"
                alt="Vidyush Singh — Developer, Designer, Freelancer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 280px, 420px"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 animate-float z-10">
              <Badge color="bg-brutal-red" className="text-base">
                ✦ Available for work
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 brutal-border rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-black rounded-full animate-slide-up" />
        </div>
      </div>
    </section>
  );
}
