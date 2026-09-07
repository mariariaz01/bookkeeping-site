import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#4A2545",
          600: "#5C3157",
          900: "#2E1730",
        },
        gold: {
          DEFAULT: "#E0A32E",
          400: "#F0C368",
          600: "#B08A2E",
        },
        cream: {
          DEFAULT: "#FCF8F0",
          100: "#F5EFE2",
        },
        ink: {
          DEFAULT: "#201F1D",
          100: "#E4DFD1",
          400: "#6E6B67",
          700: "#2C2A28",
          900: "#161514",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1160px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(32,26,34,0.06), 0 8px 24px rgba(32,26,34,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
