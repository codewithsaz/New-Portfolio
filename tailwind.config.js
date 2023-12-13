const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      accentPrimary: "#e400e4",
      accentBackground: "#181229",
      accentSecondary: "#6F45AD",
      accentSecondaryNew: "#342857",
      accentTertiary: "#FFC600",
      lightaccentPrimary: "#0D18C7",
      lightaccentBackground: "#000000",
      lightaccentSecondary: "#6F45AD",
      lightaccentTertiary: "#F57C00",
    },
    extend: {},
  },
  plugins: [],
});
