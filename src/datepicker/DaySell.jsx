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
    const returnDay = useSelector((state) => state.general.returnDay);
    const departureDay = useSelector((state) => state.general.departureDay);
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );
    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );

    // const equal =
    //     box === "return"
    //         ? day.day.replaceAll("-", "") === returnDay?.day.replaceAll("-", "")
    //         : day.day.replaceAll("-", "") ===
    //           departureDay?.day.replaceAll("-", "");

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
                return { marginLeft: 0 };
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

    const handleClick = () => {
        switch (box) {
            case "return":
                dispatch(
                    setReturnDate({
                        returnMonthIndex: returnMonthIndex || 0,
                        index,
                        day,
                    })
                );
                break;
            case "departure":
                dispatch(
                    setDepartureDate({
                        departureMonthIndex: departureMonthIndex || 0,
                        index,
                        day,
                    })
                );
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
            style={firstSell ? getMarginLeft() : {}}
            key={index}
            className={`day__cell ${isPastDay() ? "past" : ""}`}
            onClick={handleClick}
        >
            {index + 1}
        </span>
    );
}
