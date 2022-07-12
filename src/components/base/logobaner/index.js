import React from "react";
import styles from "./logobander.module.css";

const LogoBaner = () => {
  return (
    <div className={styles.mainlogo}>
      <div className={styles.img1}>
        <img src="/img/vector 01.svg" alt="" />
      </div>
      <div className={styles.img2}>
        <img src="/img/vector 02.svg" alt="" />
      </div>
      <div className={styles.img3}>
        <img src="/img/vector 03.svg" alt="" />
      </div>
      <div className={styles.img4}>
        <img src="/img/vector 04.svg" alt="" />
      </div>
      <div className={styles.img5}>
        <img src="/img/vector 05.svg" alt="" />
      </div>
    </div>
  );
};

export default LogoBaner;
