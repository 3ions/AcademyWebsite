import React from "react";
import "../contact/Contact.css";
import classnames from "classnames";

const TextField = ({
  forType,
  title,
  id,
  type,
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
        <input
          id={id}
          className={classnames("input_in", { "invalid-input": error })}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className="focus-input"></span>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export default TextField;
