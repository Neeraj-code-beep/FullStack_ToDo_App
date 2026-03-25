/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        // you can add custom colors here if needed
      },
    },
  },
  plugins: [],
};
