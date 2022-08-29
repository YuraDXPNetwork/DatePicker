import React from "react";
import Select from "./Select";

export default function Navigator() {
    return (
        <div className="date__navigator">
            <div className="next__btn btn">{"<"}</div>
            <Select />
            <div className="prev__btn btn">{">"}</div>
        </div>
    );
}
