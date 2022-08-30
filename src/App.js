import logo from "./logo.svg";
import "./App.css";
import DatePicker from "./datepicker/DatePicker";
import { useEffect, useState } from "react";
import { generateCal } from "./helpers/helpers";

function App() {
    const [generated, setGenerated] = useState();

    useEffect(() => {
        const generated = generateCal();
        setGenerated(generated);
    }, []);

    return (
        <div className="App">
            <DatePicker />
        </div>
    );
}

export default App;
