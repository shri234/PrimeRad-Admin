import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// img
import facebook from "/assets/images/brands/fb.svg";
import google from "/assets/images/brands/gm.svg";
import instagram from "/assets/images/brands/im.svg";
import linkedin from "/assets/images/brands/li.svg";
import auth1 from "/assets/images/auth/01.png";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

const SignUp = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();
  return (
    <Fragment>
      <section className="login-content overflow-hidden">
        <Row className="no-gutters align-items-center bg-white">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center justify-content-center text-primary"
            >
              <h2 className="logo-title">PrimeRad Admin</h2>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col md="9">
                <Card className="card  d-flex justify-content-center mb-0 auth-card iq-auth-form">
                  <Card.Body>
                    <h2 className="mb-2 text-center">Sign Up</h2>
                    <p className="text-center">Create your Streamit account.</p>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="full-name" className="">
                              Full Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="full-name"
                              placeholder="Jhon"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="last-name" className="">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="last-name"
                              placeholder="Doe"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              id="email"
                              placeholder="xyz@example.com"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="phone" className="">
                              Phone No.
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="phone"
                              placeholder="1234567890"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="password"
                              placeholder=" "
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="confirm-password" className="">
                              Confirm Password
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="confirm-password"
                              placeholder=" "
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-center">
                          <Form.Check className="mb-3 form-check">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              I agree with the terms of use
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={() => history("/")}
                          type="button"
                          variant="primary"
                        >
                          Sign Up
                        </Button>
                      </div>
                      <p className="text-center my-3">
                        or sign in with other accounts?
                      </p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={facebook} alt="fb" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={instagram} alt="im" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={linkedin} alt="li" />
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <p className="mt-3 text-center">
                        Already have an Account{" "}
                        <Link to="/auth/sign-in" className="text-underline">
                          Sign In
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden"
          >
            <Image
              src={auth1}
              className="Image-fluid gradient-main "
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
});

SignUp.displayName = "SignUp";
export default SignUp;
