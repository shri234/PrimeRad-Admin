import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// img
import auth1 from "/assets/images/auth/01.png";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

const Recoverpw = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();
  return (
    <Fragment>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary"
            >
              <h2 className="logo-title">PrimeRad Subscription Admin</h2>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col lg="8">
                <Card className="d-flex justify-content-center mb-0">
                  <Card.Body>
                    <h2 className="mb-2">Reset Password</h2>
                    <p>
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </p>
                    <form>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="floating-label form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              id="email"
                              aria-describedby="email"
                              placeholder=" "
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        onClick={() => history("/")}
                        type="button"
                        variant="btn btn-primary"
                      >
                        Reset
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-lg-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
          >
            <Image
              src={auth1}
              className="img-fluid gradient-main"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
});

Recoverpw.displayName = "Recoverpw";
export default Recoverpw;
