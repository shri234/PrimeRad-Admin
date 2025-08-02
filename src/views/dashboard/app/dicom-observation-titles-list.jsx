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

// --- Mock Data for Sessions ---
const mockSessions = [
  { _id: "sess1", title: "Knee MRI Essentials", module: "Orthopedics" },
  { _id: "sess2", title: "Brain CT Interpretation", module: "Neurology" },
  { _id: "sess3", title: "Spine X-Ray Analysis", module: "Radiology" },
  { _id: "sess4", title: "Cardiac Angiography Basics", module: "Cardiology" },
];

// --- Mock Data for Dicom Observation Titles ---
// This data will simulate observations for various sessions
const mockDicomTitles = [
  {
    _id: "obs1",
    sessionName: "Knee MRI Essentials",
    sessionId: "sess1",
    Module: "Orthopedics",
    observations: [
      {
        observationText: "Medial Meniscus",
        facultyObservation: "Degenerative changes",
      },
      {
        observationText: "Lateral Collateral Ligament",
        facultyObservation: "Intact",
      },
    ],
  },
  {
    _id: "obs2",
    sessionName: "Brain CT Interpretation",
    sessionId: "sess2",
    Module: "Neurology",
    observations: [
      {
        observationText: "Grey-White Matter Differentiation",
        facultyObservation: "Normal",
      },
      {
        observationText: "Ventricle Size",
        facultyObservation: "Within normal limits",
      },
    ],
  },
  {
    _id: "obs3",
    sessionName: "Knee MRI Essentials",
    sessionId: "sess1",
    Module: "Orthopedics",
    observations: [
      { observationText: "ACL", facultyObservation: "Partial tear" },
      { observationText: "PCL", facultyObservation: "Intact" },
    ],
  },
  {
    _id: "obs4",
    sessionName: "Spine X-Ray Analysis",
    sessionId: "sess3",
    Module: "Radiology",
    observations: [
      {
        observationText: "Vertebral Alignment",
        facultyObservation: "Mild scoliosis",
      },
      { observationText: "Disc Space L4-L5", facultyObservation: "Reduced" },
    ],
  },
  {
    _id: "obs5",
    sessionName: "Cardiac Angiography Basics",
    sessionId: "sess4",
    Module: "Cardiology",
    observations: [
      {
        observationText: "Left Main Coronary Artery",
        facultyObservation: "Patent",
      },
      { observationText: "Ejection Fraction", facultyObservation: "Normal" },
    ],
  },
];
// --- End Mock Data ---

const DicomObservationTitlesList = () => {
  const navigate = useNavigate();
  const [dicomTitles, setDicomTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");

  // Effect to fetch sessions for the filter dropdown
  useEffect(() => {
    setLoading(true);
    getSessions()
      .then((res) => {
        if (
          res.data &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          setSessions(res.data.data);
          console.log("Fetched live sessions for filter.");
        } else {
          setSessions(mockSessions);
          console.warn(
            "API returned no sessions or invalid format. Using mock sessions."
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching sessions for filter from API:", err);
        setSessions(mockSessions);
        console.log("Using mock sessions for filter due to API error.");
        setLoading(false);
      });
  }, []);

  // Effect to fetch Dicom Observations based on selectedSession
  useEffect(() => {
    setLoading(true);
    let promise;

    if (selectedSession) {
      // Filter mock data by sessionId if using mock data
      if (sessions === mockSessions) {
        const filteredMock = mockDicomTitles.filter(
          (item) => item.sessionId === selectedSession
        );
        promise = Promise.resolve({ data: { data: filteredMock } });
      } else {
        promise = getObservationsBySession(selectedSession);
      }
    } else {
      // Use mock data if sessions are mock AND no session is selected
      if (sessions === mockSessions) {
        promise = Promise.resolve({ data: { data: mockDicomTitles } });
      } else {
        promise = getDicomObservationTitles();
      }
    }

    promise
      .then((res) => {
        if (res.data && Array.isArray(res.data.data)) {
          setDicomTitles(res.data.data);
          console.log(`Fetched ${res.data.data.length} dicom titles.`);
        } else {
          // If API returns no data or invalid data, fall back to default mock data (all)
          setDicomTitles(mockDicomTitles);
          console.warn(
            "API returned no dicom titles or invalid format. Using all mock dicom titles."
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dicom observation titles from API:", err);
        setDicomTitles(mockDicomTitles); // Fallback to all mock data on error
        console.log("Using all mock dicom titles due to API error.");
        setLoading(false);
      });
  }, [selectedSession, sessions]); // Re-run when selectedSession changes or when sessions data loads

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
                  <Form.Label
                    className="me-2"
                    style={{ color: "#222", fontWeight: 500 }}
                  >
                    Filter by Session:
                  </Form.Label>
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
                  <span
                    className="me-2"
                    style={{ color: "#222", fontWeight: 500 }}
                  >
                    Search:
                  </span>
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
                  <>
                    {dicomTitles.length === 0 ? (
                      <div className="text-center p-4">
                        No Dicom Observation Titles found for this selection.
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
                              key={item._id || idx} // Use _id if available, fallback to index
                              style={cellStyle}
                              onMouseOver={(e) =>
                                Object.assign(
                                  e.currentTarget.style,
                                  rowHoverStyle
                                )
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
                                    <Popover
                                      id={`popover-observations-${
                                        item._id || idx
                                      }`}
                                    >
                                      <Popover.Body>
                                        <ul className="list-unstyled mb-0">
                                          {item.observations &&
                                          item.observations.length > 0 ? (
                                            item.observations.map((obs, i) => (
                                              <li key={i} className="mb-2">
                                                <strong>
                                                  {obs.observationText || "N/A"}
                                                  :
                                                </strong>{" "}
                                                {obs.facultyObservation ||
                                                  "No faculty observation"}
                                              </li>
                                            ))
                                          ) : (
                                            <li>
                                              No detailed observations
                                              available.
                                            </li>
                                          )}
                                        </ul>
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
                                    {item.observations
                                      ? item.observations.length
                                      : 0}
                                  </Button>
                                </OverlayTrigger>
                              </td>
                              <td style={cellStyle}>
                                <Button
                                  variant="link"
                                  size="sm"
                                  style={{ padding: 0 }}
                                  onClick={() =>
                                    navigate(
                                      "/create/dicom-observation-titles",
                                      {
                                        state: item, // Pass the whole item for editing
                                      }
                                    )
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
                  </>
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
