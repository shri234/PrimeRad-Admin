import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//component
import Card from "../../../components/bootstrap/card";

//img
import mail from "/assets/images/auth/01.png";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

const ConfirmMail = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  return (
    <Fragment>
      <section className="login-content">
        <Row className=" m-0 align-items-center bg-white vh-100">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center  justify-content-center text-primary"
            >
              <h2 className="logo-title">PrimeRad Admin</h2>
            </Link>
            <Row className="justify-content-center">
              <Col md="12">
                <Card className="d-flex justify-content-center mb-0 p-3">
                  <Card.Body>
                    <h2 className="mt-3 mb-4">Success !</h2>
                    <p className="cnf-mail mb-1">
                      A email has been send to youremail@domain.com. Please
                      check for an email from company and click on the included
                      link to reset your password.
                    </p>
                    <div className="d-inline-block w-100">
                      <Link to="/" className="btn btn-primary mt-3">
                        Back to Home
                      </Link>
                    </div>
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
              src={mail}
              className="img-fluid gradient-main"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
});

ConfirmMail.displayName = "ConfirmMail";
export default ConfirmMail;
