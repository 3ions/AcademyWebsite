import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  msg,
  dark,
  disable,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const btnDark = dark ? "btn-dark" : "btn-white";

  return (
    <button
      id="important"
      disabled={disable}
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${
        disable ? "" : btnDark
      }`}
      onClick={onClick}
      type={type}
    >
      {msg}
      {children}
    </button>
  );
};
