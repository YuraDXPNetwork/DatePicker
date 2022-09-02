import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    setMonthIndex,
    setReturnMonthIndex,
} from "../store/reducers/generalSlice";
import Select from "./Select";

export default function Navigator({ box }) {
    const dispatch = useDispatch();
    const monthIndex = useSelector((state) => state.general.monthIndex);
    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );

    const handleClick = (e) => {
        // debugger;
        switch (e) {
            case "next":
                if (box === "return" && monthIndex < 13) {
                    if (monthIndex < 13)
                        dispatch(setMonthIndex(monthIndex + 1));
                    dispatch(setReturnMonthIndex(returnMonthIndex + 1));
                } else if (monthIndex < 13)
                    dispatch(setMonthIndex(monthIndex + 1));
                break;
            case "prev":
                if (box === "return" && monthIndex > 0) {
                    if (monthIndex > 0) dispatch(setMonthIndex(monthIndex - 1));
                    dispatch(setReturnMonthIndex(returnMonthIndex - 1));
                } else if (monthIndex > 0)
                    dispatch(setMonthIndex(monthIndex - 1));
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
