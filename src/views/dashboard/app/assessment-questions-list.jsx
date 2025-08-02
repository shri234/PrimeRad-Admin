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
import {
  getAssessmentQuestions,
  deleteAssessmentQuestion,
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

const AssessmentQuestionsList = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAssessmentQuestions()
      .then((res) => {
        setQuestions(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this assessment question?"
      )
    ) {
      deleteAssessmentQuestion(id)
        .then(() => {
          setQuestions(questions.filter((item) => item._id !== id));
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
                Assessment Questions List
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Link
                  to="/create/assessment-questions"
                  className="me-3"
                  style={{ color: "#2196f3", fontWeight: 600 }}
                >
                  Create Question
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
                  <Table
                    bordered
                    hover
                    className="mb-0"
                    style={{ borderColor: "#e0e0e0", background: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th style={headerStyle}>S.No.</th>
                        <th style={headerStyle}>Question</th>
                        <th style={headerStyle}>Options</th>
                        <th style={headerStyle}>Correct Answer</th>
                        <th style={headerStyle}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {questions.map((item, idx) => (
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
                          <td style={cellStyle}>{item.question}</td>
                          <td style={cellStyle}>
                            <OverlayTrigger
                              trigger={["hover", "focus"]}
                              placement="top"
                              overlay={
                                <Popover id={`popover-positioned-top`}>
                                  <Popover.Header as="h3">
                                    Options
                                  </Popover.Header>
                                  <Popover.Body>
                                    <ul className="list-unstyled">
                                      <li>
                                        <strong>A:</strong> {item.options.a}
                                      </li>
                                      <li>
                                        <strong>B:</strong> {item.options.b}
                                      </li>
                                      <li>
                                        <strong>C:</strong> {item.options.c}
                                      </li>
                                      <li>
                                        <strong>D:</strong> {item.options.d}
                                      </li>
                                    </ul>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button
                                variant="link"
                                size="sm"
                                style={{ color: "#2196f3" }}
                              >
                                View
                              </Button>
                            </OverlayTrigger>
                          </td>
                          <td style={cellStyle}>{item.correctAnswer}</td>
                          <td style={cellStyle}>
                            <Link
                              to={`/create/assessment-questions?id=${item._id}`}
                            >
                              <Button
                                variant="link"
                                size="sm"
                                style={{ padding: 0 }}
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
                <span style={{ color: "#222" }}>
                  Showing 1 to {questions.length} of {questions.length} entries
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

export default AssessmentQuestionsList;
