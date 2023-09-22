import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import BasketIcon from "../../assets/Icons/Basket.svg";
import UserIcon from "../../assets/Icons/User.svg";
import FavIcon from "../../assets/Icons/FavIcon.svg";
import SearchIcon from "../../assets/Icons/search.svg";
import Logo from "../../assets/GitHub-Logo.png";
import MenuBar from "../../assets/Icons/MenuBar.svg";
const Navbar = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <Link to="/">
          <img alt="firiya" className="logo" src={Logo} />
        </Link>
      </div>
      <div className="user-inf">
        <Link to="/userFav">
          <img src={FavIcon} alt="fav" className="navbar-icon" />
        </Link>
        <Link to="/userBasket">
          <img alt="basket-icon" src={BasketIcon} className="basket" />
        </Link>
        <Link to="/login">
          <img src={UserIcon} alt="user" className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
