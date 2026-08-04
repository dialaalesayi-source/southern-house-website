import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Southern House — parent brand palette
        southern: {
          navy: "#1B3A5C",
          terracotta: "#E8722C",
          ivory: "#F4EFE9",
          charcoal: "#2D2D2D",
        },
        // Fun Place — flagship brand palette
        funplace: {
          coral: "#FF5A5F",
          teal: "#00B8A9",
          yellow: "#FFC93C",
          cool: "#F7F9FC",
        },
        // shared status colors
        status: {
          open: "#10B981",
          soon: "#F59E0B",
        },
        slate: {
          DEFAULT: "#6B7280",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-plex-arabic)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        // Tinted elevation system — navy-tinted, never pure black
        card: "0 2px 8px rgba(27,58,92,0.06)",
        "card-hover": "0 12px 32px rgba(27,58,92,0.12)",
        modal: "0 24px 64px rgba(27,58,92,0.18)",
      },
      maxWidth: {
        content: "1320px",
      },
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
