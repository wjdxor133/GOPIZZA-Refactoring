import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes/Routes";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
