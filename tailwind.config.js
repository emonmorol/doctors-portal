module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "doctor-banner": "url('/src/assets/images/bg.png')",
        "doctor-appointment": "url('/src/assets/images/appointment.png')",
        "doctor-footer": "url('/src/assets/images/footer1.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        portalTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          google: "#3b5998",
          facebook: "#55acee",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
