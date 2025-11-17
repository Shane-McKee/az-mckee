import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { lightgray: "#f9f9f9", gray600: "#eaeaea", charcoal: "#1F2328", graphite: "#3C3F44", ink: "#2A2326", muted: "#7A6E72" },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,.08)" }
    },
  },
  plugins: [],
};
export default config;
