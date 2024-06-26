import React, { useState } from "react";

const AddPy = () => {
    const [py, setPy] = useState("");
    const [result, setResult] = useState("");

    function handleClick() {
        if (py[0] == "P" && py[1] == "y") {
            setResult(py);
        } else if (py[0] == "p" && py[1] == "y") {
            setResult(py);
        } else {
            setResult("Py" + py);
        }
    }

    return (
        <>
            <h3 className="font-bold text-center items-center flex-1 justify-center">
                {" "}
                Q no 3: Check if word starts with Py
            </h3>
            <label className="text-center items-center flex-1 justify-center m-2 p-2">
                Enter your word:{" "}
            </label>
            <input
                type="text"
                value={py}
                onChange={(e) => setPy(e.target.value)}
                className="m-3 p[0.7rem] text-black rounded-md p-2"
            />
            <br />
            <button
                type="submit"
                onClick={handleClick}
                className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[150px] mt-4"
            >
                Click me to Check
            </button>
            <br />
            <p className="ml-4 mt-2 font-semibold">
                Here is the Result: {result}
            </p>
        </>
    );
};

export default AddPy;
