import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark">
            <brand className="navbar-brand" href="/">X-men Memory Game</brand>
            <p className="answer">{props.answer}</p>
            <div class="scoreContainer">
                <div id="score" className="nav-item white"> Score: {props.score}</div>
                <p id="highScore" className="nav-item white "> High Score: {props.highScore}</p>
            </div>
        </nav>
    )
}

export default Navbar;

