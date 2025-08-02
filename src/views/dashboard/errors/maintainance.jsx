import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// component
import Card from "../../../components/partials/dashboard/bootstrap/card";

// img
import maintenance from "/assets/images/error/02.png";

const Maintainance = memo(() => {
  return (
    <Fragment>
      <div className="mt-0 iq-maintenance">
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col sm="12" className="text-center">
              <div className="">
                <img src={maintenance} className="img-fluid" alt="" />
                <h3 className="mt-4 mb-1">
                  We are Currently Performing Maintenance
                </h3>
                <p>Please check back in sometime.</p>
              </div>
            </Col>
          </Row>
          <Container className="mt-3">
            <Row>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-regular fa-window-maximize"></i>
                    </i>
                    <h5 className="card-title mt-1">Why is the Site Down?</h5>
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-regular fa-clock"></i>
                    </i>
                    <h5 className="card-title mt-1">What is the Downtime?</h5>
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-solid fa-circle-info"></i>
                    </i>
                    <h5 className="card-title mt-1">Do you need Support?</h5>
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
});

Maintainance.displayName = "Maintainance";
export default Maintainance;
