import React from "react";
import styles from "./logo.module.css";

const Logo = ({ className, title }) => {
  return (
    <div className={styles[className]}>
      <img src="/img/angkasaLogo.svg" alt="" /> <h1>{title}</h1>
    </div>
  );
};

export default Logo;
