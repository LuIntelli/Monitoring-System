/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dashBoard-color": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "dp1": "8px 8px 48px 8px rgba(0, 0, 0, 0.08)",
        "dropShadow":"0px 40px 58px -20px rgba(112, 144, 176, 0.21)",
        "boxShadow":"0px 21px 58px -16px rgba(89, 118, 159, 0.5)"
      },
      textColor: {
        "text-b":"rgba(25, 25, 25, 1)",
        "text-s":"rgba(0, 0, 0, 0.5)",
      },
      
      
    },
  },
  plugins: [],
};
