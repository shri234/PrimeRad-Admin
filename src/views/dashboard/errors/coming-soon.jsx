import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container, Form, Button, Card } from "react-bootstrap";

const ComingSoon = memo(() => {
  return (
    <Fragment>
      <div className="wrapper vh-100">
        <div className="iq-comingsoon pt-5 h-100 d-flex align-items-center">
          <Container fluid>
            <div className="d-flex justify-content-center">
              <div className="col-sm-8 text-center">
                <div className="iq-comingsoon-info">
                  <a href="/admin">
                    <h2 className="text-primary">
                      PrimeRad Subscription Admin
                    </h2>
                  </a>
                  <h2 className="mt-4 mb-1">
                    Stay tuned, we're launching very soon
                  </h2>
                  <p>
                    We are working very hard to give you the best experience
                    possible!
                  </p>
                  <ul
                    className="countdown d-flex align-items-center list-inline row"
                    data-date="sep 02 2022 20:20:22"
                  >
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-days>300</span>Days
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-hours>15</span>Hours
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-minutes>40</span>Minutes
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-seconds>10</span>Seconds
                        </Card.Body>
                      </Card>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-4">
                <Form className="iq-comingsoon-form mt-5">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control comming mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email address"
                    />
                    <Button type="submit" className="btn btn-primary">
                      Subscribe
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
});

export default ComingSoon;
