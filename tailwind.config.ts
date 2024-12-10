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
      },
      fontFamily: {
        sans: ['var(--fontHostGrotesk)', "sans-serif"],
      },
      boxShadow: {
        'custom-light': '0 4px 10px rgba(255, 255, 255, 0.2)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
