import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ScrollButton from './components/ScrollButton';
import { Fragment } from 'react';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import Navbar from './components/Navbar';
import FeaturedScreen from './screens/FeaturedScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import AboutContactScreen from './screens/AboutContactScreen';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation for prod */}
      <div className="site-container">
        <div className="content-wrap">
          <ToastContainer position="bottom-center" limit={1} />
          <Fragment>
            <Navbar />
          </Fragment>

          <main>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/products/featured" element={<FeaturedScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/placeOrder" element={<PlaceOrderScreen />} />
              <Route path="/about" element={<AboutContactScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </main>
        </div>
        <footer>
          <div className="footer-title">
            <Link to="/#">
              <h4>HOME</h4>
            </Link>
            <h4>NEW</h4>
            <h4>PRODUCTS</h4>
            <h4>ABOUT/CONTACT</h4>
            <h2>© 2022 TheDEFT</h2>
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
