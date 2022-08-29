import React from "react";

export default function DaysTitle({ week }) {
    return (
        <div className="days__title">
            {week.map((e) => {
                return <span className="day__title">{e}</span>;
            })}
        </div>
    );
}
