import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setGeneratedCalender(state, action) {
            state.calender = action.payload;
        },
    },
});

export const { setGeneratedCalender } = generalSlice.actions;

export default generalSlice.reducer;
