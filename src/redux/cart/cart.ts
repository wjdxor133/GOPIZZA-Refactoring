import { createSlice } from "@reduxjs/toolkit";
import { CartTypes } from "types/cart";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE: CartTypes = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartHidden: (state, action) => {
      state.hidden = !action.payload;
    },
    addItem: (state, action) => {
      const menu = action.payload;
      state.cartItems.push(addItemToCart(state.cartItems, menu));
    },

    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const {
  toggleCartHidden,
  addItem,
  clearItemFromCart,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// const cartReducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case CartActionTypes.TOGGLE_CART_HIDDEN:
//       return {
//         ...state,
//         hidden: !state.hidden,
//       };
//     case CartActionTypes.ADD_ITEM:
//       return {
//         ...state,
//         cartItems: addItemToCart(state.cartItems, action.payload),
//       };
//     case CartActionTypes.CLEAR_ITEM_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((cartItem: cartItemType) => {
//           return cartItem.id !== action.payload.id;
//         }),
//       };
//     case CartActionTypes.REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: removeItemFromCart(state.cartItems, action.payload),
//       };
//     default:
//       return state;
//   }
// };
