import React from "react";
import "../contact/contact.css";

const TextAreaField = ({ forType, title, id, name, placeholder }) => {
  return (
    <>
      <label className="label" htmlFor={forType}>
        {title}
      </label>
      <div className="wrapper-input">
        <textarea
          id={id}
          className="input_in"
          name={name}
          placeholder={placeholder}
        ></textarea>
        <span className="focus-input"></span>
      </div>
    </>
  );
};

export default TextAreaField;
