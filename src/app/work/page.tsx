"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function WorkPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;

      gsap.fromTo(
        ".work-item-animate",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    };

    animate();
  }, []);

  return (
    <div ref={pageRef} className="bg-cream min-h-screen">
      {/* Header */}
      <div className="section-padding pb-0 pt-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-8">
              <ArrowLeft size={18} strokeWidth={3} className="mr-2" />
              Back Home
            </Button>
          </Link>

          <h1 className="text-hero font-black uppercase tracking-tighter mb-4">
            All
            <span className="text-outline ml-4">Projects</span>
          </h1>
          <p className="text-lg md:text-xl font-bold max-w-xl mb-12">
            A comprehensive collection of projects I&apos;ve built across
            various domains.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item-animate opacity-0 group block"
            >
              <div className="brutal-card overflow-hidden bg-cream">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-brutal-red brutal-border brutal-shadow-sm p-3">
                        <ExternalLink size={24} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
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
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-black text-cream py-6 text-center">
        <span className="font-black text-lg tracking-tighter">
          VIDYUSH
        </span>
        <span className="mx-4">·</span>
        <span className="text-sm font-bold opacity-60">
          © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
