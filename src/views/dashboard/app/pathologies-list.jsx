import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Spinner,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { getPathologies, API_BASE } from "../../../utilities/api";

const headerStyle = {
  background: "#f6f8fa",
  color: "#222",
  fontWeight: 700,
  fontSize: "1rem",
  borderBottom: "2px solid #2196f3",
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
const mockPathologies = [
  {
    _id: "mock1",
    pathologyName: "Osteoarthritis",
    description: "Degenerative joint disease, most common form of arthritis.",
    module: "Orthopedics",
    createdAt: "2024-01-15T10:30:00Z",
    image: "/images/mock-osteoarthritis.jpg", // Assuming mock images are in public/images
  },
  {
    _id: "mock2",
    pathologyName: "Rheumatoid Arthritis",
    description: "Chronic inflammatory disorder affecting joints.",
    module: "Rheumatology",
    createdAt: "2024-02-20T11:00:00Z",
    image: "/images/mock-rheumatoid.jpg",
  },
  {
    _id: "mock3",
    pathologyName: "Type 2 Diabetes",
    description: "Insulin resistance and high blood sugar.",
    module: "Endocrinology",
    createdAt: "2023-11-01T09:15:00Z",
    image: "/images/mock-diabetes.jpg",
  },
  {
    _id: "mock4",
    pathologyName: "Hypertension",
    description: "Persistently high blood pressure.",
    module: "Cardiology",
    createdAt: "2024-03-05T14:45:00Z",
    image: "/images/mock-hypertension.jpg",
  },
  {
    _id: "mock5",
    pathologyName: "Alzheimer's Disease",
    description: "Progressive neurodegenerative disease.",
    module: "Neurology",
    createdAt: "2023-10-22T16:00:00Z",
    image: "/images/mock-alzheimers.jpg",
  },
  {
    _id: "mock6",
    pathologyName: "Crohn's Disease",
    description: "Chronic inflammatory bowel disease.",
    module: "Gastroenterology",
    createdAt: "2024-04-10T08:00:00Z",
    image: "/images/mock-crohns.jpg",
  },
];
// --- End Mock Data ---

const PathologiesList = () => {
  const [pathologies, setPathologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to capture API error

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on each fetch attempt

    getPathologies()
      .then((res) => {
        // Check if data is valid and non-empty
        if (
          res.data &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          setPathologies(res.data.data);
          console.log("Fetched live data.");
        } else {
          // If API returns no data or invalid data, use mock data
          setPathologies(mockPathologies);
          console.warn(
            "API returned no data or invalid format. Using mock data."
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        // If API call completely fails, use mock data and log the error
        console.error("Error fetching pathologies from API:", err);
        setError(err); // Store the error
        setPathologies(mockPathologies); // Fallback to mock data
        console.log("Using mock data due to API error.");
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
                Pathologies List
              </h4>
            </Card.Header>
            <Card.Body>
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
                    {/* {error && (
                      <div
                        className="alert alert-danger"
                        role="alert"
                        style={{ margin: "15px" }}
                      >
                        Failed to load data from API. Displaying mock data.
                        Error: {error.message || "Unknown error"}
                      </div>
                    )} */}
                    {pathologies.length === 0 && !error ? (
                      <div className="text-center p-4">
                        No pathologies found.
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
                            <th style={headerStyle}>Pathology Name</th>
                            <th style={headerStyle}>Description</th>
                            <th style={headerStyle}>Module</th>
                            <th style={headerStyle}>Created At</th>
                            <th style={headerStyle}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pathologies.map((item, idx) => (
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
                              <td style={cellStyle}>{item.pathologyName}</td>
                              <td style={cellStyle}>{item.description}</td>
                              <td style={cellStyle}>{item.module}</td>
                              <td style={cellStyle}>
                                {formatDate(item.createdAt)}
                              </td>{" "}
                              {/* Format date */}
                              <td style={cellStyle}>
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Popover
                                      id={`popover-image-${item._id || idx}`}
                                    >
                                      <Popover.Body>
                                        <img
                                          // Construct image URL assuming API_BASE is for your backend
                                          // For mock data, images are relative to public folder
                                          src={
                                            item.image.startsWith("/")
                                              ? item.image
                                              : `${API_BASE}/${item.image}`
                                          }
                                          alt="Pathology"
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
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PathologiesList;
