import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let shippingPrice = 0;
  let totalQuantity = 0;
  for (const carts of cart) {
    totalQuantity += carts.quantity;
    totalPrice += parseFloat(carts.price) * parseFloat(carts.quantity);
    shippingPrice += parseFloat(carts.shipping) * parseFloat(carts.quantity);
  }
  let tax = parseFloat((totalPrice / 10).toFixed(2));
  let grandPrice = totalPrice + tax + shippingPrice;
  return (
    <div className="cart">
      <h3 className="summary">Oder Summary</h3>
      <div className="other-item">
        <p>Selected Items: {totalQuantity}</p>
        <p>Total price: ${totalPrice}</p>
        <p>Total shipping: ${shippingPrice}</p>
        <p>Tax: ${tax}</p>
        <h5 className="grand-price">Grand Price: {grandPrice}</h5>
      </div>
      {props.children}
    </div>
  );
};

export default Cart;
