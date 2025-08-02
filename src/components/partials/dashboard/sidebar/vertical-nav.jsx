import { useState, memo, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Accordion, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const VerticalNav = memo(() => {
  const { t } = useTranslation();
  let location = useLocation();
  const [active, setActive] = useState("");

  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
        {/* Create Dropdown */}
        <Accordion.Item
          as="li"
          eventKey="create"
          bsPrefix={`nav-item ${active === "create" ? "active" : ""}`}
          onClick={() => setActive(active === "create" ? "" : "create")}
        >
          <Accordion.Button
            as="div"
            className="nav-link"
            style={{
              background: "none",
              border: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Create</Tooltip>}
            >
              <i className="fa-solid fa-plus icon"></i>
            </OverlayTrigger>
            <span
              className="item-name"
              style={{ marginLeft: 8, padding: "5px" }}
            >
              Create
            </span>
          </Accordion.Button>
          <Accordion.Collapse eventKey="create">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Modules</Tooltip>}
                >
                  <Link className="nav-link" to="/create/modules">
                    <i
                      className="fa-solid fa-cubes"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Modules
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Pathologies</Tooltip>}
                >
                  <Link className="nav-link" to="/create/pathologies">
                    <i
                      className="fa-solid fa-money-bill"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Pathologies
                  </Link>
                </OverlayTrigger>
              </Nav.Item>

              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Sessions</Tooltip>}
                >
                  <Link className="nav-link" to="/create/sessions">
                    <i
                      className="fa-solid fa-calendar-alt"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Sessions
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Assessment Questions</Tooltip>}
                >
                  <Link className="nav-link" to="/create/assessment-questions">
                    <i
                      className="fa-regular fa-question-circle"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Assessment Questions
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Dicom Observation Titles</Tooltip>}
                >
                  <Link
                    className="nav-link"
                    to="/create/dicom-observation-titles"
                  >
                    <i
                      className="fa-solid fa-x-ray"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Dicom Observation Titles
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Session Resources</Tooltip>}
                >
                  <Link className="nav-link" to="/create/session-resources">
                    <i
                      className="fa-regular fa-folder-open"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Session Resources
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Faculty</Tooltip>}
                >
                  <Link className="nav-link" to="/create/faculty">
                    <i
                      className="fa-solid fa-user-md"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Faculty
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Packages</Tooltip>}
                >
                  <Link className="nav-link" to="/create/packages">
                    <i
                      className="fa-solid fa-cubes"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Packages
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        {/* Lists Dropdown */}
        <Accordion.Item
          as="li"
          eventKey="lists"
          bsPrefix={`nav-item ${active === "lists" ? "active" : ""}`}
          onClick={() => setActive(active === "lists" ? "" : "lists")}
        >
          <Accordion.Button
            as="div"
            className="nav-link"
            style={{
              background: "none",
              border: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Lists</Tooltip>}
            >
              <i className="fa-regular fa-clipboard icon"></i>
            </OverlayTrigger>
            <span
              className="item-name"
              style={{ marginLeft: 8, padding: "5px" }}
            >
              Lists
            </span>
            {/* REMOVED: <i className="fa-solid fa-chevron-down ms-auto"></i> */}
          </Accordion.Button>
          <Accordion.Collapse eventKey="lists">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Modules</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/modules">
                    <i
                      className="fa-solid fa-cubes"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Modules
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Pathologies</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/pathologies">
                    <i
                      className="fa-solid fa-money-bill"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Pathologies
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Sessions</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/sessions">
                    <i
                      className="fa-solid fa-calendar-alt"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Sessions
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Assessment Questions</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/assessment-questions">
                    <i
                      className="fa-regular fa-question-circle"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Assessment Questions
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Dicom Observation Titles</Tooltip>}
                >
                  <Link
                    className="nav-link"
                    to="/lists/dicom-observation-titles"
                  >
                    <i
                      className="fa-solid fa-x-ray"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Dicom Observation Titles
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Session Resources</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/session-resources">
                    <i
                      className="fa-regular fa-folder-open"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Session Resources
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Faculty</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/faculty">
                    <i
                      className="fa-solid fa-user-md"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Faculty
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
              <Nav.Item as="li">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Packages</Tooltip>}
                >
                  <Link className="nav-link" to="/lists/packages">
                    <i
                      className="fa-solid fa-cubes"
                      style={{ marginRight: 10 }}
                    ></i>{" "}
                    Packages
                  </Link>
                </OverlayTrigger>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        {/* Reports Dropdown */}
        <Accordion.Item
          as="li"
          eventKey="reports"
          bsPrefix={`nav-item ${active === "reports" ? "active" : ""}`}
          onClick={() => setActive(active === "reports" ? "" : "reports")}
        >
          <Accordion.Button
            as="div"
            className="nav-link"
            style={{
              background: "none",
              border: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Reports</Tooltip>}
            >
              <i className="fa-solid fa-chart-bar icon"></i>
            </OverlayTrigger>
            <span
              className="item-name"
              style={{ marginLeft: 8, padding: "5px" }}
            >
              Reports
            </span>
            {/* REMOVED: <i className="fa-solid fa-chevron-down ms-auto"></i> */}
          </Accordion.Button>
          <Accordion.Collapse eventKey="reports">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link className="nav-link" to="/reports/subitem1">
                  <i className="fa-regular fa-rectangle-list"></i> Subitem 1
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-link" to="/reports/subitem2">
                  <i className="fa-regular fa-circle"></i> Subitem 2
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        {/* Logout (no dropdown) */}
        <li
          className={`nav-item ${
            location.pathname === "/logout" ? "active" : ""
          }`}
        >
          <Link
            className={`nav-link ${
              location.pathname === "/logout" ? "active" : ""
            }`}
            to="/logout"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Logout</Tooltip>}
            >
              <i className="fa-solid fa-right-from-bracket icon"></i>
            </OverlayTrigger>
            <span className="item-name">Logout</span>
          </Link>
        </li>
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
