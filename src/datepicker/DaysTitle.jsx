import React from "react";

export default function DaysTitle({ week }) {
    const getShortName = (e) => {
        switch (e) {
            case 1:
                return "Mo";
            case 2:
                return "Tu";
            case 3:
                return "We";
            case 4:
                return "Th";
            case 5:
                return "Fr";
            case 6:
                return "St";
            case 7:
                return "Su";

            default:
                break;
        }
    };
    return (
        <div className="days__title">
            {week.map((e, index) => {
                return (
                    <span key={index} className="day__title">
                        {getShortName(e)}
                    </span>
                );
            })}
        </div>
    );
}
