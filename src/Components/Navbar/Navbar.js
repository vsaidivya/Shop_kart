import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = React.useState("shop");
  return (
    <div className="nav">
      <Link to="/">
      <div className="nav-logo" onClick={()=>{setmenu("shop")}}>
        <img src="/Assets/logo.png" alt="shopkart" />
        <p>SHOPKART</p>
      </div>
      </Link>

      <ul className="nav-menu">
        <li onClick={() => {setmenu("shop");}}className={menu === "shop" ? "nav-menu-selected" : ""}>
          <Link to="/">Shop</Link>
        </li>

        <li onClick={() => {setmenu("women");}}className={menu === "women" ? "nav-menu-selected" : ""}>
          <Link to="/women">Women</Link>
        </li>

        <li onClick={() => {setmenu("men");}}className={menu === "men" ? "nav-menu-selected" : ""}>
          <Link to="/men">Men</Link>
        </li>

        <li onClick={() => {setmenu("kids");}}className={menu === "kids" ? "nav-menu-selected" : ""}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <img onClick={()=>setmenu("cart")} className="cart-img" src="/Assets/cart_icon.png" alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
