 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkModeState: false
};

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        darkModeToggle: (state) => {
            state.darkModeState = !state.darkModeState;
        },
        setDarkMode: (state, action) => {
            state.darkModeState = action.payload;
        }
    }
});

export const { darkModeToggle, setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
