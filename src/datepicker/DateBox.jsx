import React from "react";
import Days from "./Days";
import DaysTitle from "./DaysTitle";
import Navigator from "./Navigator";

export default function DateBox({ week, month, box }) {
    return (
        <div className={`${box} date__box`}>
            <h2 className="date__header">
                {box === "return" ? "תאריך יציאה" : "תאריך חזרה"}
            </h2>
            <Navigator />
            <DaysTitle week={week} />
            <Days month={month} />
        </div>
    );
}
