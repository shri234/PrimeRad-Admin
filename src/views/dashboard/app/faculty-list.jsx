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
import { Link } from "react-router-dom";
import { getFaculty, deleteFaculty, API_BASE } from "../../../utilities/api";

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

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getFaculty()
      .then((res) => {
        setFaculty(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this faculty member?")
    ) {
      deleteFaculty(id)
        .then(() => {
          setFaculty(faculty.filter((item) => item._id !== id));
        })
        .catch((err) => {
          console.error(err);
        });
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
                Faculty List
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="/create/faculty"
                  className="me-3"
                  style={{ color: "#1976d2", fontWeight: 500 }}
                >
                  Add Faculty
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
                    style={{ minWidth: 180 }}
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
                    style={{ borderColor: "#90caf9" }}
                  >
                    <thead>
                      <tr>
                        <th style={headerStyle}>S.No.</th>
                        <th style={headerStyle}>Name</th>
                        <th style={headerStyle}>Location</th>
                        <th style={headerStyle}>Country</th>
                        <th style={headerStyle}>Email</th>
                        <th style={headerStyle}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {faculty.map((item, idx) => (
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
                          <td style={cellStyle}>{item.name}</td>
                          <td style={cellStyle}>{item.location}</td>
                          <td style={cellStyle}>{item.country}</td>
                          <td style={cellStyle}>{item.email}</td>
                          <td style={cellStyle}>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Popover>
                                  <Popover.Body>
                                    <img
                                      src={`${API_BASE}/${item.image}`}
                                      alt="Faculty"
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
                            <Link
                              to={`/create/faculty?id=${item._id}`}
                              style={{ marginLeft: 8 }}
                            >
                              <Button
                                variant="link"
                                size="sm"
                                style={{ padding: 0 }}
                                onMouseOver={(e) =>
                                  (e.currentTarget.firstChild.style.color =
                                    "#0d47a1")
                                }
                                onMouseOut={(e) =>
                                  (e.currentTarget.firstChild.style.color =
                                    "#1976d2")
                                }
                              >
                                <i
                                  className="fa-regular fa-pen-to-square"
                                  style={actionIconStyle}
                                ></i>
                              </Button>
                            </Link>
                            <Button
                              variant="link"
                              size="sm"
                              style={{ padding: 0, marginLeft: 8 }}
                              onClick={() => handleDelete(item._id)}
                            >
                              <i
                                className="fa-regular fa-trash-can"
                                style={{ ...actionIconStyle, color: "#d32f2f" }}
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
                <span>
                  Showing 1 to {faculty.length} of {faculty.length} entries
                </span>
                <nav>
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <span className="page-link bg-white text-dark">
                        &lt; Previous
                      </span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link bg-primary text-white">1</span>
                    </li>
                    <li className="page-item disabled">
                      <span className="page-link bg-white text-dark">
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

export default FacultyList;
