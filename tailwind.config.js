// / @type {import('tailwindcss').Config} */
// const config = {
//     content: [
//         "./src/app//.{js,jsx,ts,tsx}",
//         "./src/components/**/.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//         extend: {},

//     },
//     plugins: [daisyui],

// };

// export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
