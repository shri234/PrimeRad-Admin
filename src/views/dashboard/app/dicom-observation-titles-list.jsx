import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Spinner,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getDicomObservationTitles,
  getSessions,
  getObservationsBySession,
} from "../../../utilities/api";

const headerStyle = {
  background: "#f6f8fa",
  color: "#222",
  fontWeight: 700,
  fontSize: "1rem",
  borderBottom: "2px solid #2196f3",
};

const actionIconStyle = {
  color: "#2196f3",
  fontSize: "1.1rem",
  transition: "color 0.2s",
};

const cellStyle = {
  color: "#222",
  background: "#fff",
};

const rowHoverStyle = {
  background: "#f0f4fa",
  color: "#222",
};

const DicomObservationTitlesList = () => {
  const navigate = useNavigate();
  const [dicomTitles, setDicomTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");

  useEffect(() => {
    setLoading(true);
    getSessions()
      .then((res) => {
        setSessions(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (selectedSession) {
      setLoading(true);
      getObservationsBySession(selectedSession)
        .then((res) => {
          setDicomTitles(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    } else {
      setLoading(true);
      getDicomObservationTitles()
        .then((res) => {
          setDicomTitles(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [selectedSession]);

  const handleSessionChange = (e) => {
    setSelectedSession(e.target.value);
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
              border: "none",
            }}
          >
            <Card.Header
              className="bg-white"
              style={{
                borderTop: "4px solid #2196f3",
                borderRadius: "18px 18px 0 0",
              }}
            >
              <h4 className="mb-0" style={{ color: "#222", fontWeight: 700 }}>
                Dicom Observation Titles List
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="/create/dicom-observation-titles"
                  className="me-3"
                  style={{ color: "#2196f3", fontWeight: 600 }}
                >
                  Create Dicom Title
                </Link>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <Form.Group controlId="sessionFilter" className="w-auto me-3">
                  <Form.Label>Filter by Session</Form.Label>
                  <Form.Select
                    value={selectedSession}
                    onChange={handleSessionChange}
                    style={{
                      background: "#f6f8fa",
                      color: "#222",
                      border: "1px solid #e0e0e0",
                      borderRadius: 10,
                    }}
                  >
                    <option value="">All Sessions</option>
                    {sessions.map((session) => (
                      <option key={session._id} value={session._id}>
                        {session.title}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <select
                  className="form-select w-auto me-2"
                  defaultValue="10"
                  style={{
                    background: "#f6f8fa",
                    color: "#222",
                    border: "1px solid #e0e0e0",
                    borderRadius: 10,
                  }}
                >
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span>records per page</span>
                <div className="ms-auto">
                  <span className="me-2">Search:</span>
                  <input
                    type="text"
                    className="form-control d-inline-block w-auto bg-white text-dark"
                    style={{
                      minWidth: 180,
                      background: "#f6f8fa",
                      color: "#222",
                      border: "1px solid #e0e0e0",
                      borderRadius: 10,
                    }}
                  />
                </div>
              </div>
              <div className="table-responsive">
                {loading ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: 200 }}
                  >
                    <Spinner animation="border" role="status" variant="primary">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                  <Table
                    bordered
                    hover
                    className="mb-0"
                    style={{ borderColor: "#e0e0e0", background: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th style={headerStyle}>S.No.</th>
                        <th style={headerStyle}>Session Name</th>
                        <th style={headerStyle}>Module</th>
                        <th style={headerStyle}>Observations</th>
                        <th style={headerStyle}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dicomTitles.map((item, idx) => (
                        <tr
                          key={idx}
                          style={cellStyle}
                          onMouseOver={(e) =>
                            Object.assign(e.currentTarget.style, rowHoverStyle)
                          }
                          onMouseOut={(e) =>
                            Object.assign(e.currentTarget.style, cellStyle)
                          }
                        >
                          <td style={cellStyle}>{idx + 1}</td>
                          <td style={cellStyle}>{item.sessionName}</td>
                          <td style={cellStyle}>{item.Module}</td>
                          <td style={cellStyle}>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Popover>
                                  <Popover.Body>
                                    {item.observations.map((obs, i) => (
                                      <div key={i}>
                                        <strong>{obs.observationText}:</strong>{" "}
                                        {obs.facultyObservation}
                                      </div>
                                    ))}
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button
                                variant="link"
                                size="sm"
                                style={{
                                  padding: 0,
                                  color: "#2196f3",
                                  background: "transparent",
                                  border: "none",
                                }}
                              >
                                {item.observations.length}
                              </Button>
                            </OverlayTrigger>
                          </td>
                          <td style={cellStyle}>
                            <Button
                              variant="link"
                              size="sm"
                              style={{ padding: 0 }}
                              onClick={() =>
                                navigate("/create/dicom-observation-titles", {
                                  state: item,
                                })
                              }
                            >
                              <i
                                className="fa-regular fa-pen-to-square"
                                style={actionIconStyle}
                              ></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span style={{ color: "#222" }}>
                  Showing 1 to {dicomTitles.length} of {dicomTitles.length}{" "}
                  entries
                </span>
                <nav>
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <span
                        className="page-link bg-white text-dark"
                        style={{
                          color: "#222",
                          background: "#f6f8fa",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        &lt; Previous
                      </span>
                    </li>
                    <li className="page-item active">
                      <span
                        className="page-link bg-primary text-white"
                        style={{
                          background: "#2196f3",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        1
                      </span>
                    </li>
                    <li className="page-item disabled">
                      <span
                        className="page-link bg-white text-dark"
                        style={{
                          color: "#222",
                          background: "#f6f8fa",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        Next &gt;
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DicomObservationTitlesList;
