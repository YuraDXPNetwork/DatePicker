import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DaySell from "./DaySell";

export default function Days({ month, box }) {
    const departureMonth = useSelector((state) => state.general.departureMonth);

    const returnMonth = useSelector((state) => state.general.returnMonth);

    const calender = useSelector((state) => state.general.calender);

    const showDays = () => {
        // debugger;
        switch (box) {
            case "departure":
                if (departureMonth) {
                    return departureMonth?.thisMonthDays.map((e, index) => (
                        <DaySell
                            key={`${index}_${e.Month}`}
                            day={e}
                            index={index}
                            box={box}
                        />
                    ));
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
                if (returnMonth) {
                    return returnMonth?.thisMonthDays.map((e, index) => (
                        <DaySell
                            key={`${index}_${e.Month}`}
                            day={e}
                            index={index}
                            box={box}
                        />
                    ));
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
    }, [departureMonth, departureMonth]);

    return <div className="days">{showDays()}</div>;
}
