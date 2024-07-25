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
        'dark-bg': '#000000', 
        'dark-sidebar': '#2C2C2C', 
        'dark-card': '#1E1E1E', 
        'light-icon': '#FFFFFF', 
      },
      fontFamily: {
        Poppins: ['var--font-poppins']
      },
    },
  },
  plugins: [],
}

export default config;
