import React from "react";
import styles from "./input.module.css";

const Input = ({ type, className, placeholder, name, id, value, onChange, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={id} className={styles[className]} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
