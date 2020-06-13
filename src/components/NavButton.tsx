import React from "react";
import { Link } from "react-router-dom";
import "./NavButton.css";

interface Props {
    children: string;
    to: string;
}

export const NavButton = (props: Props) => {
    return (
        <button className="navButton">
            <Link className="link" to={props.to}>
                {props.children}
            </Link>
        </button>
    );
};
