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
  Badge,
} from "react-bootstrap";
import { getPackages, API_BASE } from "../../../utilities/api";

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

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPackages()
      .then((res) => {
        setPackages(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const getDurationUnitBadge = (unit) => {
    const variants = {
      monthly: "primary",
      yearly: "success",
      biannually: "warning",
    };
    return (
      <Badge bg={variants[unit] || "secondary"} className="text-capitalize">
        {unit}
      </Badge>
    );
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
                Packages List
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
                  <Table
                    bordered
                    hover
                    className="mb-0"
                    style={{ borderColor: "#e0e0e0", background: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th style={headerStyle}>Package Name</th>
                        <th style={headerStyle}>Description</th>
                        <th style={headerStyle}>Amount</th>
                        <th style={headerStyle}>Duration</th>
                        <th style={headerStyle}>Duration Unit</th>
                        <th style={headerStyle}>Created At</th>
                        <th style={headerStyle}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packages.length === 0 ? (
                        <tr>
                          <td
                            colSpan="7"
                            className="text-center py-4"
                            style={cellStyle}
                          >
                            No packages found
                          </td>
                        </tr>
                      ) : (
                        packages.map((item, idx) => (
                          <tr
                            key={item._id || idx}
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
                            <td style={cellStyle}>
                              <strong>{item.packageName}</strong>
                            </td>
                            <td style={cellStyle}>
                              {item.description ? (
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Popover>
                                      <Popover.Header as="h3">
                                        Description
                                      </Popover.Header>
                                      <Popover.Body>
                                        {item.description}
                                      </Popover.Body>
                                    </Popover>
                                  }
                                >
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#2196f3",
                                    }}
                                  >
                                    {item.description.length > 50
                                      ? `${item.description.substring(
                                          0,
                                          50
                                        )}...`
                                      : item.description}
                                  </span>
                                </OverlayTrigger>
                              ) : (
                                <span className="text-muted">
                                  No description
                                </span>
                              )}
                            </td>
                            <td style={cellStyle}>
                              <strong style={{ color: "#28a745" }}>
                                {formatCurrency(item.amount)}
                              </strong>
                            </td>
                            <td style={cellStyle}>
                              <span className="badge bg-info">
                                {item.duration || 0}
                              </span>
                            </td>
                            <td style={cellStyle}>
                              {getDurationUnitBadge(item.durationUnit)}
                            </td>
                            <td style={cellStyle}>
                              {formatDate(item.createdAt)}
                            </td>
                            <td style={cellStyle}>
                              <div className="d-flex gap-2">
                                <Button
                                  variant="outline-primary"
                                  size="sm"
                                  style={{
                                    borderRadius: 6,
                                    fontSize: "0.75rem",
                                  }}
                                  onClick={() => {
                                    // Add edit functionality
                                    console.log("Edit package:", item._id);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  style={{
                                    borderRadius: 6,
                                    fontSize: "0.75rem",
                                  }}
                                  onClick={() => {
                                    // Add delete functionality
                                    if (
                                      window.confirm(
                                        "Are you sure you want to delete this package?"
                                      )
                                    ) {
                                      console.log("Delete package:", item._id);
                                    }
                                  }}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PackagesList;
