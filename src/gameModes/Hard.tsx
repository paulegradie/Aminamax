import React, { useState } from "react";
import { GameButton } from "../components/GameButton";
import { randomTime, randomPosition } from "./utils";

export const Hard: React.FC = () => {
    const [clicked, setClicked] = useState<Boolean>(false);
    const [visible, setVisible] = useState<Boolean>(false);

    const time = randomTime();

    if (!visible && !clicked) {
        setTimeout(() => {
            setVisible(true);
        }, time * 2);
    }

    if (visible && !clicked) {
        setTimeout(() => {
            setVisible(false);
        }, time * 2);
        console.log("Way too slow");
    }
    if (clicked) {
        setTimeout(() => {
            setClicked(false);
        }, time);
    }
    const point = randomPosition();

    return (
        <div className="app">
            {visible && !clicked && (
                <GameButton x={point.x} y={point.y} message={"Whats up Amin!"} onClick={setClicked} />
            )}
        </div>
    );
};
