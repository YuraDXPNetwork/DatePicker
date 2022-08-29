import moment from "moment";
import React from "react";
import DateBox from "./DateBox";
import "./DatePicker.css";

export default function DatePicker() {
    function range(start, end) {
        return Array(end - start + 1)
            .fill()
            .map((_, idx) => start + idx);
    }
    const week = range(1, 7);
    const month = range(1, 31);

    return (
        <div className="datePicker__container">
            <DateBox box={"departure"} month={month} week={week} />
            <div className="line"></div>
            <DateBox box={"return"} month={month} week={week} />
        </div>
    );
}
