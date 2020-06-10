import React, { Dispatch, SetStateAction } from "react";
import "./button.css";

interface ButtonProps {
    // interface bc it defines a signature
    message: string;
    x: number;
    y: number;
    onClick: Dispatch<SetStateAction<Boolean>>;
}

export const Button: React.FC<ButtonProps> = ({ message, onClick, x, y }: ButtonProps) => {
    const style = {
        top: `${x}%`,
        left: `${y}%`,
    };

    return (
        <button
            className="button"
            style={style}
            onClick={() => {
                if (Math.random() > 0.65) alert("WHATS UP AMIN!");
                onClick(true);
            }}
        >
            <h3>Click me</h3>
            <span>You know you want to...</span>
        </button>
    );
};
