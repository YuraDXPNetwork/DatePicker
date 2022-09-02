import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToDay } from "../store/reducers/generalSlice";
import DateBox from "./DateBox";
import "./DatePicker.css";

export default function DatePicker() {
    const dispatch = useDispatch();
    const departureDay = useSelector((state) => state.general.departureDay);
    const returnDate = useSelector((state) => state.general.returnDate);
    const calender = useSelector((state) => state.general.calender);
    function range(start, end) {
        return Array(end - start + 1)
            .fill()
            .map((_, idx) => start + idx);
    }
    const week = range(1, 7);

    useEffect(() => {
        const today = moment();
        dispatch(setToDay(today));
    }, []);

    useEffect(() => {
        if (returnDate && returnDate) {
            if (
                departureDay?.departureMonthIndex ===
                returnDate?.returnMonthIndex
            ) {
                console.log(
                    calender[
                        departureDay.departureMonthIndex
                    ].thisMonthDays.slice(departureDay.index, returnDate.index)
                );
            }
            console.log(
                calender.slice(
                    departureDay.departureMonthIndex,
                    returnDate.returnMonthIndex
                )
            );
        }
    }, [departureDay, returnDate]);

    return (
        <div className="datePicker__container">
            <DateBox box={"return"} week={week} />
            <div className="line"></div>
            <DateBox box={"departure"} week={week} />
        </div>
    );
}
