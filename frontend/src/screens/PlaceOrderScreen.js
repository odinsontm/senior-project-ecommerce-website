import React, { useContext, useEffect, useReducer } from 'react';
import Axios from 'axios';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  cart.taxPrice = round2(0.0725 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart, navigate]);

  const Contain = styled.div`
    background-image: linear-gradient(to bottom right, transparent, white);
    border-left: 3px solid #bead0f;
    padding: 1rem;
    margin: 1rem 0 1rem 0;
    transition: 350ms;

    &:hover {
      color: #ffffff;
      background-image: linear-gradient(to bottom right, #111111, #333333);
      scale: 1.05;
    }
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
    <div>
      <div class="banner"></div>
      <div className="main-content">
        <Helmet>
          <title>Preview Order</title>
        </Helmet>

        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <h1 className="page-title">Preview Order</h1>

        <Row className="justify-content-md-center main-content">
          <Col md={10}>
            <Row>
              <Col md={8}>
                <Contain>
                  <Card.Body>
                    <Card.Title>Shipping</Card.Title>
                    <Card.Text>
                      <strong>Name:</strong>
                      {cart.shippingAddress.fullName} <br />
                      <strong>Address:</strong>
                      {cart.shippingAddress.address},{cart.shippingAddress.city}
                      , {cart.shippingAddress.postalCode},
                      {cart.shippingAddress.country}
                    </Card.Text>
                    <Link to="/shipping">Edit</Link>
                  </Card.Body>
                </Contain>
                <Contain>
                  <Card.Body>
                    <Card.Title>Payment</Card.Title>
                    <Card.Text>
                      <strong>Method:</strong> {cart.paymentMethod}
                    </Card.Text>
                    <Link to="/payment">Edit</Link>
                  </Card.Body>
                </Contain>
                <Contain>
                  <Card.Title>Items</Card.Title>
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item) => (
                      <Item key={item._id}>
                        <Row className="d-flex justify-content-between align-items-center">
                          <Col md={2}>
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
                          <Col md={1}>
                            <span>{item.quantity}</span>
                          </Col>
                          <Col md={1}>
                            <Link to="/cart">Edit</Link>
                          </Col>
                        </Row>
                      </Item>
                    ))}
                  </ListGroup>
                </Contain>
              </Col>
              <Col md={1}></Col>
              <Col md={3}>
                <div>
                  <Card.Body>
                    <h4 style={{ marginBottom: '1rem' }}>Order Summary</h4>
                    <ListGroup variant="flush">
                      <div>
                        <Row>
                          <Col>Items</Col>
                          <Col>${cart.itemsPrice.toFixed(2)}</Col>
                        </Row>
                      </div>
                      <hr />
                      <div>
                        <Row>
                          <Col>Shipping</Col>
                          <Col>${cart.shippingPrice.toFixed(2)}</Col>
                        </Row>
                      </div>
                      <hr />
                      <div>
                        <Row>
                          <Col>Tax</Col>
                          <Col>${cart.taxPrice.toFixed(2)}</Col>
                        </Row>
                      </div>
                      <hr />
                      <div>
                        <Row>
                          <Col>
                            <strong>Order Total</strong>
                          </Col>
                          <Col>
                            <strong>${cart.totalPrice.toFixed(2)}</strong>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <div className="d-grid">
                          <button
                            type="button"
                            onClick={placeOrderHandler}
                            disabled={cart.cartItems.length === 0}
                            style={{ margin: '1rem 0 0 0' }}
                          >
                            Place Order
                          </button>
                        </div>
                        {loading && <LoadingBox></LoadingBox>}
                      </div>
                    </ListGroup>
                  </Card.Body>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
