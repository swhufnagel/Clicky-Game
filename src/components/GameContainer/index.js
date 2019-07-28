import React from "react";
import "./style.css";

function GameContainer(props) {
    return <div className="gameContainer">{props.children}</div>;
}

export default GameContainer;