/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dashBoard-color": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      textColor: {
        "text-b":"rgba(25, 25, 25, 1)",
        "text-s":"rgba(0, 0, 0, 0.5)",
      }
    },
  },
  plugins: [],
};
