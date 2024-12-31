import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        //#141e30 → #243b55
        // 'gradient-to-r-custom': 'linear-gradient(to right, #2c3e50, #bdc3c7 )',
        'gradient-royal': 'linear-gradient(to right, #141e30, #243b55 )',
      },
      rotate: {
        '10': '10deg', // Add custom rotate-10 utility
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)', // Start from bottom
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // Move to original position
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
