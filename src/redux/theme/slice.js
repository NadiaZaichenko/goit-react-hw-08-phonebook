import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state,action) {
            state.mode = action.payload;
        },
    },
});

export const {setTheme} = themeSlice.actions;