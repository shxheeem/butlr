/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        thin: ['var(--font-thin)'],
        light: ['var(--font-light)'],
        hand: ['var(--font-hand)'],
        pixel: ['var(--font-pixel)'],
        geist: ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)']
      },
    },
  },
  plugins: [],
};
