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

    const changeReturnIndex = (btn) => {
        switch (btn) {
            case "next":
                break;
            case "prev":
                break;
            default:
                break;
        }
    };
    const changeDepartureIndex = (btn) => {
        switch (btn) {
            case "next":
                break;
            case "prev":
                break;
            default:
                break;
        }
    };

    const handleClick = (btn) => {
        switch (box) {
            case "return":
                changeReturnIndex(btn);
                break;
            case "departure":
                changeDepartureIndex(btn);
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
