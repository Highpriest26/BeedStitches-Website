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
        brand: {
          black: "#0B0B0B",
          charcoal: "#191919",
          surface: "#141414",
          gold: "#D4AF37",
          "gold-highlight": "#F2C94C",
          "off-white": "#F7F4EE",
          white: "#FFFFFF",
          muted: "#B9B1A4",
        },
      },
      fontFamily: {
        serif: ["var(--font-raleway)", "system-ui", "sans-serif"],
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        luxury: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
