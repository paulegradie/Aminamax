import React, { useState } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavButton } from "./components/NavButton";
import { Easy } from "./gameModes/Easy";
import { Hard } from "./gameModes/Hard";

export const App = () => {
    return (
        <Router>
            <div className="nav">
                <NavButton to={"/"}>Home</NavButton>
                <NavButton to={"/easy"}>Easy</NavButton>
                <NavButton to={"/hard"}>Hard</NavButton>
            </div>
            <hr></hr>
            <Switch>
                <Route exact path="/">
                    <Home />d
                </Route>
                <Route exact path="/easy">
                    <Easy />
                </Route>
                <Route exact path="/hard">
                    <Hard />
                </Route>
            </Switch>
        </Router>
    );
};

const Home = () => {
    return (
        <div className="centerText">
            <h1>The click me Game!</h1>
            <p>There are two levels - Easy, and hard.</p>

            <p>To win, you simply need to click the button!</p>
        </div>
    );
};
