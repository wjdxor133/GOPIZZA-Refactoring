/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

interface User {
  id: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
