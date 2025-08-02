import { memo, Fragment } from "react";

// React-bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

// components
import Card from "../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

const Breadcrumbs = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("ui_elements.breadcrumb")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.generat_breadcrumb")}.
                {t("ui_elements.use_class")}{" "}
                <code>.{t("ui_elements.breadcrumb_to_ol")}</code>
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item active>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item href="#">
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item href="#">
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#" className="ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.breadcrumb_with_icon")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.generat_breadcrumb")}
                <code>.{t("ui_elements.breadcrumb_to_ol")}</code>{" "}
                {t("ui_elements.with_icon")}
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item active>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                <Breadcrumb.Item href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#" className="ms-2   ">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("ui_elements.breadcrumb")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.use_class")}
                <code>.breadcrumb .bg-primary</code>
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white ms-2 ">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white">
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.breadcrumb_with_icon")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.use_class")}{" "}
                <code>.breadcrumb .bg-primary </code>{" "}
                {t("ui_elements.with_icon")}
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-primary">
                <Breadcrumb.Item active className="text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="text-white">
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.breadcrumb_with_icon")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.use_class")}{" "}
                <code>.breadcrumb .iq-bg-primary</code>
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                <Breadcrumb.Item active>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                <Breadcrumb.Item href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="ms-2 ">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                <Breadcrumb.Item href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
                <Breadcrumb.Item className="ms-2" href="#">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("ui_elements.breadcrumb_with_icon")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("ui_elements.use_class")}
                <code>.breadcrumb .iq-bg-danger</code>
              </p>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                <Breadcrumb.Item active>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {t("ui_elements.home")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                <Breadcrumb.Item className="text-danger">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2 text-danger"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-danger">{t("ui_elements.home")}</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="ms-2">
                  {t("ui_elements.library")}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                <Breadcrumb.Item className="text-danger">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2 text-danger"
                  >
                    <path
                      d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-danger">{t("ui_elements.home")}</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item className="text-danger">
                  <span className="text-danger ms-2">
                    {t("ui_elements.library")}
                  </span>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {t("ui_elements.data")}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Breadcrumbs.displayName = "Breadcrumbs";
export default Breadcrumbs;
