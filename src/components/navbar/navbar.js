import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const NavBar = (props) => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  const showMenu = () => {
    setNavBarActive(!navBarActive);
    setHidden(true);
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };
  const signOut = () => {
    localStorage.removeItem("loggedUser");
    props.setLoggedUser("");
  };

  return (
    <div className="header">
      <div onClick={showMenu}>
        <i className="fas fa-bars burgerMenu"></i>
      </div>

      <div className="nav">
        <div className="navCenter">
          <Link to="/">
            <div className="logo">
              <p>
                <b>HOME</b>
                SKETCH
              </p>
            </div>
          </Link>
        </div>
        <ul className={`${navBarActive ? "activeBurger" : ""} topList`}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sketches">Sketches</Link>
          </li>
          <li>
            <Link to="/exercises">Exercise</Link>
          </li>
          {props.loggedUser ? (
            <div className="sign-out">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={signOut}>
                <Link to="/login">Sign Out</Link>
              </li>
            </div>
          ) : (
            <li>
              <Link to="/login">SIGN IN</Link>
            </li>
          )}
        </ul>
        {props.loggedUser ? (
          <Link to="/cart">
            <div className="shoppingCart" onClick={handleHidden}>
              <ShoppingIcon className="shopping-icon" />
              <span className="item-count">
                {props.loggedUser.cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
