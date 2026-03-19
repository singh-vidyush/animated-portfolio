"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[0];
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      id={`project-card-${project.id}`}
      className="group block"
    >
      <div className="brutal-card overflow-hidden bg-cream">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden brutal-border border-t-0 border-l-0 border-r-0">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-brutal-red brutal-border brutal-shadow-sm p-3">
                <ExternalLink size={24} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-sm font-bold uppercase tracking-widest opacity-60">
            {project.category}
          </span>
          <h3 className="text-card font-black uppercase tracking-tight mt-2">
            {project.title}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:text-brutal-red transition-colors">
            <span>View Project</span>
            <ExternalLink size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".works-card-animate",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animate();
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <span className="bg-text" style={{ top: "5%", right: "-5%" }}>
        PROJECTS
      </span>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-section font-black uppercase tracking-tight">
              My
              <span className="text-outline ml-3">Work</span>
            </h2>
            <p className="text-lg md:text-xl font-bold mt-4 max-w-lg">
              A selection of projects I&apos;ve built — from landing pages and e-commerce to AI
              applications.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="works-card-animate opacity-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
