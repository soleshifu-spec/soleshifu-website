import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f2ed',
          100: '#dedbd4',
          300: '#a8a7a2',
          500: '#747570',
          700: '#343638',
          800: '#1b1d1f',
          900: '#101112',
          950: '#070707'
        },
        silver: {
          100: '#ebe9e4',
          300: '#c4c2bc',
          500: '#8e908c',
          700: '#53565a'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter Variable', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 28px 90px rgba(0, 0, 0, 0.26)',
        glow: '0 0 70px rgba(235, 233, 228, 0.08)'
      },
      backgroundImage: {
        'surface-noise':
          'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.045), transparent 42%), linear-gradient(135deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0))'
      }
    }
  },
  plugins: []
};

export default config;
