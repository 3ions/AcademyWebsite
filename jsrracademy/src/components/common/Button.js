import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  dark,
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
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${btnDark}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
