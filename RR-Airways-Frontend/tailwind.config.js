/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d9',
          300: '#f4a8ba',
          400: '#ec7496',
          500: '#e04876',
          600: '#8B1F2F', // Soft Maroon Accent
          700: '#5C0A1D', // Primary Maroon
          800: '#4a0817',
          900: '#3f0714',
        },
        maroon: {
          primary: '#5C0A1D',
          accent: '#8B1F2F',
        },
        gold: {
          50: '#fefdf8',
          100: '#fefbf0',
          200: '#fcf4d9',
          300: '#f9e8b8',
          400: '#f5d894',
          500: '#C9B37E', // Gold Accent
          600: '#b8a06e',
          700: '#9a8559',
          800: '#7d6b4a',
          900: '#65573d',
        },
        gray: {
          50: '#F4F4F4', // Warm Gray
          100: '#f0f0f0',
          200: '#e5e5e5',
          300: '#D3D3D3', // Shadow Gray
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2E2E2E', // Dark Gray
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}