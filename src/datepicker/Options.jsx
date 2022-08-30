import React from "react";
import { useSelector } from "react-redux";

export default function Options({ opened }) {
    const calender = useSelector((state) => state.general.calender);

    const onClickHandler = (e) => {
        console.log({ e });
    };

    return (
        <div className={opened ? "options" : "options--closed"}>
            {calender?.map((e, index) => (
                <div
                    onClick={() => onClickHandler(e)}
                    className="option"
                    key={`${index}_${e.Month}`}
                >
                    {e.Month}
                </div>
            ))}
        </div>
    );
}
