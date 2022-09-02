import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DaySell({ index, day }) {
    const [fullDayName, setFullDayName] = useState();

    const departureMonth = useSelector((state) => state.general.departureMonth);
    const returnMonth = useSelector((state) => state.general.returnMonth);
    const toDay = useSelector((state) => state.general.toDay);
    console.log(
        toDay.format("YYYY-MM-DD").toString().slice(0, 10).replaceAll("-", ""),
        day.day.replaceAll("-", "")
    );

    const isPastDay = () => {
        return toDay
            .format("YYYY-MM-DD")
            .toString()
            .slice(0, 10)
            .replaceAll("-", "") > day.day.replaceAll("-", "")
            ? true
            : false;
    };

    const firstSell = index === 0;

    const getMarginLeft = () => {
        // debugger;
        switch (fullDayName) {
            case "Monday":
                return 0;
            case "Tuesday":
                return "42px";
            case "Wednesday":
                return "84px";
            case "Thursday":
                return "126px";
            case "Friday":
                return "168px";
            case "Saturday":
                return "210px";
            case "Sunday":
                return "252px";
            default:
                break;
        }
    };

    const styles = {
        marginLeft: getMarginLeft(),
        backgroundColor: isPastDay() ? "transparent" : "#e4f0f1",
        color: isPastDay() ? "#cfcfcf" : "#347d77",
        pointerEvents: isPastDay() ? "none" : "",
    };

    useEffect(() => {
        const fullName = moment(day.day).format("dddd");
        setFullDayName(fullName);
    }, [day]);

    useEffect(() => {}, [departureMonth, returnMonth]);

    return (
        <span style={firstSell ? styles : {}} key={index} className="day__cell">
            {index + 1}
        </span>
    );
}
