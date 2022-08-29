import React from "react";

export default function Days({ month }) {
    return (
        <div className="days">
            {month.map((e) => {
                return <span className="day__cell">{e}</span>;
            })}
        </div>
    );
}
