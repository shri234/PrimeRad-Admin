import React, { Fragment } from "react";
import { Card, Carousel, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import card1 from "/assets/images/page-img/01.jpg";

const Carousels = () => {
  return (
    <Fragment>
      <div className="container-fluid">
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <Card.Title as="h4">Slides only</Card.Title>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleSlidesOnly"
                indicators={false}
                nextIcon={""}
                prevIcon={""}
                data-ride="carousel"
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Controls</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleControls"
                indicators={false}
                nextIcon={""}
                prevIcon={""}
                data-ride="carousel"
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>

            <Link
              className="carousel-control-prev"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </Link>

            <Link
              className="carousel-control-next"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </Link>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Indicators</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleSlidesOnly"
                indicators={true}
                nextIcon={""}
                prevIcon={""}
                data-ride="carousel"
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <Link
              className="carousel-control-prev"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </Link>

            <Link
              className="carousel-control-next"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </Link>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Captions</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="bd-example">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel
                  id="carouselExampleSlidesOnly"
                  indicators={true}
                  nextIcon={""}
                  prevIcon={""}
                  data-ride="carousel"
                >
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption>
                      <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption>
                      <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption>
                      <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
            <Link
              className="carousel-control-prev"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </Link>

            <Link
              className="carousel-control-next"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </Link>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Crossfade</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                fade
                id="carouselExampleFade"
                indicators={false}
                nextIcon={""}
                prevIcon={""}
                data-ride="carousel"
              > 
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              
            </Carousel>
            </Card.Body>
            <Link
              className="carousel-control-prev"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </Link>

            <Link
              className="carousel-control-next"
              to="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </Link>
          </Card>
        </Col>
      </Row>
      </div>
    </Fragment>
  );
};

Carousels.displayName = "Carousels";
export default Carousels;
