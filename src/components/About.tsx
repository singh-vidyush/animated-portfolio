"use client";

import React, { useEffect, useRef } from "react";
import { ABOUT_TEXT } from "@/lib/constants";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 80, opacity: 0, rotate: -3 },
          {
            y: 0,
            opacity: 1,
            rotate: -1.5,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    animate();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background decorative text */}
      <span className="bg-text" style={{ top: "10%", right: "-10%" }}>
        ABOUT
      </span>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left — empty spacing (1/3 width) */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-brutal-yellow brutal-border brutal-shadow-sm rotate-12" />
            <div className="w-16 h-16 bg-brutal-red brutal-border brutal-shadow-sm -rotate-6 ml-8" />
            <div className="w-12 h-12 bg-brutal-violet brutal-border brutal-shadow-sm rotate-3 ml-2" />
          </div>
        </div>

        {/* Right — content card (2/3 width) */}
        <div className="lg:col-span-2" ref={cardRef}>
          <div
            className="bg-brutal-violet brutal-border-lg brutal-shadow-lg p-8 md:p-12"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <h2 className="text-section font-black uppercase tracking-tight mb-6">
              About
              <span className="text-outline ml-3">Me</span>
            </h2>

            <p className="text-lg md:text-xl font-bold leading-relaxed max-w-2xl">
              {ABOUT_TEXT}
            </p>

            {/* Stats row */}
            {/* <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "Projects", value: "20+" },
                { label: "Clients", value: "15+" },
                { label: "Years", value: "3+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center"
                >
                  <div className="text-3xl md:text-4xl font-black">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">React.js</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">Next.js</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">tailwindCSS</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">Docker</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">MongoDB</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">Linux</div>
              </div>
              <div
                className="bg-cream brutal-border brutal-shadow-sm px-6 py-4 text-center">
                <div className="text-sm font-bold uppercase tracking-wider mt-1">n8n</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
