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
        background: "var(--background)",
        "background-gray": "var(--background-gray)",
        foreground: "var(--foreground)",
        "black-300": "var(--black-300)",
        white: "var(--white)",
        blue: "var(--blue)",
        red: "var(--red)",
        "navy-100": "var(--navy-100)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-500": "var(--gray-500)",
        "gray-700": "var(--gray-700)",
      },
      screens: {
        "mb-md": "375px",
        "mb-lg": "414px",
        pc: "940px",
      },
      maxWidth: {
        "900": "900px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        "10xl-vw": "18.6vw",
        "10xl-fix": "198px",
      },
    },
  },
  plugins: [],
} satisfies Config;
