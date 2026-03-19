"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        bg-cream brutal-border-lg brutal-shadow-md
        px-4 md:px-8 py-3
        flex items-center justify-between
        w-[70%] max-w-6xl
        transition-all duration-300
        ${scrolled ? "rotate-0 top-2" : "rotate-[-0.5deg]"}
      `}
    >
      {/* Logo */}
      <button
        id="nav-logo"
        onClick={() => scrollToSection("#top")}
        className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer hover:text-brutal-red transition-colors"
      >
        VIDYUSH
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
            onClick={() => scrollToSection(link.href)}
            className="font-bold text-base uppercase tracking-wide hover:text-brutal-red transition-colors cursor-pointer relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brutal-red transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button
          id="nav-connect-btn"
          variant="primary"
          size="sm"
          onClick={() => scrollToSection("#contact")}
        >
          LET&apos;S CONNECT
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        id="mobile-menu-toggle"
        className="md:hidden brutal-border p-2 hover:bg-brutal-yellow transition-colors cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X size={24} strokeWidth={3} />
        ) : (
          <Menu size={24} strokeWidth={3} />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 mt-2 bg-cream brutal-border-lg brutal-shadow-lg p-6 flex flex-col gap-4 md:hidden animate-slide-up"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-bold text-lg uppercase tracking-wide text-left hover:text-brutal-red transition-colors cursor-pointer py-2 border-b-4 border-black/10"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="primary"
            size="md"
            onClick={() => scrollToSection("#contact")}
            className="mt-2"
          >
            LET&apos;S CONNECT
          </Button>
        </div>
      )}
    </nav>
  );
}
