import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {} from "../store/reducers/generalSlice";
import Select from "./Select";

export default function Navigator({ box }) {
    const dispatch = useDispatch();
    const monthIndex = useSelector((state) => state.general.monthIndex);

    const handleClick = () => {
        // TODO navigate in months by clicking on next and prev buttons
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
