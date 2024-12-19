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
        foreground: "var(--foreground)",
        "dark-purple": "#5C4D84",
        "dark-gray": "#3C3C3C",
        "light-purple": "#F1EAFF",
      },
      fontFamily: {
        body: ['"Libre Franklin"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
