import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DaySell({ index, day }) {
    const [fullDayName, setFullDayName] = useState();
    if (index === 0) {
        console.log(fullDayName);
    }
    const departureMonth = useSelector((state) => state.general.departureMonth);
    const returnMonth = useSelector((state) => state.general.returnMonth);
    const thisDayDate = day.day;
    const firstSell = index === 0;

    const getMarginLeft = () => {
        // debugger;
        switch (fullDayName) {
            case "Monday":
                return 0;
            case "Tuesday":
                return { marginLeft: "42px" };
            case "Wednesday":
                return { marginLeft: "84px" };
            case "Thursday":
                return { marginLeft: "126px" };
            case "Friday":
                return { marginLeft: "168px" };
            case "Saturday":
                return { marginLeft: "210px" };
            case "Sunday":
                return { marginLeft: "252px" };
            default:
                break;
        }
    };

    useEffect(() => {
        const fullName = moment(day.day).format("dddd");
        setFullDayName(fullName);
    }, [day]);

    useEffect(() => {}, [departureMonth, returnMonth]);

    return (
        <span
            style={firstSell ? getMarginLeft() : {}}
            key={index}
            className="day__cell"
        >
            {index + 1}
        </span>
    );
}
