import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "1": "repeat(1, minmax(0, 1fr))",
        "2": "repeat(2, minmax(0, 1fr))",
        "3": "repeat(3, minmax(0, 1fr))",
        "4": "repeat(4, minmax(0, 1fr))",
        "5": "repeat(5, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
