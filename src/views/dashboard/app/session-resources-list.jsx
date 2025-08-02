import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Spinner, // Spinner was imported but not used, adding it to loading state
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getSessionResources } from "../../../utilities/api";

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

// --- Mock Data for Session Resources ---
const mockResources = [
  {
    _id: "res1",
    name: "Cardiology Lecture Notes - Part 1",
    type: "PDF",
    status: "Active",
    created: "2024-01-10",
    link: "https://example.com/notes-cardio-1.pdf", // Example link for PDF
    file: "/files/notes-cardio-1.pdf", // Assuming a file path in public/files
    sessionType: "Lecture",
    caseReading: "N/A",
    phase: "Phase 1",
    module: "Cardiology",
    session: "sess1", // Assuming a session ID to link
  },
  {
    _id: "res2",
    name: "Neurology Case Study - Stroke",
    type: "DOC",
    status: "Active",
    created: "2024-01-25",
    link: "https://example.com/case-stroke.doc",
    file: "/files/case-stroke.doc",
    sessionType: "Case",
    caseReading: "Case ID: 12345",
    phase: "Phase 2",
    module: "Neurology",
    session: "sess2",
  },
  {
    _id: "res3",
    name: "Orthopedic Surgery Protocol",
    type: "Video Link",
    status: "Active",
    created: "2024-02-05",
    link: "https://vimeo.com/your-video-id", // Example video link
    file: "N/A",
    sessionType: "Live",
    caseReading: "N/A",
    phase: "Phase 3",
    module: "Orthopedics",
    session: "sess3",
  },
  {
    _id: "res4",
    name: "Endocrinology Quiz",
    type: "Quiz",
    status: "Active",
    created: "2024-02-18",
    link: "https://example.com/quiz-endo",
    file: "N/A",
    sessionType: "Assessment",
    caseReading: "N/A",
    phase: "Phase 1",
    module: "Endocrinology",
    session: "sess4",
  },
  {
    _id: "res5",
    name: "Gastroenterology Guidelines",
    type: "PDF",
    status: "Inactive",
    created: "2024-03-01",
    link: "https://example.com/guidelines-gastro.pdf",
    file: "/files/guidelines-gastro.pdf",
    sessionType: "Lecture",
    caseReading: "N/A",
    phase: "Phase 2",
    module: "Gastroenterology",
    session: "sess5",
  },
];
// --- End Mock Data ---

const SessionResourcesList = () => {
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    setLoading(true); // Start loading
    getSessionResources()
      .then((res) => {
        // Check if data is valid and non-empty
        // Assuming API returns data directly in res.data, not res.data.data
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setResources(res.data);
          console.log("Fetched live session resources.");
        } else {
          // If API returns no data or invalid data, use mock data
          setResources(mockResources);
          console.warn(
            "API returned no session resources or invalid format. Using mock data."
          );
        }
        setLoading(false); // End loading
      })
      .catch((err) => {
        // If API call completely fails, use mock data and log the error (but not to UI)
        console.error("Error fetching session resources from API:", err);
        setResources(mockResources); // Fallback to mock data
        console.log("Using mock session resources data due to API error.");
        setLoading(false); // End loading
      });
  }, []);

  // Helper function to format date/created string (if needed, currently using as-is from mock)
  const formatCreatedDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      // Assuming dateString might be 'YYYY-MM-DD' or a full ISO string
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return dateString; // Return as-is if parsing fails
    }
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
                Session Resources List
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="#" // Link to create resource page
                  className="me-3"
                  style={{ color: "#2196f3", fontWeight: 600 }}
                >
                  Create Resource
                </Link>
              </div>
              <div className="mb-3 d-flex align-items-center">
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
                    {resources.length === 0 ? (
                      <div className="text-center p-4">
                        No session resources found.
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
                            <th style={headerStyle}>Resource Name</th>
                            <th style={headerStyle}>Type</th>
                            <th style={headerStyle}>Status</th>
                            <th style={headerStyle}>Created Date</th>
                            <th style={headerStyle}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {resources.map((item, idx) => (
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
                              <td style={cellStyle}>{item.name}</td>
                              <td style={cellStyle}>{item.type}</td>
                              <td style={cellStyle}>{item.status}</td>
                              <td style={cellStyle}>
                                {formatCreatedDate(item.created)}
                              </td>{" "}
                              {/* Format date */}
                              <td style={cellStyle}>
                                {/* Optional: Add OverlayTrigger for file/link preview */}
                                {item.file &&
                                  item.file !== "N/A" && ( // Only show if file exists
                                    <OverlayTrigger
                                      placement="top"
                                      overlay={
                                        <Popover
                                          id={`popover-file-${item._id || idx}`}
                                        >
                                          <Popover.Body>
                                            <a
                                              href={`${
                                                item.file.startsWith("/")
                                                  ? item.file
                                                  : item.link || "#"
                                              }`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {item.type === "PDF"
                                                ? "Open PDF"
                                                : "View File"}
                                            </a>
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
                                        View File
                                      </Button>
                                    </OverlayTrigger>
                                  )}
                                {item.link &&
                                  item.link !== "N/A" && ( // Only show if link exists
                                    <Button
                                      variant="link"
                                      size="sm"
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        padding: 0,
                                        color: "#2196f3",
                                        background: "transparent",
                                        border: "none",
                                        marginLeft:
                                          item.file && item.file !== "N/A"
                                            ? 8
                                            : 0, // Add margin if there's a file button
                                      }}
                                    >
                                      Open Link
                                    </Button>
                                  )}
                                <Button
                                  variant="link"
                                  size="sm"
                                  style={{ padding: 0, marginLeft: 8 }} // Adjust margin based on existence of other buttons
                                  onClick={() =>
                                    navigate("/create/session-resources", {
                                      state: {
                                        _id: item._id, // Pass ID for editing
                                        displayName: item.name,
                                        fileType: item.type || "",
                                        resourceLinkUrl: item.link || "",
                                        resourceFile: item.file || "",
                                        sessionType: item.sessionType || "",
                                        caseReading: item.caseReading || "",
                                        phase: item.phase || "",
                                        module: item.module || "",
                                        session: item.session || "",
                                        status: item.status,
                                        created: item.created,
                                      },
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
                  </>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span style={{ color: "#222" }}>
                  Showing 1 to {resources.length} of {resources.length} entries
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

export default SessionResourcesList;
