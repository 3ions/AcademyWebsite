import React from "react";
import "../contact/Contact.css";
import classnames from "classnames";

const TextAreaField = ({
  forType,
  title,
  id,
  name,
  error,
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
          className={classnames("input_in", { "invalid-input": error })}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        <span className="focus-input"></span>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export default TextAreaField;
