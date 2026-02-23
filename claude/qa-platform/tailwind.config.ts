import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B4F6C",
        secondary: "#01BAEF",
        accent: "#20BF55",
        dark: "#0A2342",
        "light-bg": "#F4F7FA",
        text: "#1A1A2E",
        "text-light": "#64748B",
        warning: "#E74C3C",
        gold: "#F59E0B",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Inter"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
