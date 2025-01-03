import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp';

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
        primary: "#12499C",
        content: "#111827",
        gray: "#71717a",
      },
    },
  },
  plugins: [lineClamp],
} satisfies Config;
