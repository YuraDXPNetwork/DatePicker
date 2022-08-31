import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMonthIndex } from "../store/reducers/generalSlice";
import Select from "./Select";

export default function Navigator() {
    const dispatch = useDispatch();
    const monthIndex = useSelector((state) => state.general.monthIndex);

    const handleClick = (e) => {
        switch (e) {
            case "next":
                if (monthIndex < 13) dispatch(setMonthIndex(monthIndex + 1));
                break;
            case "prev":
                if (monthIndex > 0) dispatch(setMonthIndex(monthIndex - 1));

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
            <Select monthIndex={monthIndex} />
            <div onClick={() => handleClick("prev")} className="prev__btn btn">
                {">"}
            </div>
        </div>
    );
}
