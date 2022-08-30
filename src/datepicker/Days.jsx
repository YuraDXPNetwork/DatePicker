import React from "react";

export default function Days({ month }) {
    return (
        <div className="days">
            {month.map((e, index) => {
                return (
                    <span key={index} className="day__cell">
                        {e}
                    </span>
                );
            })}
        </div>
    );
}
