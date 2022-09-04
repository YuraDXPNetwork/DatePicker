import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DaySell from "./DaySell";

export default function Days({ month, box }) {
    const departureMonthIndex = useSelector(
        (state) => state.general.departureMonthIndex
    );

    const returnMonthIndex = useSelector(
        (state) => state.general.returnMonthIndex
    );
    console.log(
        "🚀 ~ file: Days.jsx ~ line 13 ~ Days ~ returnMonthIndex",
        returnMonthIndex
    );

    const calender = useSelector((state) => state.general.calender);

    const showDays = () => {
        // debugger;
        switch (box) {
            case "departure":
                if (departureMonthIndex) {
                    return calender[departureMonthIndex]?.thisMonthDays.map(
                        (e, index) => (
                            <DaySell
                                key={`${index}_${e.Month}`}
                                day={e}
                                index={index}
                                box={box}
                            />
                        )
                    );
                } else
                    return calender[0].thisMonthDays.map((e, index) => (
                        <DaySell
                            key={`${index}_${e.Month}`}
                            day={e}
                            index={index}
                            box={box}
                        />
                    ));

            case "return":
                if (returnMonthIndex) {
                    return calender[returnMonthIndex]?.thisMonthDays.map(
                        (e, index) => (
                            <DaySell
                                key={`${index}_${e.Month}`}
                                day={e}
                                index={index}
                                box={box}
                            />
                        )
                    );
                } else
                    return calender[0].thisMonthDays.map((e, index) => (
                        <DaySell
                            key={`${index}_${e.Month}`}
                            day={e}
                            index={index}
                            box={box}
                        />
                    ));
            default:
                break;
        }
    };

    useEffect(() => {
        return () => {};
    }, [returnMonthIndex, departureMonthIndex]);

    return <div className="days">{showDays()}</div>;
}
