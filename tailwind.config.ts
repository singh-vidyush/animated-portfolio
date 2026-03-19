import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF5",
        brutal: {
          black: "#000000",
          red: "#FF6B6B",
          yellow: "#FFD93D",
          violet: "#C4B5FD",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 8rem)", { lineHeight: "1" }],
        section: ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1.1" }],
        card: ["clamp(1.5rem, 3vw, 3rem)", { lineHeight: "1.2" }],
      },
      boxShadow: {
        "brutal-sm": "4px 4px 0px #000000",
        "brutal-md": "8px 8px 0px #000000",
        "brutal-lg": "12px 12px 0px #000000",
      },
      borderWidth: {
        "brutal": "4px",
        "brutal-lg": "8px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
