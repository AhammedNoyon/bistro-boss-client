/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        serviceBg: "url('/src/assets/assets/home/chef-service.jpg')",
        featuredBg: "url('/src/assets/assets/home/featured.jpg')",
        loginRegisterBg: "url('/src/assets/assets/others/authentication.png')",
      },
    },
    dropShadow: {
      featuredShadow: "rgba(21, 21, 21, 0.7)",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
