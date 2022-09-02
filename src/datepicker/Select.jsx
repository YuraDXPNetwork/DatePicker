import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setReturnMonth } from "../store/reducers/generalSlice";
import Options from "./Options";

export default function Select({ box }) {
    const dispatch = useDispatch();

    const [opened, setOpened] = useState(false);

    const calender = useSelector((state) => state.general.calender);
    const departureMonth = useSelector((state) => state.general.departureMonth);

    const returnMonth = useSelector((state) => state.general.returnMonth);

    const getTitle = () => {
        // debugger;
        switch (box) {
            case "departure":
                return departureMonth
                    ? `${departureMonth?.Year} ${departureMonth?.Month}`
                    : `${calender[0]?.Year} ${calender[0]?.Month}`;
            case "return":
                return returnMonth
                    ? `${returnMonth?.Year} ${returnMonth?.Month}`
                    : `${calender[0]?.Year} ${calender[0]?.Month}`;
            default:
        }
    };

    useEffect(() => {
        if (departureMonth) dispatch(setReturnMonth(departureMonth));
    }, [departureMonth]);

    return (
        <div
            name="departureMonth"
            id="departureMonth"
            className={opened ? "month__select" : "month__select--closed"}
            onClick={() => setOpened(!opened)}
        >
            <div className="select__icon">&#8964;</div>
            <div className="select__title">{calender && getTitle()}</div>
            <Options opened={opened} box={box} />
        </div>
    );
}
