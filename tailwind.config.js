/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F7F1E4',
          soft: '#FBF7EC',
          warm: '#F1E9D6',
          deep: '#EAE0C7',
        },
        ink: {
          DEFAULT: '#2B2A24',
          soft: '#4A473C',
          faint: '#7C7768',
        },
        tea: {
          50: '#EEF1E4',
          100: '#DEE6CB',
          200: '#C3D0A5',
          300: '#A3B87B',
          400: '#849C5B',
          500: '#5F7A3D',
          600: '#4C6431',
          700: '#3D5027',
          800: '#31401F',
          900: '#28341A',
        },
        gold: {
          50: '#FBF3DF',
          100: '#F5E4B4',
          200: '#EBCE7F',
          300: '#DDB454',
          400: '#C89A3B',
          500: '#AB812E',
          600: '#8C6A25',
          700: '#6E541D',
          800: '#584318',
          900: '#463513',
        },
        terracotta: {
          100: '#F3DCCB',
          300: '#E0A987',
          500: '#C97A50',
          600: '#AD6140',
          700: '#8A4D33',
        },
        success: {
          100: '#DCEBD6',
          500: '#4C8858',
          600: '#3B6E45',
          700: '#2E5636',
        },
        danger: {
          100: '#F3DAD6',
          500: '#B65C4E',
          600: '#9C483C',
          700: '#7C392F',
        },
        tri: {
          50: '#FBF4E3',
          100: '#F4E6C2',
          400: '#C9973F',
          500: '#AD7C2C',
          600: '#8E6320',
          900: '#3A2E14',
        },
      },
      borderRadius: {
        card: '16px',
        chip: '10px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,42,36,0.04), 0 6px 16px -8px rgba(43,42,36,0.10)',
        cardHover: '0 2px 4px rgba(43,42,36,0.06), 0 12px 24px -10px rgba(43,42,36,0.14)',
        glow: '0 0 0 1px rgba(173,124,44,0.18), 0 8px 28px -10px rgba(173,124,44,0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.35s ease-out both',
        shimmer: 'shimmer 1.6s linear infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
