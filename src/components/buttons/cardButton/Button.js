import React from "react";
import "./Button.scss";

function Button({ prop }) {
  return (
    <div>
      <button id="btn">{prop}</button>
    </div>
  );
}

export default Button;
