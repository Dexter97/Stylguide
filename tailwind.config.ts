import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Arial']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      colors: {
        brand: {
          50: '#f7f9fb',
          100: '#ecf1f5',
          300: '#cad4de',
          600: '#475d70',
          800: '#233545'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
