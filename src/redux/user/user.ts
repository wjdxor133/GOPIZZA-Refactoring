import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  currentUser: null,
};

export const setCurrentUser = createAction<any>("SET_CURRENT_USER");

export const userReducer = createReducer(INITIAL_STATE, {
  [setCurrentUser.type]: (state, action) => {
    state.currentUser = action.payload;
  },
});

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
