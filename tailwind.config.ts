import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        electric: "#00f0ff",
        violet: "#8b5cf6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 240, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
