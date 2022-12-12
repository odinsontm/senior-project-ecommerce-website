/**
 * Contains all the Home Screen sections
 */

import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import street from '../pics/ProjectStreet.svg';
import styled from 'styled-components';
//import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  const ProjectStreet = styled.img`
    width: 15rem;
    height auto;
    margin-bottom: 1rem;
  `;

  return (
    <div>
      <Helmet>
        <title>TheDEFT</title>
      </Helmet>
      {/* home screen image */}
      <div class="title-media-wrapper">
        <div class="title-video-container">
          <div class="title-content">
            <ProjectStreet src={street} alt="account" />
            <div>
              <Link to={`/products/featured`}>
                <button>VIEW COLLECTION</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END home screen image */}

      {/* Featured Products Container */}

      <div class="feat-container">
        <div class="container-label">
          <h2>FEATURED ITEMS</h2>
        </div>
        <div class="container-label">
          <div>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              /* If statement filters isFeatured */
              <Row>
                {products.slice(0, 4).map((product) => {
                  if (product.isFeatured)
                    return (
                      <Col
                        key={product.slug}
                        lg={4}
                        md={3}
                        sm={1}
                        className="home-prod"
                      >
                        <Product product={product}></Product>
                      </Col>
                    );
                })}
              </Row>
            )}
          </div>
        </div>
      </div>

      {/* END Featured Products Container */}

      {/* New Products Container */}

      <div class="new-container">
        <div class="container-label">
          <h2>NEW ITEMS</h2>
        </div>
        <div class="container-label">
          <div>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              /* Gets current day, the date of product creation and compares. Filters out anything over 30 days*/
              <Row>
                {products.slice(0, 3).map((product) => {
                  const str = product.createdAt;
                  const then = new Date(str.substring(0, 10));
                  let today = new Date();
                  const msBetween = Math.abs(then.getTime() - today.getTime());
                  const daysBetween = msBetween / (24 * 60 * 60 * 1000);
                  if (daysBetween < 30)
                    return (
                      <Col
                        key={product.slug}
                        lg={4}
                        md={3}
                        sm={1}
                        className="home-prod"
                      >
                        <Product product={product}></Product>
                      </Col>
                    );
                })}
              </Row>
            )}
          </div>
        </div>
      </div>

      {/* END New Products Container */}

      <div class="footerimg"></div>
    </div>
  );
}

export default HomeScreen;
