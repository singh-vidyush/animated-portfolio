import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidyush Singh — Developer, Designer, Freelancer",
  description:
    "Portfolio of Vidyush Singh — a full-stack developer, designer, and freelancer building bold, fast, and memorable digital experiences. Available for freelance work and collaboration.",
  keywords: [
    "Vidyush Singh",
    "portfolio",
    "developer",
    "designer",
    "freelancer",
    "frontend developer",
    "full-stack developer",
    "web development",
    "UI/UX",
    "AI workflow",
  ],
  authors: [{ name: "Vidyush Singh" }],
  openGraph: {
    title: "Vidyush Singh — Developer, Designer, Freelancer",
    description:
      "Building bold, fast, and memorable digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-grotesk noise-overlay">{children}</body>
    </html>
  );
}
