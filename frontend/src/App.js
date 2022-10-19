import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Store } from './Store';
import ScrollButton from './components/ScrollButton';
import { Fragment, useContext, useState } from 'react';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import Navbar from './components/Navbar';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      {/* Navigation for prod */}
      <div class="site-container background">
        <Fragment>
          <Navbar />
        </Fragment>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer>
          <div class="footer-title">
            <Link to="/#">
              <h4>HOME</h4>
            </Link>
            <h4>NEW</h4>
            <h4>ABOUT/CONTACT</h4>
            <h4>ITEMS</h4>
            <h4>socials here</h4>
            <h2>© 2022 TheDEFT</h2>
          </div>
          <div class="footer-title">
            <Link to="/signin/#">
              <h4>SIGN IN</h4>
            </Link>
            <Link to="/cart/#">
              <h4>CART</h4>
            </Link>
          </div>
        </footer>
        <Fragment>
          <ScrollButton />
        </Fragment>
      </div>
      {/* End Navigation for prod */}

      {/* Navigation for tutorial}
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>TheDEFT</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div>© 2022 TheDEFT</div>
        </footer>
      </div>
      {Navigation for tutorial */}
    </BrowserRouter>
  );
}

export default App;
