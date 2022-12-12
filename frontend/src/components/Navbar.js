/**
 * Navigation bar component. Used on all pages.
 * Contains link to sidebar component.
 */

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../Navbar.css';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import accountlogo from '../pics/account.svg';
import deftlogo from '../pics/TheDEFT.svg';
import cartlogo from '../pics/cart.svg';
import Sidebar from './Sidebar';

function Navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

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
          <Sidebar />
          <Link to="/">
            <img className="deft" src={deftlogo} alt="the deft logo" />
          </Link>
        </div>
        <div class="nav_menu_right">
          <div className="account">
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                {/*<Link to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </Link>
                <Link to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </Link>
            <NavDropdown.Divider /> */}
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link to="/signin">
                <img src={accountlogo} alt="account" />
              </Link>
            )}
          </div>
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
