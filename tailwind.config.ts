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
        ink: {
          DEFAULT: "#1C2B39",
          50: "#EEF1F4",
          100: "#D6DEE5",
          400: "#4C6478",
          700: "#1C2B39",
          900: "#111A22",
        },
        sage: {
          DEFAULT: "#EDF1EC",
          100: "#F5F7F4",
          200: "#E4EBE2",
        },
        brass: {
          DEFAULT: "#B8863E",
          400: "#CBA05D",
          600: "#9C6E2E",
        },
        forest: {
          DEFAULT: "#3A5A50",
          600: "#2C453D",
        },
        charcoal: "#2A2A28",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-public-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1160px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,43,57,0.06), 0 8px 24px rgba(28,43,57,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
