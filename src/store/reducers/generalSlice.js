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
            const { monthIndex, e } = action.payload;
            state.departureMonth = e;
            state.departureMonthIndex = monthIndex;
        },
        setReturnMonth(state, action) {
            const { monthIndex, e } = action.payload;
            state.returnMonth = e;
            state.returnMonthIndex = monthIndex;
        },
        setToDay(state, action) {
            state.toDay = action.payload;
        },
        setDepartureDate(state, action) {
            state.departureDay = action.payload;
        },
        setReturnDate(state, action) {
            state.returnDate = action.payload;
        },
        setVacation(state, action) {
            state.vacation = action.payload;
        },
    },
});

export const {
    setVacation,
    setReturnDate,
    setDepartureDate,
    setToDay,
    setGeneratedCalender,
    setMonthIndex,
    setReturnMonth,
    setReturnMonthIndex,
    setDepartureMonth,
} = generalSlice.actions;

export default generalSlice.reducer;
