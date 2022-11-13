import React, { useContext, useEffect, useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  return (
    <div>
      <div class="banner"></div>
      <div className="main-content">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>

        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1 className="payment-title">Payment Method</h1>
            <Form onSubmit={submitHandler}>
              <div className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="PayPal"
                  label="PayPal"
                  value="PayPal"
                  checked={paymentMethodName === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button type="submit">Continue</button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
