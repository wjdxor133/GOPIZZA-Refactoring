import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== "production",
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default { store, persistor };
