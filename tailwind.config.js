/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'giveback-green': '#00ff88',
        'dark-navy': '#0a0e27',
        'dark-blue': '#1a1f3a',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0a0e27, #000000)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fall': 'fall linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}





