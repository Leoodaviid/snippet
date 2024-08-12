import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f1f5f9",
          dark: "#1D232A",
        },
        secondary: {
          light: "#ffffff",
          dark: "#15191C",
        },
        blue: {
          light: "#3b82f6",
          dark: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};
export default config;
