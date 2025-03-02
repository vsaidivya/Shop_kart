import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ProductContext";

const Navbar = () => {
  const [menu, setmenu] = React.useState("shop");
  const {getTotalItems}=useContext(ShopContext)
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
        <Link to="/login"><button onClick={()=>{setmenu("login")}} className="login-btn">Login</button></Link>
        <Link to="/cart"><img onClick={()=>setmenu("cart")} className="cart-img" src="/Assets/cart_icon.png" alt="" /></Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
