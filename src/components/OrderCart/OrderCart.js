import React from "react";
import "./OrderCart.css";
import { TrashIcon } from "@heroicons/react/solid";
const OrderCart = ({ cart, handleRemove }) => {
  const { name, img, price, quantity, shipping } = cart;
  return (
    <div className="order-cart">
      <div className="cart-img">
        <img src={img} alt="" />
      </div>
      <div className="cart-item-detail">
        <div className="cart-detail">
          <h2 title={name}>
            {name.length > 20 ? name.slice(0, 20) + "....." : name}
          </h2>
          <h3>
            Price: <span>${price}</span>
          </h3>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
          <p>
            Shipping: <span>${shipping}</span>
          </p>
        </div>
        <div className="delete-btn">
          <button onClick={() => handleRemove(cart)}>
            <TrashIcon className="icon"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
