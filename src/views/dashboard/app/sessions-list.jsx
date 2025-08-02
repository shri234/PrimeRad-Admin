import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Spinner,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getSessions, API_BASE } from "../../../utilities/api";

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

// Random data generator for sessions
const generateRandomSessions = () => {
  const sessionTypes = ["Dicom", "Vimeo", "Live", "Recorded"];
  const modules = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Gastroenterology",
    "Pulmonology",
    "Radiology",
    "Emergency Medicine",
    "Pediatrics",
    "Oncology",
    "Dermatology",
    "Ophthalmology",
    "ENT",
  ];

  const pathologies = [
    "Pneumonia",
    "Fracture",
    "Tumor",
    "Stroke",
    "Heart Attack",
    "Appendicitis",
    "Kidney Stones",
    "Pneumothorax",
    "Disc Herniation",
    "Pulmonary Embolism",
    "Aortic Aneurysm",
    "Brain Hemorrhage",
    "Liver Cirrhosis",
    "Gallstones",
    "Osteoarthritis",
    "Pneumothorax",
  ];

  const sessionTitles = [
    "Introduction to Cardiac Imaging",
    "Advanced MRI Techniques in Neurology",
    "CT Chest Interpretation for Beginners",
    "Pediatric X-Ray Analysis Workshop",
    "Emergency Radiology: Critical Cases",
    "Musculoskeletal Imaging Essentials",
    "Abdominal CT Protocols and Findings",
    "Neuroimaging of Stroke Patients",
    "Interventional Radiology Procedures",
    "Breast Imaging and Mammography",
    "Ultrasound Diagnostics in Emergency",
    "Nuclear Medicine: Cardiac Studies",
    "Thoracic Imaging: Common Pathologies",
    "Spine MRI: Degenerative Changes",
    "Vascular Imaging Techniques",
    "Head and Neck CT Interpretation",
    "Gastrointestinal Imaging Cases",
    "Pediatric Neuroimaging",
    "Orthopedic Trauma Imaging",
    "Pulmonary Function and Imaging",
    "Cardiac MRI Advanced Techniques",
    "Emergency CT Protocols",
    "Interventional Oncology Cases",
    "Reproductive System Imaging",
    "Geriatric Radiology Considerations",
  ];

  return Array.from({ length: 25 }, (_, i) => ({
    _id: `session_${i + 1}`,
    title: sessionTitles[Math.floor(Math.random() * sessionTitles.length)],
    sessionType: sessionTypes[Math.floor(Math.random() * sessionTypes.length)],
    moduleName: modules[Math.floor(Math.random() * modules.length)],
    pathologyName: pathologies[Math.floor(Math.random() * pathologies.length)],
    isFree: Math.random() > 0.6, // 40% chance of being free
    image1920x1080: `images/session-${(i % 5) + 1}.jpg`, // Cycling through 5 placeholder images
    createdAt: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    difficulty: ["beginner", "intermediate", "advanced"][
      Math.floor(Math.random() * 3)
    ],
    duration: Math.floor(Math.random() * 120) + 30, // 30-150 minutes
    isAssessment: Math.random() > 0.8, // 20% chance of being assessment
  }));
};

const SessionsList = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    getSessions()
      .then((res) => {
        // Check if API returned valid data
        if (
          res.data &&
          res.data.data &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          setSessions(res.data.data);
        } else {
          // Use random data if API returns empty or invalid data
          console.log("API returned empty data, using random data");
          setSessions(generateRandomSessions());
        }
        setLoading(false);
      })
      .catch((err) => {
        // Use random data if API fails
        console.error("API failed, using random data:", err);
        setSessions(generateRandomSessions());
        setLoading(false);
      });
  }, []);

  // Filter sessions based on search term
  const filteredSessions = sessions.filter(
    (session) =>
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.moduleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.pathologyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.sessionType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalRecords = filteredSessions.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);
  const currentSessions = filteredSessions.slice(startIndex, endIndex);

  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                Sessions List ({totalRecords} total)
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="/create/sessions"
                  className="me-3"
                  style={{ color: "#2196f3", fontWeight: 600 }}
                >
                  Create Session
                </Link>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <select
                  className="form-select w-auto me-2"
                  value={recordsPerPage}
                  onChange={handleRecordsPerPageChange}
                  style={{
                    background: "#f6f8fa",
                    color: "#222",
                    border: "1px solid #e0e0e0",
                    borderRadius: 10,
                  }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span>records per page</span>
                <div className="ms-auto">
                  <span className="me-2">Search:</span>
                  <input
                    type="text"
                    className="form-control d-inline-block w-auto bg-white text-dark"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search sessions..."
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
                ) : currentSessions.length === 0 ? (
                  <div
                    className="d-flex justify-content-center align-items-center flex-column"
                    style={{ minHeight: 200 }}
                  >
                    <h5 className="text-muted">No sessions found</h5>
                    <p className="text-muted">
                      Try adjusting your search criteria
                    </p>
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
                        <th style={headerStyle}>Title</th>
                        <th style={headerStyle}>Session Type</th>
                        <th style={headerStyle}>Module</th>
                        <th style={headerStyle}>Pathology</th>
                        <th style={headerStyle}>Is Free</th>
                        <th style={headerStyle}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSessions.map((item, idx) => (
                        <tr
                          key={item._id || idx}
                          style={cellStyle}
                          onMouseOver={(e) =>
                            Object.assign(e.currentTarget.style, rowHoverStyle)
                          }
                          onMouseOut={(e) =>
                            Object.assign(e.currentTarget.style, cellStyle)
                          }
                        >
                          <td style={cellStyle}>{startIndex + idx + 1}</td>
                          <td style={cellStyle}>
                            <div>
                              <strong>{item.title}</strong>
                              {item.isAssessment && (
                                <span className="badge bg-warning ms-2">
                                  Assessment
                                </span>
                              )}
                            </div>
                          </td>
                          <td style={cellStyle}>
                            <span
                              className="badge"
                              style={{
                                backgroundColor:
                                  item.sessionType === "Dicom"
                                    ? "#6a11cb"
                                    : item.sessionType === "Vimeo"
                                    ? "#2575fc"
                                    : item.sessionType === "Live"
                                    ? "#14e788"
                                    : "#f68a04",
                                color: "white",
                              }}
                            >
                              {item.sessionType}
                            </span>
                          </td>
                          <td style={cellStyle}>{item.moduleName}</td>
                          <td style={cellStyle}>{item.pathologyName}</td>
                          <td style={cellStyle}>
                            <span
                              className={`badge ${
                                item.isFree ? "bg-success" : "bg-secondary"
                              }`}
                            >
                              {item.isFree ? "Free" : "Paid"}
                            </span>
                          </td>
                          <td style={cellStyle}>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Popover>
                                  <Popover.Body>
                                    <div className="text-center">
                                      <div
                                        style={{
                                          width: 150,
                                          height: 100,
                                          background:
                                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                          borderRadius: 8,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "white",
                                          fontSize: "14px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {item.title}
                                      </div>
                                      <small className="text-muted mt-2 d-block">
                                        {item.sessionType} • {item.difficulty}
                                      </small>
                                    </div>
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
                                View
                              </Button>
                            </OverlayTrigger>
                            <Button
                              variant="link"
                              size="sm"
                              style={{ padding: 0, marginLeft: 8 }}
                              onClick={() =>
                                navigate("/create/sessions", { state: item })
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
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span style={{ color: "#222" }}>
                  Showing {startIndex + 1} to {endIndex} of {totalRecords}{" "}
                  entries
                  {searchTerm &&
                    ` (filtered from ${sessions.length} total entries)`}
                </span>
                <nav>
                  <ul className="pagination mb-0">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                          color: "#222",
                          background: "#f6f8fa",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        &lt; Previous
                      </button>
                    </li>

                    {/* Page numbers */}
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <li
                          key={pageNum}
                          className={`page-item ${
                            currentPage === pageNum ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(pageNum)}
                            style={{
                              background:
                                currentPage === pageNum ? "#2196f3" : "#f6f8fa",
                              color: currentPage === pageNum ? "#fff" : "#222",
                              border: "1px solid #e0e0e0",
                            }}
                          >
                            {pageNum}
                          </button>
                        </li>
                      );
                    })}

                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                          color: "#222",
                          background: "#f6f8fa",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        Next &gt;
                      </button>
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

export default SessionsList;
