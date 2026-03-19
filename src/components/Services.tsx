"use client";

import React, { useRef, useEffect } from "react";
import { SERVICES } from "@/lib/constants";

function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[0];
}) {
  return (
    <div
      className="brutal-card p-8 md:p-10 min-w-[300px] md:min-w-[380px] max-w-[420px] group cursor-pointer"
      style={{ backgroundColor: service.color }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-6xl md:text-7xl font-black opacity-20">
          {String(service.id).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-card font-black uppercase tracking-tight mb-4">
        {service.title}
      </h3>
      <p className="text-base md:text-lg font-bold leading-relaxed opacity-80">
        {service.description}
      </p>
      <div className="mt-6 w-12 h-1 bg-black group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept when the section is in view and container can scroll
      const rect = scrollContainer.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScrollLeft = scrollContainer.scrollLeft;

      // Check if we can scroll horizontally
      const canScrollRight = currentScrollLeft < maxScrollLeft - 5;
      const canScrollLeft = currentScrollLeft > 5;

      if (
        (e.deltaY > 0 && canScrollRight) ||
        (e.deltaY < 0 && canScrollLeft)
      ) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 2;
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".services-title",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animate();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <span className="bg-text" style={{ top: "5%", left: "-5%" }}>
        SERVICES
      </span>

      <div className="max-w-7xl mx-auto">
        <h2 className="services-title text-section font-black uppercase tracking-tight mb-4">
          What I
          <span className="text-outline ml-3">Do</span>
        </h2>

        <p className="services-title text-lg md:text-xl font-bold mb-12 max-w-xl">
          From concept to deployment — I handle the full spectrum of digital
          product creation.
        </p>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="horizontal-scroll-container"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* End spacer */}
          <div className="min-w-[40px] flex-shrink-0" />
        </div>

        {/* Scroll hint */}
        <div className="mt-6 flex items-center gap-3 opacity-60">
          <div className="w-8 h-0.5 bg-black" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Scroll horizontally →
          </span>
        </div>
      </div>
    </section>
  );
}
