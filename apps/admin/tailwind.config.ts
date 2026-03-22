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
        primary: "#ab2e15",
        "primary-container": "#cd462b",
        secondary: "#a43a37",
        tertiary: "#855000",
        gold: "#BA7517",
        background: "#faf9f6",
        surface: "#ffffff",
        "on-surface": "#1a1c1a",
        "on-surface-variant": "#59413c",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sacred: "48px 48px 16px 16px",
      },
    },
  },
  plugins: [],
};
export default config;
