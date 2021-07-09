import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  basicWidth: "320px",

  colors: {
    white: "#ffffff",
    black: "#000000",
    light_gray: "#f6f6f6",
    dark_gray: "#7b7b7b",
    darker_gray: "#8d837a",
    navy: "#08143F",
    brown: "#4c2003",
    primary_lighter: "#fff3e0",
    primary_light: "#ff852B",
    primary_regular: "#ff6d00",
  },

  elevations: {
    elevation_light: "0px 2px 2px rgba(0, 0, 0, 0.28)",
    elevation_heavy: "0px 4px 10px rgba(0, 0, 0, 0.30)",
  },
};

export { theme };
