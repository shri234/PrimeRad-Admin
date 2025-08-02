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
import { getModules, API_BASE } from "../../../utilities/api";

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

// --- Mock Data for demonstration/fallback ---
const mockModules = [
  {
    _id: "mod1",
    categoryName: "Cardiology",
    image: "/images/mock-cardiology.jpg", // Assuming mock images are in public/images
    status: "Active",
    createdAt: "2024-01-01T10:00:00Z",
    description: "Study of heart and blood vessels.", // Added for completeness, matching Pathology schema
  },
  {
    _id: "mod2",
    categoryName: "Neurology",
    image: "/images/mock-neurology.jpg",
    status: "Active",
    createdAt: "2024-01-15T11:30:00Z",
    description: "Focus on the nervous system.",
  },
  {
    _id: "mod3",
    categoryName: "Orthopedics",
    image: "/images/mock-orthopedics.jpg",
    status: "Active",
    createdAt: "2024-02-01T09:00:00Z",
    description: "Diseases of musculoskeletal system.",
  },
  {
    _id: "mod4",
    categoryName: "Endocrinology",
    image: "/images/mock-endocrinology.jpg",
    status: "Inactive",
    createdAt: "2024-02-20T14:00:00Z",
    description: "Glands and hormones study.",
  },
  {
    _id: "mod5",
    categoryName: "Gastroenterology",
    image: "/images/mock-gastro.jpg",
    status: "Active",
    createdAt: "2024-03-01T10:15:00Z",
    description: "Digestive system disorders.",
  },
  {
    _id: "mod6",
    categoryName: "Dermatology",
    image: "/images/mock-dermatology.jpg",
    status: "Active",
    createdAt: "2024-03-10T12:00:00Z",
    description: "Skin, hair, and nail conditions.",
  },
  {
    _id: "mod7",
    categoryName: "Pulmonology",
    image: "/images/mock-pulmonology.jpg",
    status: "Active",
    createdAt: "2024-03-25T15:30:00Z",
    description: "Respiratory system diseases.",
  },
];
// --- End Mock Data ---

const ModulesList = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getModules()
      .then((res) => {
        // Check if data is valid and non-empty
        if (
          res.data &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          setModules(res.data.data);
          console.log("Fetched live module data.");
        } else {
          // If API returns no data or invalid data, use mock data
          setModules(mockModules);
          console.warn(
            "API returned no module data or invalid format. Using mock data."
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        // If API call completely fails, use mock data and log the error (but not to UI)
        console.error("Error fetching modules from API:", err);
        setModules(mockModules); // Fallback to mock data
        console.log("Using mock module data due to API error.");
        setLoading(false);
      });
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return "Invalid Date";
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
                Modules List
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="/create/modules"
                  className="me-3"
                  style={{ color: "#2196f3", fontWeight: 600 }}
                >
                  Create Module
                </Link>
                <Link to="#" style={{ color: "#2196f3", fontWeight: 600 }}>
                  Map Module
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
                  <>
                    {modules.length === 0 ? ( // Display "No modules found" only if module array is empty after loading
                      <div className="text-center p-4">No modules found.</div>
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
                            <th style={headerStyle}>Module Name</th>
                            <th style={headerStyle}>Module Image</th>
                            <th style={headerStyle}>Status</th>
                            <th style={headerStyle}>Created Date</th>
                            <th style={headerStyle}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modules.map((mod, idx) => (
                            <tr
                              key={mod._id || idx} // Use _id if available, fallback to index
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
                              <td style={cellStyle}>{mod.categoryName}</td>
                              <td style={cellStyle}>
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Popover
                                      id={`popover-image-${mod._id || idx}`}
                                    >
                                      <Popover.Body>
                                        <img
                                          // Construct image URL: use relative path for mock, API_BASE for live
                                          src={
                                            mod.image.startsWith("/")
                                              ? mod.image
                                              : `${API_BASE}/${mod.image}`
                                          }
                                          alt="Module"
                                          style={{
                                            maxWidth: 150,
                                            borderRadius: 8,
                                          }}
                                        />
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
                              </td>
                              <td style={cellStyle}>{mod.status}</td>
                              <td style={cellStyle}>
                                {formatDate(mod.createdAt)}
                              </td>{" "}
                              {/* Format date */}
                              <td style={cellStyle}>
                                <Button
                                  variant="link"
                                  size="sm"
                                  style={{ padding: 0 }}
                                  onClick={() =>
                                    navigate("/create/modules", {
                                      state: {
                                        // Pass relevant data for editing
                                        _id: mod._id, // Important for editing existing module
                                        categoryName: mod.categoryName,
                                        description: mod.description || "",
                                        moduleImage: mod.image,
                                        status: mod.status,
                                        createdAt: mod.createdAt, // Use consistent field name for consistency
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
                  Showing 1 to {modules.length} of {modules.length} entries
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

export default ModulesList;
