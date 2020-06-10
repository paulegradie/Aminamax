import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/button";

type Point = {
    // type because it defines a return type
    x: number;
    y: number;
};

const randomPosition = (): Point => {
    let x = Math.random() * 100;
    if (x > 90 || x < 10) {
        x = 0.23;
    }
    let y = Math.random() * 100;
    if (y > 90 || y < 10) {
        y = 0.46;
    }
    return { x: x, y: y };
};

const App: React.FC = () => {
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
                <Button x={point.x} y={point.y} message={"Whats up Amin!"} onClick={setClicked} />
            )}
        </div>
    );
};

export default App;
