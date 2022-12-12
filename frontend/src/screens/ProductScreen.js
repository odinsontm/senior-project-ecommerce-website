/**
 * Product detail view screen
 */

import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';
import styled from 'styled-components';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  const Price = styled.h3`
    margin: 1rem 0 1rem 0;
    font-weight: bold;
  `;

  const Des = styled.h6`
    font-weight: bold;
    margin: 1rem 0 1rem 0;
  `;

  const Button = styled.button`
    display: block;
    width: 65%;
  `;

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <div class="banner"></div>
      <Row className="justify-content-md-center main-content products">
        <Col md={4}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <h1>{product.name}</h1>
          <Price>${product.price}</Price>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>

          <hr />
          <>
            {product.countInStock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
          </>
          {product.countInStock > 0 && (
            <Button onClick={addToCartHandler} variant="primary">
              Add to Cart
            </Button>
          )}
          <Des>DESCRIPTION</Des>
          <p>{product.description}</p>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
