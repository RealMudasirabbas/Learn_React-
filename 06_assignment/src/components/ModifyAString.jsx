import React, { useState } from "react";

const ModifyAString = () => {
    const [str, setStr] = useState("")
    const [result, setResult] = useState("");

    function handleClick() {
        const firstChar = str[0];
        const lastChar = str[str.length - 1];
        const slicedStr = str.slice(1, length - 1);
        const modifiedStr = lastChar + slicedStr + firstChar;
        setResult(modifiedStr)
    }

    return (
        <>
            <h3 className="font-bold text-center items-center flex-1 justify-center">
                
                Q no 5: Modify A String
            </h3>
            <label className="text-center items-center flex-1 justify-center m-2 p-2">
                Enter your word:
            </label>
            <input
                type="text"
                value={str}
                onChange={(e) => setStr(e.target.value)}
                className="m-3 p[0.7rem] text-black rounded-md p-2"
            />
            <br />
            
            <button
                type="submit"
                onClick={handleClick}
                className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[150px] mt-4"
            >
                Click me to Remove
            </button>
            <br />
            <p className="ml-4 mt-2 font-semibold">
                Here is the Result: {result}
            </p>
        </>
    );
};

export default ModifyAString;
