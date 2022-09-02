import React from "react";
import { useSelector } from "react-redux";
import Days from "./Days";
import DaysTitle from "./DaysTitle";
import Navigator from "./Navigator";

export default function DateBox({ box, week }) {
    const calender = useSelector((state) => state.general.calender);
    return (
        <div className={`${box} date__box`}>
            <h2 className="date__header">
                {box === "return" ? "Return date" : "Departure date"}
            </h2>
            <Navigator box={box} />
            <DaysTitle week={week} />
            {calender && <Days box={box} />}
        </div>
    );
}
