import React, { Fragment } from "react";
import { Badge, Row, Col } from "react-bootstrap";
// component
import Card from "../../components/bootstrap/card";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const Badges = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("ui_elements.badge")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.relative_font_sizing")}{" "}
                <code>{t("ui_elements.em")}</code> {t("ui_elements.units")}.
              </p>
              <h1 className="mt-2 me-1">
                {t("ui_elements.example_heading")}
                <Badge bg="primary">{t("dashboard.new")}</Badge>
              </h1>
              <h2 className="mt-2 me-1">
                {t("ui_elements.example_heading")}{" "}
                <Badge bg="secondary">{t("dashboard.new")}</Badge>
              </h2>
              <h3 className="mt-2 me-1">
                {t("ui_elements.example_heading")}
                {/* <button type="button" className="btn btn-success">
                              Notifications
                           </button> */}
                <Badge bg="success">{t("dashboard.new")}</Badge>
              </h3>
              <h4 className="mt-2 me-1">
                {t("ui_elements.example_heading")}{" "}
                <Badge bg="danger">{t("dashboard.new")}</Badge>
              </h4>
              <h5 className="mt-2 me-1">
                {t("ui_elements.example_heading")}
                <Badge bg="warning">{t("dashboard.new")}</Badge>
              </h5>
              <h6 className="mb-0">
                {t("ui_elements.example_heading")}
                <Badge bg="info">{t("dashboard.new")}</Badge>
              </h6>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("ui_elements.button_badges")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>{t("ui_elements.provide_counter")}.</p>
              <button type="button" className="btn mb-1 btn-primary">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="light" className=" text-dark ml-2">
                  4
                </Badge>{" "}
              </button>{" "}
              <button type="button" className="btn mb-1 btn-success">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="light" className="text-dark ml-2">
                  4
                </Badge>{" "}
              </button>{" "}
              <button type="button" className="btn mb-1 btn-danger">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="light" className="text-dark ml-2">
                  4
                </Badge>{" "}
              </button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.button_light_background_badges")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>{t("ui_elements.provide_counter")}</p>
              <button type="button" className="btn mb-1 btn-outline-primary">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="primary" className=" ml-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 btn-outline-success">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="success" className=" ml-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 btn-outline-danger">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="danger" className="ml-2">
                  4
                </Badge>
              </button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.button_border_badges")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>{t("ui_elements.provide_counter")}</p>
              <button type="button" className="btn mb-1 bg-soft-primary">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="primary" className="ml-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 bg-soft-success">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="success" className=" ml-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 bg-soft-danger">
                {t("ui_elements.badge_notification")}{" "}
                <Badge bg="danger" className="ml-2">
                  4
                </Badge>
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.contextual_variations")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-0">
                {t("ui_elements.mentioned_modifier_classes")}
              </p>
              <Badge bg="primary" className="mt-2">
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge bg="secondary" className="mt-2">
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge bg="success" className="mt-2">
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge bg="danger" className="mt-2">
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge bg="warning" className="mt-2">
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge bg="info" className="mt-2">
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge bg="light" className="mt-2">
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge bg="dark" className="mt-2">
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge bg="gray" className="mt-2">
                {t("ui_elements.gray")}
              </Badge>{" "}
              <h5 className="card-title mt-4">
                {t("ui_elements.pill_badges")}
              </h5>
              <p className="mb-0">
                {t("ui_elements.use_the")}
                <code>.{t("ui_elements.badge_pill")}</code>{" "}
                {t("ui_elements.badges_more_rounded")}{" "}
                <code>{t("ui_elements.border_radius")}</code>{" "}
                {t("ui_elements.additional_horizontal")}
                <code>{t("ui_elements.padding")}</code>).{" "}
                {t("ui_elements.badges_from_v3")}.
              </p>
              <Badge pill bg="primary" className="mt-2">
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge pill bg="secondary" className="mt-2">
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge pill bg="success" className=" mt-2">
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge pill bg="danger" className="mt-2">
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge pill bg="warning" className=" mt-2">
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge pill bg="info" className="mt-2">
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge pill bg="light" className="mt-2">
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge pill bg="dark" className="mt-2">
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge pill bg="gray" className="mt-2">
                {t("ui_elements.gray")}
              </Badge>{" "}
              <h5 className="card-title mt-4">{t("ui_elements.links")}</h5>
              <p className="mb-0">
                {t("ui_elements.using_the_contextual")}{" "}
                <code>{t("ui_elements.badge_star")}</code>{" "}
                {t("ui_elements.classes_on_an")}{" "}
                <code>{t("ui_elements.a")}</code> {t("ui_elements.a")}{" "}
                <em>{t("ui_elements.actionable")}</em>{" "}
                {t("ui_elements.hover_and_focus_states")}
              </p>
              <Badge as={Link} bg="primary" to="#" className="mt-2">
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge as={Link} bg="secondary" to="#" className="mt-2">
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge as={Link} bg="success" to="#" className="mt-2">
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge as={Link} bg="danger" to="#" className="mt-2">
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge as={Link} bg="warning" to="#" className="mt-2">
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge as={Link} bg="info" to="#" className="mt-2">
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge as={Link} bg="light" to="#" className="mt-2">
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge as={Link} bg="dark" to="#" className="mt-2">
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge as={Link} bg="gray" to="#" className="mt-2">
                {t("ui_elements.gray")}
              </Badge>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.contextual_variations_border")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-0">
                {t("ui_elements.mentioned_modifier_classes")}
              </p>
              <Badge
                bg=""
                bsPrefix="badge border border-primary text-primary mt-2"
              >
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-secondary text-secondary mt-2"
              >
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-success text-success mt-2"
              >
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-danger text-danger mt-2"
              >
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-warning text-warning mt-2"
              >
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge bg="" className="badge border border-info text-info mt-2">
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-light text-light mt-2"
              >
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge bg="" className="badge border border-dark text-dark mt-2">
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge bg="" className="badge border border-gray text-gray mt-2">
                {t("ui_elements.gray")}
              </Badge>{" "}
              <h5 className="card-title mt-4">
                {t("ui_elements.pill_badges")}
              </h5>
              <p className="mb-0">
                {t("ui_elements.use_the")}{" "}
                <code>.{t("ui_elements.badge_pill")}</code>{" "}
                {t("ui_elements.badges_more_rounded")}{" "}
                <code>{t("ui_elements.border_radius")}</code>{" "}
                {t("ui_elements.additional_horizontal")}
                <code>{t("ui_elements.padding")}</code>).
                {t("ui_elements.badges_from_v3")}
              </p>
              <Badge
                pill
                bg=""
                className="badge border border-primary text-primary mt-2"
              >
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-secondary text-secondary mt-2"
              >
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-success text-success mt-2"
              >
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-danger text-danger mt-2"
              >
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-warning text-warning mt-2 "
              >
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-info text-info mt-2"
              >
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-light text-light mt-2"
              >
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-dark text-dark mt-2"
              >
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge
                pill
                bg=""
                className="badge border border-gray text-gray mt-2"
              >
                {t("ui_elements.gray")}
              </Badge>{" "}
              <h5 className="card-title mt-4">{t("ui_elements.links")}</h5>
              <p className="mb-0">
                {t("ui_elements.using_the_contextual")}
                <code>.{t("ui_elements.badge_star")}</code>{" "}
                {t("ui_elements.classes_on_an")}{" "}
                <code>&lt;{t("ui_elements.a")}a&gt;</code>{" "}
                {t("ui_elements.element_quickly_provide")}
                <em>{t("ui_elements.actionable")}</em>{" "}
                {t("ui_elements.hover_and_focus_states")}
              </p>
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-primary text-primary mt-2"
              >
                {t("ui_elements.primary")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-secondary text-secondary mt-2"
              >
                {t("ui_elements.secondary")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-success text-success mt-2"
              >
                {t("ui_elements.success")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-danger text-danger mt-2"
              >
                {t("ui_elements.danger")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-warning text-warning mt-2"
              >
                {t("ui_elements.warning")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-info text-info mt-2"
              >
                {t("ui_elements.info")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-light text-light mt-2"
              >
                {t("ui_elements.light")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-dark text-dark mt-2"
              >
                {t("ui_elements.dark")}
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-gray text-gray mt-2"
              >
                {t("ui_elements.gray")}
              </Badge>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Badges;
