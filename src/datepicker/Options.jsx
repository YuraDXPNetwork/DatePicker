import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
    setDepartureMonth,
    setReturnMonth,
} from "../store/reducers/generalSlice";
import { useOnClickOutside } from "../helpers/hooks";
import { getStyle } from "../helpers/helpers";

export default function Options({ opened, box, setOpened }) {
    const calender = useSelector((state) => state.general.calender);
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );
    const dispatch = useDispatch();
    const ref = useRef();

    useOnClickOutside(ref, () => setOpened(false));

    const onClickHandler = (e, monthIndex) => {
        switch (box) {
            case "departure":
                dispatch(setDepartureMonth({ monthIndex, e }));
                break;
            case "return":
                dispatch(setReturnMonth({ monthIndex, e }));
                break;
            default:
                break;
        }
    };

    return (
        <div ref={ref} className={opened ? "options" : "options--closed"}>
            {calender?.map((e, index) => (
                <div
                    style={
                        departureMonthIndex && box === "return"
                            ? getStyle(e, departureMonthIndex, calender)
                            : {}
                    }
                    onClick={() => onClickHandler(e, index)}
                    className="option"
                    key={`${index}_${e.Month}`}
                >
                    {`${e.Year} ${e.Month}`}
                </div>
            ))}
        </div>
    );
}
