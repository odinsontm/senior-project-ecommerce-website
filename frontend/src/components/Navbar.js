import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../Navbar.css';
import Badge from 'react-bootstrap/Badge';

import menulogo from '../pics/menu.svg';
import accountlogo from '../pics/account.svg';
import deftlogo from '../pics/TheDEFT.svg';
import cartlogo from '../pics/cart.svg';

function Navbar() {
  const { state } = useContext(Store);
  const { cart } = state;

  const [navAdapt, setNavbar] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={navAdapt ? 'navAdapt active' : 'navAdapt'}>
      <div class="parent">
        <div class="nav_menu_left">
          <a href="">
            <img src={menulogo} alt="menu" />
          </a>
          <Link to="/">
            <img src={deftlogo} alt="the deft logo" />
          </Link>
        </div>
        <div class="nav_menu_right">
          <Link to="/signin">
            <img src={accountlogo} alt="account" />
          </Link>
          <Link to="/cart">
            {cart.cartItems.length > 0 && (
              <Badge className="cartAmount" pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
            <img src={cartlogo} alt="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
