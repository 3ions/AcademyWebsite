import React from "react";
import "../contact/Contact.css";

const TextAreaField = ({
  forType,
  title,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
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
          value={value}
          onChange={onChange}
        ></textarea>
        <span className="focus-input"></span>
      </div>
    </>
  );
};

export default TextAreaField;
