import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMarginLeft, isPastDay } from "../helpers/helpers";
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
    const vacation = useSelector((state) => state.general.vacation);
    const [inVacationDays, setInVacationDays] = useState();
    const departureDay = useSelector((state) => state.general.departureDay);
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );
    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );

    const firstSell = index === 0;

    const isInVacationDays = () => {
        const isIn = vacation?.some((e) => e.day === day.day);
        setInVacationDays(isIn);
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
        isInVacationDays();
    }, [day, vacation]);

    useEffect(() => {}, [departureMonthIndex, returnMonthIndex]);

    return (
        <span
            style={firstSell ? getMarginLeft(fullDayName) : {}}
            key={index}
            className={`day__cell ${isPastDay(toDay, day) ? "past" : ""} ${
                inVacationDays || departureDay?.day.day === day.day
                    ? "vacation"
                    : ""
            }`}
            onClick={handleClick}
        >
            {index + 1}
        </span>
    );
}
