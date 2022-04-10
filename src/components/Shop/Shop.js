import React, { useState } from "react";
import { useEffect } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import useProduct from "../../hooks/useProduct/useProduct";
import useCart from "../../hooks/useCart";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useProduct();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const [cart, setCart] = useCart(products);
  // const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   console.log("local stroge ", products);
  //   const storedCart = getStoredCart();
  //   const saveQuantity = [];
  //   for (const id in storedCart) {
  //     const addProduct = products.find((product) => product.id === id);
  //     if (addProduct) {
  //       const quantity = storedCart[id];
  //       addProduct.quantity = quantity;
  //       saveQuantity.push(addProduct);
  //     }
  //   }
  //   setCart(saveQuantity);
  // }, [products]);
  const handlerAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((getProduct) => getProduct.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((getProduct) => getProduct.id !== product.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handlerAddToCart={handlerAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/order">
            <button>Review order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
