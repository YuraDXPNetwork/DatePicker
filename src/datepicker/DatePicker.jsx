import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToDay } from "../store/reducers/generalSlice";
import DateBox from "./DateBox";
import "./DatePicker.css";

export default function DatePicker() {
    const dispatch = useDispatch();
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

    return (
        <div className="datePicker__container">
            <DateBox box={"return"} week={week} />
            <div className="line"></div>
            <DateBox box={"departure"} week={week} />
        </div>
    );
}
