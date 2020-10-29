import React from "react";
import "../contact/Contact.css";

const TextField = ({
  forType,
  title,
  id,
  type,
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
        <input
          id={id}
          className="input_in"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className="focus-input"></span>
      </div>
    </>
  );
};

export default TextField;
