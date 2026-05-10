import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        ink: {
          50:  "#f7f4ee",
          100: "#ece6d7",
          200: "#c9bfa6",
          300: "#9a8f72",
          400: "#5e5641",
          500: "#1a1814",
        },
        navy: {
          900: "#0a0e1a",
          800: "#10162a",
          700: "#181f3a",
          600: "#222b4d",
        },
        amber: {
          accent: "#f4a300",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(244,163,0,0.35), 0 8px 30px rgba(244,163,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
