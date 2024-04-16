import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    blue: {
      200: "#c2d9f5",
      300: "#8dbcec",
      400: "#4f98e1",
      500: "#297bce",
      600: "#1a5faf",
      700: "#164c8e",
      800: "#164276",
      900: "#16345a",
      950: "#102441",
    },
    commons: {
      50: "#f6f6f6",
      100: "#e7e7e7",
      200: "#d1d1d1",
      300: "#b0b0b0",
      400: "#888888",
      500: "#6d6d6d",
      600: "#5d5d5d",
      700: "#4f4f4f",
      800: "#454545",
      900: "#3d3d3d",
      950: "#212121",
    },
    yellow: {
      50: "#fdfee8",
      100: "#faffc2",
      200: "#f9ff88",
      300: "#fdff43",
      400: "#fff510",
      500: "#efda03",
      600: "#e0bb00",
      700: "#a47c04",
      800: "#87600c",
      900: "#734f10",
      950: "#432a05",
    },
  },
});

export default theme;
