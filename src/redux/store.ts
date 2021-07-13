import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middlewars = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewars],
});

export const persistor = persistStore(store);

export default { store, persistor };
