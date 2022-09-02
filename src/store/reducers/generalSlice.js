import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monthIndex: 0,
    returnMonthIndex: 0,
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
        setReturnMonthIndex(state, action) {
            state.returnMonthIndex = action.payload;
        },
        setDepartureMonth(state, action) {
            state.departureMonth = action.payload;
        },
        setReturnMonth(state, action) {
            state.returnMonth = action.payload;
        },
        setToDay(state, action) {
            state.toDay = action.payload;
        },
    },
});

export const {
    setToDay,
    setGeneratedCalender,
    setMonthIndex,
    setReturnMonth,
    setReturnMonthIndex,
    setDepartureMonth,
} = generalSlice.actions;

export default generalSlice.reducer;
