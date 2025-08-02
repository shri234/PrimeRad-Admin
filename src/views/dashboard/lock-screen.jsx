import { memo, Fragment } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/bootstrap/card";
import avatars1 from "/assets/images/avatars/01.png";
import auth1 from "/assets/images/auth/01.png";
import * as SettingSelector from "../../../store/setting/selectors";
import { useSelector } from "react-redux";

const LockScreen = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();

  return (
    <Fragment>
      <section className="login-content overflow-hidden">
        <Row className="no-gutters align-items-center bg-white">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary"
            >
              <h2 className="logo-title">PrimeRad Admin</h2>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col lg="8">
                <Card className="d-flex justify-content-center mb-0">
                  <Card.Body>
                    <img
                      src={avatars1}
                      className="rounded avatar-80 mb-3"
                      alt=""
                    />
                    <h2 className="mb-2">Hi ! Austin Robertson</h2>
                    <p>Enter your password to access the admin.</p>
                    <form>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="floating-label form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="password"
                              aria-describedby="password"
                              placeholder="xxxxx"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        onClick={() => history("/")}
                        type="button"
                        variant="btn btn-primary"
                      >
                        Login
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-lg-block d-none bg-primary p-0 mt-n1  overflow-hidden"
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

LockScreen.displayName = "LockScreen";
export default LockScreen;
