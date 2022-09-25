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
          <Navbar bg="dark" variant="dark">
            <Container>
              {/* MENU BUTTON HERE */}
              <LinkContainer to="/">
                <Navbar.Brand>TheDEFT</Navbar.Brand>
              </LinkContainer>
              {/* ACCOUNT HERE */}
              {/* CART HERE */}
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div>© 2022 TheDEFT</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
