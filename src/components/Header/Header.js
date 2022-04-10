import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="header-menu">
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        {/* <a href="/shop">Shop</a> */}
        {/* <a href="/order">Order</a> */}
        {/* <a href="/manage">Manage Inventory</a>
        <a href="/about">About</a> */}
      </div>
    </nav>
  );
};

export default Header;
