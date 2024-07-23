import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './Gemini/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'dark-bg': '#000000', // pitch black
        'dark-sidebar': '#2C2C2C', // dark grey for sidebar
        'dark-card': '#1E1E1E', // slightly lighter black for cards
        'light-icon': '#FFFFFF', // light white for icons and text
      },
      fontFamily: {
        Poppins: ['var--font-poppins']
      },
    },
  },
  plugins: [],
}

export default config;
