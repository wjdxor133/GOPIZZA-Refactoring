import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default { store, persistor };
