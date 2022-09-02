import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    setDepartureDate,
    setReturnDate,
} from "../store/reducers/generalSlice";

export default function DaySell({ index, day, box }) {
    const dispatch = useDispatch();

    const [fullDayName, setFullDayName] = useState();

    const departureMonth = useSelector((state) => state.general.departureMonth);
    const returnMonth = useSelector((state) => state.general.returnMonth);
    const toDay = useSelector((state) => state.general.toDay);

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

    const firstSellStyles = {
        marginLeft: getMarginLeft(),
        backgroundColor: isPastDay() ? "transparent" : "#e4f0f1",
        color: isPastDay() ? "#cfcfcf" : "#347d77",
        pointerEvents: isPastDay() ? "none" : "all",
    };

    const handleClick = () => {
        switch (box) {
            case "return":
                dispatch(setReturnDate(day));
                break;
            case "departure":
                dispatch(setDepartureDate(day));
                break;
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
            style={firstSell ? firstSellStyles : {}}
            key={index}
            className="day__cell"
            onClick={handleClick}
        >
            {index + 1}
        </span>
    );
}
