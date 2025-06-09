import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in-delay-0': 'fadeIn 0.8s 0s forwards',
        'fade-in-delay-200': 'fadeIn 0.8s 0.2s forwards',
        'fade-in-delay-300': 'fadeIn 0.8s 0.3s forwards',
        'fade-in-delay-400': 'fadeIn 0.8s 0.4s forwards',
        'fade-in-delay-600': 'fadeIn 0.8s 0.6s forwards',
        'slide-up-delay-300': 'slideUp 0.8s 0.3s forwards',
      },
    },
  },
  plugins: [],
}

export default config 