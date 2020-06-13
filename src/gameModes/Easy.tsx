import React, { useState } from "react";
import { GameButton } from "../components/GameButton";
import { randomPosition } from "./utils";

export const Easy: React.FC = () => {
    const [clicked, setClicked] = useState<Boolean>(false);

    if (clicked) {
        setTimeout(() => {
            setClicked(false);
        }, 800);
    }
    const point = randomPosition();

    return (
        <div className="app">
            {!clicked && (
                <GameButton x={point.x} y={point.y} message={"Whats up Amin!"} onClick={setClicked} />
            )}
        </div>
    );
};
