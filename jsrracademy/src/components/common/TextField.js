import React from "react";
import "../contact/Contact.css";

const TextField = ({ forType, title, id, type, name, placeholder }) => {
  return (
    <>
      <label className="label" for={forType}>
        {title}
      </label>
      <div className="wrapper-input">
        <input
          id={id}
          className="input_in"
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <span className="focus-input"></span>
      </div>
    </>
  );
};

export default TextField;
