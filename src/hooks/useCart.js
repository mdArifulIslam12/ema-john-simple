import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedCart = products.find((Product) => Product.id === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        saveCart.push(addedCart);
      }
    }
    setCart(saveCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
