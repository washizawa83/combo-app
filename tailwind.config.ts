import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#28292B',
        variant: '#2E2B2B',
        accentRed: '#F64E4E',
        accentGreen: '#3ADD55',
        accentBlue: '#434DD5',
        accentEmpty: '#36363696'
      },
      fontFamily: {
        rubikOne: ['var(--rubik-one)']
      },
      width: {
        content: '1280px'
      }
    },
  },
  plugins: [],
} satisfies Config
