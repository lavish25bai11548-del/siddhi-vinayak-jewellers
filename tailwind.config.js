/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#070709',
          obsidian: '#0d0d12',
          surface: '#121218',
          card: '#161622',
          cardHover: '#1c1c2b',
          border: 'rgba(212, 175, 55, 0.2)',
          borderGlow: 'rgba(212, 175, 55, 0.45)',
          muted: '#8e8e9f',
          cream: '#f9f6f0',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f7f1e5',
          200: '#eedfc2',
          300: '#dfc593',
          400: '#cfab62',
          500: '#d4af37', // Classic metallic gold
          600: '#b8922c',
          700: '#947223',
          800: '#75591e',
          900: '#5c451a',
          light: '#f9e79f',
          antique: '#c59b27',
          rose: '#e0a98b',
          white: '#e8e8e8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Bodoni Moda', 'Playfair Display', 'serif'],
        hindi: ['Rozha One', 'serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.03) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255, 235, 160, 0.2) 50%, transparent 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 20%, #1a1a24 0%, #070709 85%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 10px 30px rgba(212, 175, 55, 0.28)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
