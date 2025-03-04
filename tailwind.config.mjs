/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          outfit: ["var(--font-outfit)"],
        },
      colors: {
        basic: {
          50: '#FFFFFF',
          100: '#F8F8F8',
          200: '#ADB5BD',
          300: '#666666',
          500: '#404040',
          600: '#000000',
        },
        green: {
          50: '#2F6B5A',
          100: '#1C5F4E',
          200: '#06372B',
        },
        red: {
          50: '#E80D0D',
        },
        yellow: {
          50: '#F8DD01',
        },
      },
    },
  },
  plugins: [],
};
