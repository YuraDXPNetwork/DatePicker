import React, { useState } from "react";
import { useSelector } from "react-redux";
import Options from "./Options";

export default function Select() {
    const [opened, setOpened] = useState(false);

    const calender = useSelector((state) => state.general.calender);

    return (
        <div
            name="departureMonth"
            id="departureMonth"
            className={opened ? "month__select" : "month__select--closed"}
            onClick={() => setOpened(!opened)}
        >
            <div className="select__icon">&#8964;</div>
            <div className="select__title">
                {calender && `${calender[0].Year} ${calender[0].Month}`}
            </div>
            <Options opened={opened} />
        </div>
    );
}
