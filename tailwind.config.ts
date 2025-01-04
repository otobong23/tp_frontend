import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

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
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #5743EB4D,#5743EB4D, transparent, transparent)',
        'custom-linear': 'linear-gradient(to right, #4832F2, #1992C9)'
      },
    },
  },
  plugins: [scrollbarHide]
} satisfies Config;
