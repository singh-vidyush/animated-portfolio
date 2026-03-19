"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({
  children,
  color = "bg-brutal-yellow",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        ${color} brutal-border brutal-shadow-sm
        px-3 py-1 text-sm font-black uppercase tracking-wider
        inline-block
        ${className}
      `}
    >
      {children}
    </span>
  );
}
