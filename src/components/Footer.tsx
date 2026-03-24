"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Instagram, Github, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={24} strokeWidth={3} />,
  Github: <Github size={24} strokeWidth={3} />,
  Linkedin: <Linkedin size={24} strokeWidth={3} />,
};

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Contact Section */}
      <div className="bg-cream section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Heading */}
            <div>
              <h2 className="text-section font-black uppercase tracking-tight mb-4">
                Let&apos;s
                <br />
                <span className="text-outline">Talk</span>
              </h2>
              <p className="text-lg md:text-xl font-bold max-w-md leading-relaxed mb-8">
                Got a project idea? A question? Or just want to say hi? Drop me
                a message and I&apos;ll get back to you.
              </p>

              {/* Decorative shapes */}
              <div className="hidden lg:flex gap-4 mt-8">
                <div className="w-16 h-16 bg-brutal-red brutal-border brutal-shadow-sm rotate-12 animate-float" />
                <div
                  className="w-12 h-12 bg-brutal-yellow brutal-border brutal-shadow-sm -rotate-6"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="w-14 h-14 bg-brutal-violet brutal-border brutal-shadow-sm rotate-3 animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>

            {/* Right — Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-cream brutal-border-lg border-l-0 border-r-0 border-b-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left — Branding */}
          <div className="font-black text-2xl tracking-tighter">
            VIDYUSH
          </div>

          {/* Center — email */}
          <div className="text-xl font-bold opacity-80 text-center">
            singhvidyush@gmail.com
          </div>
          <div className="text-xl font-bold opacity-80 text-center">
            Download Resume:{" "}
            <a
              href="https://singh-vidyush.github.io/re/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brutal-red transition-colors duration-200"
            >
              LINK
            </a>
          </div>

          {/* Right — Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                id={`social-${link.label.toLowerCase()}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-cream/30 hover:border-brutal-red hover:text-brutal-red transition-all duration-200 hover:translate-y-[-2px]"
                aria-label={link.label}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
