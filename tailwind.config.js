/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Snapchat Brand Colors
        snap: {
          yellow: '#FFFC00',
          'yellow-dark': '#FFE100',
          white: '#FFFFFF',
          black: '#000000',
          ghost: '#F7F7F7',
          'ghost-dark': '#161618',
          blue: '#0EADFF',
          purple: '#8B5FBF',
          pink: '#FF6B9D',
          green: '#4AC8EA',
          red: '#FF4757',
          orange: '#FF6348',
        },
        // Dark mode variations
        dark: {
          primary: '#161618',
          secondary: '#262626',
          tertiary: '#404040',
          border: '#2A2A2A',
          text: '#FFFFFF',
          'text-secondary': '#B3B3B3',
        },
        // Light mode variations  
        light: {
          primary: '#FFFFFF',
          secondary: '#F7F7F7',
          tertiary: '#EEEEEE',
          border: '#E0E0E0',
          text: '#000000',
          'text-secondary': '#666666',
        }
      },
      fontFamily: {
        'snap': ['Helvetica Neue', 'system-ui', 'sans-serif'],
        'snap-bold': ['Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'snap-xs': ['12px', { lineHeight: '16px', letterSpacing: '0.01em' }],
        'snap-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
        'snap-base': ['16px', { lineHeight: '24px', letterSpacing: '0.01em' }],
        'snap-lg': ['18px', { lineHeight: '28px', letterSpacing: '0.01em' }],
        'snap-xl': ['20px', { lineHeight: '32px', letterSpacing: '0.01em' }],
        'snap-2xl': ['24px', { lineHeight: '36px', letterSpacing: '0.01em' }],
        'snap-3xl': ['30px', { lineHeight: '40px', letterSpacing: '0.01em' }],
        'snap-4xl': ['36px', { lineHeight: '44px', letterSpacing: '0.01em' }],
      },
      spacing: {
        'snap-xs': '4px',
        'snap-sm': '8px',
        'snap-md': '16px',
        'snap-lg': '24px',
        'snap-xl': '32px',
        'snap-2xl': '48px',
        'snap-3xl': '64px',
      },
      borderRadius: {
        'snap-sm': '8px',
        'snap-md': '12px',
        'snap-lg': '16px',
        'snap-xl': '20px',
        'snap-2xl': '24px',
        'snap-full': '999px',
      },
      boxShadow: {
        'snap-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'snap-md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'snap-lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'snap-xl': '0 12px 24px rgba(0, 0, 0, 0.18)',
      },
      animation: {
        'snap-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'snap-bounce': 'bounce 1s infinite',
        'snap-fade': 'fadeIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}

