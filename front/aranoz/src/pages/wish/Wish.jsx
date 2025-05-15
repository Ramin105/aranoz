import React, { useEffect, useState } from "react";
import styles from "./Wish.module.css"; 

const Wish = () => {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wish")) || [];
    setWishItems(items);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedItems = wishItems.filter((_, index) => index !== indexToRemove);
    setWishItems(updatedItems);
    localStorage.setItem("wish", JSON.stringify(updatedItems));
  };

  return (
    <div className={styles.cc}>
      <h2>İstək Siyahısı</h2>
      {wishItems.length === 0 ? (
        <p>İstək siyahısı boşdur</p>
      ) : (
        <div className={styles.wishContainer}>
          {wishItems.map((item, index) => (
            <div key={index} className={styles.wishItem}>
              <img src={item.img} alt={item.title} />
              <div className={styles.itemDetails}>
                <h4>{item.title}</h4>
                <p>{item.price} ₼</p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className={styles.deleteButton}
              >
                sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wish;