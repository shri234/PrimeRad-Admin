import React, { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

//component
import IconComponent from "../../../components/icon-component";

const FontAwesome = memo(() => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Card>
            <Card.Body>
              <h4 className="fw-bold">Icons</h4>
              <div className="border-bottom mt-3"></div>
              <Row>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-address-book"
                    name="address-book"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-envelope-open"
                    name="evelope-open"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-id-card" name="id-card" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-telegram"
                    name="telegram"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-circle-user"
                    name="circle-user"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-chart-area"
                    name="chart-area"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-asterisk" name="asterisk" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-car" name="car" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-bars" name="bars" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-battery-full"
                    name="battery-full"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-bluetooth"
                    name="bluetooth"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-book " name="book" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-bug " name="bug" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-building "
                    name="building"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-calculator "
                    name="calculator"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-calendar-days"
                    name="calendar-days"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-camera" name="camera" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-commenting"
                    name="commenting"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-crop" name="crop" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-download" name="download" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-folder" name="folder" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-gift" name="gift" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-users" name="users" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-hashtag" name="hashtag" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-house-chimney"
                    name="house-chimney"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-lock" name="lock" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-graduation-cap"
                    name="graduation-cap"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-paper-plane"
                    name="paper-plane"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-star" name="star" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-tag" name="tag" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-trash" name="trash" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-upload" name="upload" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-university"
                    name="university"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-wifi" name="wifi" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-thumbs-up"
                    name="thumbs-up"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-train" name="train" />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-solid fa-file" name="file" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-snapchat"
                    name="snapchat"
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="fa-brands fa-twitter" name="twitter" />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-wordpress"
                    name="wordpress"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
});

FontAwesome.displayName = "FontAwesome";
export default FontAwesome;
