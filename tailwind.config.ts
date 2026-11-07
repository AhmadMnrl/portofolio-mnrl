import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151719",
        panel: "#202426",
        lime: "#C4F56A",
        paper: "#F2F3ED",
        muted: "#8C9691"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-dm-sans)"]
      }
    }
  },
  plugins: []
};

export default config;
