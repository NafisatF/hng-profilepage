import React from "react";
import "./styles.css";

const InputField = ({ label, placeholder, type, id }) => {
  return (
    <div className="input_container">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input_field_input"
      />
    </div>
  );
};

export default InputField;

export const TextField = ({ label, placeholder, type, id }) => {
  return (
    <div className="input_container">
      <label>{label}</label>
      <textarea
        type={type}
        placeholder={placeholder}
        className="input_field_input"
        rows={5}
        id={id}
      />
    </div>
  );
};
