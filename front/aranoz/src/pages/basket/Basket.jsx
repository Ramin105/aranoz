
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBasketCount } from "../../redux/reducer/productSlice"; 
import styles from "./Basket.module.css";

const Basket = () => {
  const dispatch = useDispatch();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(items);
    dispatch(setBasketCount(items.length)); 
  }, [dispatch]); 

  const handleRemove = (indexToRemove) => {
    const updatedItems = basketItems.filter(
      (_, index) => index !== indexToRemove
    );
    updateBasket(updatedItems);
  };

  const handleIncrease = (index) => {
    const updatedItems = [...basketItems];
    updatedItems[index].quantity = (updatedItems[index].quantity || 1) + 1;
    updateBasket(updatedItems);
  };

  const handleDecrease = (index) => {
    const updatedItems = [...basketItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      updateBasket(updatedItems);
    } else {
      handleRemove(index);
    }
  };

  const updateBasket = (items) => {
    setBasketItems(items);
    localStorage.setItem("basket", JSON.stringify(items));
    dispatch(setBasketCount(items.length)); 
  };

  const calculateTotal = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className={styles.container}>
      <h2>Sepet</h2>
      {basketItems.length === 0 ? (
        <p>Sepet boşdur</p>
      ) : (
        <div className={styles.basketContainer}>
          <div className={styles.aa}>
            {basketItems.map((item, index) => (
              <div key={index} className={styles.basketItem}>
                <img src={item.img} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h4>{item.title}</h4>
                  <p>{item.price} ₼</p>
                  <div className={styles.quantityControl}>
                    <button
                      style={{ border: "none", padding: "10px" }}
                      onClick={() => handleDecrease(index)}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      style={{ border: "none", padding: "10px" }}
                      onClick={() => handleIncrease(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className={styles.deleteButton}
                >
                  sil
                </button>
              </div>
            ))}
            <div className={styles.total}>
              <h3>Toplam: {calculateTotal().toFixed(2)} ₼</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
