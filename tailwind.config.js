/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': ['1.75rem', { lineHeight: '2rem' }],
        '4.5xl': ['2.5rem', { lineHeight: '1.1' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.1' }],
        '6.5xl': ['4rem', { lineHeight: '1.05' }],
      },
      colors: {
        'app-blue-primary': '#0284c7',
        'app-blue-hover': '#0369a1',
        'app-bg-light': '#f8fafc',
        'app-green': '#22c55e',
        'app-yellow-light': '#fef9c3',
        'app-dark-blue': '#0f172a',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
