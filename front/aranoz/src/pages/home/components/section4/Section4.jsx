import React from "react";
import styles from "./Section4.module.css";
const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.head}>
          <p>JOIN OUR NEWSLETTER</p>
          <h1>Subscribe to get Updated with new offers</h1>
        </div>
        <div className={styles.inp}>
          <input type="text" placeholder="Enter Email Adress" />{" "}
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
