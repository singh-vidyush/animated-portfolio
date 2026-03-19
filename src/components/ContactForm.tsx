"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [popup, setPopup] = useState<"success" | "error" | null>(null);

  const showPopup = (type: "success" | "error") => {
    setPopup(type);

    setTimeout(() => {
      setPopup(null);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showPopup("success");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        showPopup("error");
      }
    } catch {
      showPopup("error");
    }
  };

  const inputStyles = `
    w-full bg-cream brutal-border brutal-shadow-sm
    px-5 py-4 text-base font-bold
    placeholder:text-black/30 placeholder:font-bold
    focus:outline-none focus:shadow-brutal-md focus:translate-x-[-2px] focus:translate-y-[-2px]
    transition-all duration-200
  `;

  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="space-y-6 max-w-xl"
      >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-black uppercase tracking-widest mb-2"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-black uppercase tracking-widest mb-2"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-black uppercase tracking-widest mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Tell me about your project..."
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`${inputStyles} resize-none`}
        />
      </div>

      <Button
        type="submit"
        variant={submitted ? "secondary" : "primary"}
        size="lg"
        className="w-full md:w-auto"
      >
        {submitted ? (
          "Message Sent! ✓"
        ) : (
          <>
            Send Message
            <Send size={18} strokeWidth={3} className="ml-2" />
          </>
        )}
      </Button>
    </form>

      {/* Popup UI (Neo-Brutalism Style) */}
      {popup && (
        <div className="fixed bottom-6 right-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-4 font-bold z-[100]">
          {popup === "success"
            ? "Message sent. Vidyush will contact you soon..."
            : "Something went wrong, Please try again..."}
        </div>
      )}
    </>
  );
}
