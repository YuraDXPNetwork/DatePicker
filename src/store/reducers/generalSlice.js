import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monthIndex: 0,
};

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setGeneratedCalender(state, action) {
            state.calender = action.payload;
        },
        setMonthIndex(state, action) {
            state.monthIndex = action.payload;
        },
    },
});

export const { setGeneratedCalender, setMonthIndex } = generalSlice.actions;

export default generalSlice.reducer;
