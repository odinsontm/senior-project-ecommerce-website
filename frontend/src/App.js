/**
 * Main app file. Sets up the routes/connects the site. Also adds header and footer to every page
 */

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
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
import AllProductsScreen from './screens/AllProductsScreen';
import NewProductScreen from './screens/NewProductScreen';

function App() {
  return (
    <BrowserRouter>
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
              <Route path="/products/all" element={<AllProductsScreen />} />
              <Route path="/products/new" element={<NewProductScreen />} />
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
            <Link to="/" style={{ textDecoration: 'none', color: '#eeeeee' }}>
              <h4>HOME</h4>
            </Link>
            <Link
              to="/products/new"
              style={{ textDecoration: 'none', color: '#eeeeee' }}
            >
              <h4>NEW</h4>
            </Link>
            <Link
              to="/products/featured"
              style={{ textDecoration: 'none', color: '#eeeeee' }}
            >
              <h4>PRODUCTS</h4>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: '#eeeeee' }}
            >
              <h4>ABOUT/CONTACT</h4>
            </Link>
            <h2>© 2022 TheDEFT</h2>
          </div>
        </footer>
        <Fragment>
          <ScrollButton />
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
