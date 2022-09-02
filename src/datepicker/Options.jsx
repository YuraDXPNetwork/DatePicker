import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
    setDepartureMonth,
    setReturnMonth,
} from "../store/reducers/generalSlice";

export default function Options({ opened, box }) {
    const calender = useSelector((state) => state.general.calender);
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        // console.log(e.thisMonthDays[0].day);
        const day = moment(e.thisMonthDays[0].day);

        switch (box) {
            case "departure":
                dispatch(setDepartureMonth(e));
                break;
            case "return":
                dispatch(setReturnMonth(e));
                break;
            default:
                break;
        }
    };

    return (
        <div className={opened ? "options" : "options--closed"}>
            {calender?.map((e, index) => (
                <div
                    onClick={() => onClickHandler(e)}
                    className="option"
                    key={`${index}_${e.Month}`}
                >
                    {`${e.Year} ${e.Month}`}
                </div>
            ))}
        </div>
    );
}
