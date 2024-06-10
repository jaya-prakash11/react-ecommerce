/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   phn: "375px",

    //   // tablet: "640px",
    //   // // => @media (min-width: 640px) { ... }

    //   // laptop: "1024px",
    //   // // => @media (min-width: 1024px) { ... }

    //   // desktop: "1280px",
    //   // // => @media (min-width: 1280px) { ... }
    // },
    screens: {
      xs: "400px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
