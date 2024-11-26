import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#071624",
        primaryText: "#E4B40D",
      },
      fontFamily: {
        neue: "var(--font-neue)",
      },
      boxShadow: {
        custom:
          "inset 0px 0px 24px rgba(255, 255, 255, 0.26), inset 0px 20.0205px 40px rgba(194, 255, 255, 0.25), inset -35.0358px -50.0511px 80.1px rgba(228, 180, 13, 0.55)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
