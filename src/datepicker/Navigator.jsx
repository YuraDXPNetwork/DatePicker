import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    setDepartureMonth,
    setDepartureMonthIndex,
    setReturnMonth,
    setReturnMonthIndex,
} from "../store/reducers/generalSlice";
import Select from "./Select";

export default function Navigator({ box }) {
    const dispatch = useDispatch();
    const monthIndex = useSelector((state) => state.general.monthIndex);
    const calender = useSelector((state) => state.general.calender);
    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );

    const handleClick = (btn) => {
        // debugger;
        switch (box) {
            case "return":
                switch (btn) {
                    case "prev":
                        if (returnMonthIndex || returnMonthIndex > 0) {
                            dispatch(setReturnMonthIndex(returnMonthIndex - 1));
                        }
                        break;
                    case "next":
                        if (returnMonthIndex !== calender.length - 1) {
                            dispatch(setReturnMonthIndex(returnMonthIndex + 1));
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "departure":
                switch (btn) {
                    case "prev":
                        if (departureMonthIndex || departureMonthIndex > 0) {
                            dispatch(
                                setDepartureMonthIndex(departureMonthIndex - 1)
                            );
                        }
                        break;
                    case "next":
                        if (departureMonthIndex !== calender.length - 1) {
                            dispatch(
                                setDepartureMonthIndex(departureMonthIndex + 1)
                            );
                        }
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="date__navigator">
            <div onClick={() => handleClick("next")} className="next__btn btn">
                {"<"}
            </div>
            <Select monthIndex={monthIndex} box={box} />
            <div onClick={() => handleClick("prev")} className="prev__btn btn">
                {">"}
            </div>
        </div>
    );
}
