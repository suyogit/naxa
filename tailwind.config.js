/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FCDC1C",
        customham:"#EFA901",
        customback:"#F4F4F4",
        customitem:"#E9EBFF"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'service': "url('@/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
