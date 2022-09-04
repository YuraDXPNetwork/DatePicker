import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTitle } from "../helpers/helpers";
import { setReturnMonth } from "../store/reducers/generalSlice";
import Options from "./Options";
import arrowHeadDown from "../icons/arrowheaddown.svg";

export default function Select({ box }) {
    const dispatch = useDispatch();

    const [opened, setOpened] = useState(false);

    const calender = useSelector((state) => state.general.calender);
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );

    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );

    // useEffect(() => {
    //     if (departureMonth) dispatch(setReturnMonth(departureMonth));
    // }, [departureMonth]);

    return (
        <div
            name="departureMonth"
            id="departureMonth"
            className={opened ? "month__select" : "month__select--closed"}
            onClick={() => setOpened(!opened)}
        >
            <div className="select__icon">
                <img src={arrowHeadDown} alt="" />
            </div>
            <div className="select__title">
                {calender &&
                    getTitle(
                        box,
                        departureMonthIndex,
                        calender,
                        returnMonthIndex
                    )}
            </div>
            <Options opened={opened} box={box} setOpened={setOpened} />
        </div>
    );
}
