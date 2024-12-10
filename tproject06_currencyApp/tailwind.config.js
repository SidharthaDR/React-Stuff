/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // We added custom colors
      colors: {
        'kingVoilet': '#8852be8d',
        'kingGreen' : {
            DEFAULT: '#64b36fcd',
            'half' : '#64b36f',
            'full' : '#519059',
            '1000' : '#467d4d',
        },
        // 'kingGreen-half' : '#64b36f',
        // 'kingGreen-full' : '#519059',

      },
    },
  },
  plugins: [],
}

