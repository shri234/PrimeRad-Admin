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

const PathologiesList = () => {
  const [pathologies, setPathologies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPathologies()
      .then((res) => {
        setPathologies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

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
                          key={idx}
                          style={cellStyle}
                          onMouseOver={(e) =>
                            Object.assign(e.currentTarget.style, rowHoverStyle)
                          }
                          onMouseOut={(e) =>
                            Object.assign(e.currentTarget.style, cellStyle)
                          }
                        >
                          <td style={cellStyle}>{item.pathologyName}</td>
                          <td style={cellStyle}>{item.description}</td>
                          <td style={cellStyle}>{item.module}</td>
                          <td style={cellStyle}>{item.createdAt}</td>
                          <td style={cellStyle}>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Popover>
                                  <Popover.Body>
                                    <img
                                      src={`${API_BASE}/${item.image}`}
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PathologiesList;
