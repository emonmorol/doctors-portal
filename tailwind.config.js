module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "doctor-banner": "url('/src/assets/images/chair.png')",
        "doctor-appointment": "url('/src/assets/images/appointment.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        portalTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
