/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CartTypes } from 'types/cart.types';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const INITIAL_STATE: CartTypes = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartHidden: (state, action) => {
      state.hidden = !action.payload;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.name !== action.payload.name);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItem: (state) => {
      state.cartItems = [];
    },
  },
});

export const { toggleCartHidden, addItem, clearItemFromCart, removeItem, clearItem } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
