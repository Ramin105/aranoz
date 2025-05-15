import React from "react";
import styles from "./Section1.module.css";
const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Wood & Cloth Sofa</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra
          </p>
          <button>BUY NOW</button>
        </div>
        <div className={styles.right}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
