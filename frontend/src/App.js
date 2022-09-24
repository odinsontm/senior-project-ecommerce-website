import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <nav>
            {/* MENU BUTTON HERE */}
            <Link to="/">TheDEFT</Link>
            {/* ACCOUNT HERE */}
            {/* CART HERE */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer>
          <div class="footer-title">
            <h4>HOME</h4>
            <h4>NEW</h4>
            <h4>ABOUT/CONTACT</h4>
            <h4>ITEMS</h4>
            <h4>socials here</h4>
            <h1>TheDEFT</h1>
          </div>
          <div class="footer-title">
            <h4>SIGN IN</h4>
            <h4>CART</h4>
          </div>
          <div class="footer-title">
            <h2>© 2022 TheDEFT</h2>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
