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
    const departureMonth = useSelector((state) => state.general.departureMonth);
    const returnMonth = useSelector((state) => state.general.returnMonth);
    const dispatch = useDispatch();

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

    const getStyle = (e) => {
        // debugger;
        if (box === "return") {
            const currentMonthNum = moment().month(e.Month).format("YYYYMM");
            const departureMonthNum = moment()
                .month(departureMonth.Month)
                .format("YYYYMM");

            const currentYearMonth = `${currentMonthNum}`;
            if (e.Year === "2023") return;
            else if (Number(currentYearMonth) < Number(departureMonthNum)) {
                return {
                    opacity: "0.6",
                    pointerEvents: "none",
                };
            }
        }
    };

    return (
        <div className={opened ? "options" : "options--closed"}>
            {calender?.map((e, index) => (
                <div
                    style={departureMonth ? getStyle(e) : {}}
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
