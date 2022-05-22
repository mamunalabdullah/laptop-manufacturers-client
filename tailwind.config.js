module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        laptop: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3A9FF8",
          success: "#36F499",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#D7F99D",
          secondary: "#F3E68A",
          accent: "#4B5560",
          neutral: "#F3F4F6",
          "base-100": "#3F2937",
          info: "#98B8DD",
          success: "#1BBC70",
          warning: "#F54E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
