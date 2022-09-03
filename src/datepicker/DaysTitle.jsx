import React from "react";
import { getShortName } from "../helpers/helpers";

export default function DaysTitle({ week }) {
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
