import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#E8E5F2',
          2: '#291D4F',
          3: '#231A45',
          4: '#1D193E',
          5: '#171635',
          6: '#13132B',
          7: '#0C1124',
        },
        accentGreen: {
          1: '#16F0B3',
          2: '#39D5AE',
          3: '#5DB9AA',
          4: '#829DA6',
        },
        accentPink: {
          1: '#E8469B',
          2: '#D644A7',
          3: '#C643B3',
          4: '#B642C1',
          5: '#A53ECE',
          6: '#953BD9',
          7: '#8339E6',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
