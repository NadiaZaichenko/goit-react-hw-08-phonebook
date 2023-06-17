import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { name: action.payload.user.name, email: action.payload.user.email };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { name: action.payload.name, email: action.payload.email };
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [register, logIn, logOut, refreshUser];


const getActions = type => extraActions.map(action => action[type]);

export const authReducer = authSlice.reducer;