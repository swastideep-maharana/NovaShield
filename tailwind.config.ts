import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "#7c3aed", // Violet 600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#db2777", // Pink 600
          foreground: "#ffffff",
        },
        // Custom Cosmic Palette
        cosmic: {
            950: "#030014", // Deep Space Base
            900: "#0f0529",
            800: "#1a0b3d",
            500: "#8b5cf6", // Violet
            400: "#a78bfa",
            300: "#c4b5fd",
        },
        glass: {
            DEFAULT: "rgba(255, 255, 255, 0.03)",
            hover: "rgba(255, 255, 255, 0.06)",
            border: "rgba(255, 255, 255, 0.08)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        meteor: "meteor 5s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        handwriting: ["cursive"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
