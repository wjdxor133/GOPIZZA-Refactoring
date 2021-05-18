import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes/Routes";
import GlobalStyle from "styles/Global-styles";
import theme from "styles/theme";
import { ThemeProvider } from "styles/theme-components";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
