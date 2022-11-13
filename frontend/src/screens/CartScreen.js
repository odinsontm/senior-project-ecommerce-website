import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  const Button = styled.button`
    background-color: #eeeeee;
    color: black;
  `;

  const Item = styled.div`
    border-bottom: 1px solid;
    padding: 1rem 0 1rem 0;
  `;

  const Thumbnail = styled.img`
    height: 10rem;
    width: auto;
  `;

  return (
    <div class="main-content">
      <div class="banner"></div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1 class="page-title">Shopping Cart</h1>
      <Row className="justify-content-md-center main-content">
        <Col md={6}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Return to Store</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <div>
                  <Item key={item._id}>
                    <Row className="d-flex justify-content-between align-items-center">
                      <Col md={3}>
                        <Link to={`/product/${item.slug}`}>
                          <Thumbnail
                            src={item.image}
                            alt={item.name}
                          ></Thumbnail>{' '}
                        </Link>
                      </Col>
                      <Col md={4}>
                        <Link
                          to={`/product/${item.slug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <h4>{item.name}</h4>
                        </Link>
                        <p>${item.price}</p>
                      </Col>
                      <Col md={3}>
                        <Button
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        >
                          <i className="fas fa-minus-circle"></i>
                        </Button>{' '}
                        <span>{item.quantity}</span>{' '}
                        <Button
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          disabled={item.quantity === item.countInStock}
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeItemHandler(item)}>
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Item>
                </div>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <div>
            <ListGroup variant="flush">
              <div>
                <h3>
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                  items) : $
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </h3>
              </div>
              <hr />
              <div>
                <div className="d-grid">
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}
