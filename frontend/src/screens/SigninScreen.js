import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <div>
      <div class="banner"></div>
      <div className="main-content">
        <Helmet>
          <title>Sign In</title>
        </Helmet>

        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1>Sign In</h1>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <div className="mb-3">
                <Button type="submit">Sign In</Button>
              </div>
              <div className="mb-3">
                New to theDeft?{' '}
                <Link to={`/signup?redirect=${redirect}`}>
                  Create your account
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
