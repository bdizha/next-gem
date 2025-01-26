/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        brand: {
          50: '#F5F7FF',
          100: '#EBF0FF',
          200: '#D6E0FF',
          300: '#B3C5FF',
          400: '#809FFF',
          500: '#4D7AFF',  // Primary brand color
          600: '#1A55FF',
          700: '#0040FF',
          800: '#0033CC',
          900: '#002699',
        },
        background: {
          DEFAULT: '#0A0A0B',
          50: '#F7F7F8',
          100: '#E3E3E7',
          200: '#C7C7CF',
          300: '#9D9DAC',
          400: '#737389',
          500: '#4F4F66',
          600: '#363643',
          700: '#232329',
          800: '#151517',
          900: '#0A0A0B',
        },
        accent: {
          yellow: '#FFB800',
          purple: '#7C3AED',
          green: '#10B981',
          red: '#EF4444',
        }
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(77, 122, 255, 0.25)',
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
