"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen">
      <Navbar />
      <Hero />

      {/* Section divider */}
      <div className="w-full flex justify-center py-4">
        <div className="w-32 h-2 bg-black" />
      </div>

      <About />

      <div className="w-full flex justify-center py-4">
        <div className="w-32 h-2 bg-black" />
      </div>

      <Services />

      <div className="w-full flex justify-center py-4">
        <div className="w-32 h-2 bg-black" />
      </div>

      <Works />

      <Footer />
    </main>
  );
}
