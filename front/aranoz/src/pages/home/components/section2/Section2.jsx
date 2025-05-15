import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Section2.module.css";
import { fetchProducts } from "../../../../redux/reducer/productSlice";
import { addToBasket, addToWish } from "../../../../local/LocalStorage";

const Section2 = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <div>yuklenir</div>;
  if (status === "failed") return <div>xeta {error}</div>;

  const handleAddToBasket = (product) => {
    addToBasket(product);
    alert(`${product.title} sepetde`);
  };

  const handleAddToWish = (product) => {
    addToWish(product);
    alert(`${product.title} wishde`);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.head2}><div className={styles.head}>
        <h1>Awesome </h1>
        <p>Shop
          
        </p>
      </div></div>
      <div className={styles.cards}>
        {items.map((item) => (
          <div key={item._id} className={styles.card}>
            <div className={styles.imgbox}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.cc}>
              <div className={styles.text}>
                <div className={styles.title}>
                  <p>{item.title}</p> <h3>${item.price}</h3>
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.basket} onClick={() => handleAddToBasket(item)}>
                    Basket
                  </button>
                  <button className={styles.wish} onClick={() => handleAddToWish(item)}>Wish</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;