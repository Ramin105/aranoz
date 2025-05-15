export const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
  
    
    const existingIndex = basket.findIndex((basketItem) => basketItem._id === item._id);
  
    if (existingIndex !== -1) {
      
      basket[existingIndex].quantity += 1;
    } else {
      
      basket.push({ ...item, quantity: 1 });
    }
  
    
    localStorage.setItem("basket", JSON.stringify(basket));
};


export const addToWish = (item) => {
  let wish = JSON.parse(localStorage.getItem("wish")) || [];

 
  const alreadyExists = wish.some((wishlistItem) => wishlistItem._id === item._id);

  if (!alreadyExists) {
    wish.push(item);
    localStorage.setItem("wish", JSON.stringify(wish));
  }
};

  