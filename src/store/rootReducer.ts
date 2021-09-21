import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/user';
import { cartReducer } from './cart/cart';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
