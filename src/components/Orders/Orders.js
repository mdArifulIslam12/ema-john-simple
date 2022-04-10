import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct/useProduct";
import Cart from "../Cart/Cart";
import OrderCart from "../OrderCart/OrderCart";
import { removeFromDb } from "../../utilities/fakedb";
import "./Orders.css";
import { Link } from "react-router-dom";
const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);

  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop-container ">
        <div className="product-order">
          {cart.map((carts) => (
            <OrderCart
              key={carts}
              cart={carts}
              handleRemove={handleRemove}
            ></OrderCart>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/inventory">
              <button>proscced order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
