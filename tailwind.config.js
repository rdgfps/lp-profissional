/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f8f4',
          100: '#e7f0e7',
          200: '#cfe1cf',
          300: '#a8c9a8',
          400: '#7aaa7a',
          500: '#558c55',
          600: '#3f6e3f',
          700: '#335733',
          800: '#2a452a',
          900: '#233923',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#faf7ef',
          200: '#f4edda',
          300: '#ecdfbf',
          400: '#e0cc9e',
          500: '#d4b87e',
        },
        stone: {
          warm: '#7c6f5e',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(85,140,85,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(85,140,85,0)' },
        },
      },
      boxShadow: {
        'soft':   '0 2px 24px 0 rgba(60,80,60,0.08)',
        'card':   '0 4px 32px 0 rgba(60,80,60,0.10)',
        'hover':  '0 8px 40px 0 rgba(60,80,60,0.16)',
      },
    },
  },
  plugins: [],
}
