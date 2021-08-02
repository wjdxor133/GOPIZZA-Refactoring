import { DefaultTheme } from "styled-components";

const sizes = {
  desktop: "1024",
  tablet: "768",
  mobile: "480",
};

const theme: DefaultTheme = {
  screenSizes: {
    desktop: `(max-width: ${sizes.desktop}px)`,
    tablet: `(max-width: ${sizes.tablet}px)`,
    mobile: `(max-width: ${sizes.mobile}px)`,
  },

  colors: {
    white: "#ffffff",
    black: "#000000",
    gray: "#e5e5e5",
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
    elevation_regular: "0 8px 25px 0 rgb(0 0 0 / 10%)",
  },
};

export { theme };
