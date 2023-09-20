"use client";
import { useState } from "react";

export default function MyButton() {
    const [randomList, setRandomList] = useState<number[]>([]);

    function handleClick() {
        const addNumber = Math.floor(Math.random() * 11);
        setRandomList((randomList) => [...randomList, addNumber]);
    }

    return (
        <button onClick={handleClick}>
            {randomList.map((num) => num + " ")}
        </button>
    );
}
