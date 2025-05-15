import React from "react";
import styles from "./Section3.module.css";
const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.head}>
         <div className={styles.left}> <h1>Best Sellers </h1>
          <p>Shop</p></div>
         <div className={styles.right}>
Next|Previous
        </div> </div>
      
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgbox}>
              <img
                src="	https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt=""
              />
            </div>
            <div className={styles.descirption}>
              <h2>Quartz Belt Watch</h2><p>$150</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbox}>
              <img
                src="	https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt=""
              />
            </div>
            <div className={styles.descirption}>
              <h2>Quartz Belt Watch</h2><p>$150</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbox}>
              <img
                src="	https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt=""
              />
            </div>
            <div className={styles.descirption}>
              <h2>Quartz Belt Watch</h2><p>$150</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbox}>
              <img
                src="	https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt=""
              />
            </div>
            <div className={styles.descirption}>
              <h2>Quartz Belt Watch</h2><p>$150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
