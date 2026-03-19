"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  rotate?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  bgColor = "bg-brutal-white",
  rotate = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        ${bgColor} brutal-border p-6 md:p-8
        ${hover ? "brutal-card" : "brutal-shadow-md"}
        ${rotate}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
