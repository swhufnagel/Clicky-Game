import React from "react";
import "./style.css";

function Title(props) {
  return <h3 className="title">{props.children}</h3>;
}

export default Title;
