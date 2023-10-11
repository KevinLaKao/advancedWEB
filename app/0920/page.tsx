"use client"; //0927
import { useState } from "react";
import Button from "@mui/material/Button";

export default function MyButton() {
    const [randomList, setRandomList] = useState<number[]>([0]);

    function handleClick() {
        const addNumber = Math.floor(Math.random() * 11);
        setRandomList((randomList) => [...randomList, addNumber]);
    }

    return (
        <div>
            <Button variant="contained" color="error" onClick={handleClick}>
                {randomList.map((num) => num + " ")}
            </Button>
        </div>
    );
}
