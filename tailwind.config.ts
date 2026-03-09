import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        "faded-heavy": "0 0 54px 0 rgba(0, 0, 0, 0.75)",
      },
      colors: {
        accent: {
          blue: "#2196F3",
          cyan: "#4FC3F7",
          // Base color
          ice: "#E5F2F8",
          // 40% Opacity variant (approximate hex: #E5F2F866)
          "ice-muted": "rgba(229, 242, 248, 0.4)",
          orange: "#E8663C",
          "orange-hover": "#D4562E",
        },
        navy: {
          600: "#1A3560",
          700: "#122B4D",
          800: "#0E2240",
          900: "#081222",
          bar: "#060E1A",
          DEFAULT: "#0E2240",
        },
      },
      fontFamily: {
        krona: ["var(--font-krona)", "sans-serif"],
        messina: ["var(--font-messina)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-messina)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        md: ["0.9375rem", { lineHeight: "1.5rem" }], // 15px
        xs: ["12.72px", { letterSpacing: "0.015em", lineHeight: "1.65" }], // 12.72px
      },
      letterSpacing: {
        "widest-custom": "0.35em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
};

export default config;
