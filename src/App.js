import "./App.css";
import DatePicker from "./datepicker/DatePicker";
import { useEffect, useState } from "react";
import { generateCal } from "./helpers/helpers";
import { useDispatch } from "react-redux";
import { setGeneratedCalender } from "./store/reducers/generalSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const generated = generateCal();
        dispatch(setGeneratedCalender(generated));
    }, []);

    return (
        <div className="App">
            <DatePicker />
        </div>
    );
}

export default App;
