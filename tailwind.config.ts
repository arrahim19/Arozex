import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#081225",
          navy: "#0F1F47",
          blue: "#1D4ED8",
          sky: "#E8F1FF",
          line: "#D8E4FF",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(8, 18, 37, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(29, 78, 216, 0.18), transparent 42%), radial-gradient(circle at bottom right, rgba(15, 31, 71, 0.14), transparent 38%)",
      },
    },
  },
  plugins: [],
};

export default config;
