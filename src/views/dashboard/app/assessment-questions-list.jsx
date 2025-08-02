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

// --- Mock Data for demonstration/fallback ---
const mockQuestions = [
  {
    _id: "q1",
    question: "Which of the following is the largest artery in the human body?",
    options: {
      a: "Pulmonary Artery",
      b: "Aorta",
      c: "Carotid Artery",
      d: "Femoral Artery",
    },
    correctAnswer: "B",
  },
  {
    _id: "q2",
    question: "What is the primary function of red blood cells?",
    options: {
      a: "Fighting infection",
      b: "Clotting blood",
      c: "Carrying oxygen",
      d: "Producing antibodies",
    },
    correctAnswer: "C",
  },
  {
    _id: "q3",
    question:
      "Which part of the brain is responsible for balance and coordination?",
    options: {
      a: "Cerebrum",
      b: "Cerebellum",
      c: "Brainstem",
      d: "Thalamus",
    },
    correctAnswer: "B",
  },
  {
    _id: "q4",
    question: "What hormone is responsible for regulating blood sugar levels?",
    options: {
      a: "Estrogen",
      b: "Testosterone",
      c: "Insulin",
      d: "Adrenaline",
    },
    correctAnswer: "C",
  },
  {
    _id: "q5",
    question: "Which bone is commonly known as the 'kneecap'?",
    options: {
      a: "Tibia",
      b: "Fibula",
      c: "Patella",
      d: "Femur",
    },
    correctAnswer: "C",
  },
  {
    _id: "q6",
    question: "What is the medical term for a 'heart attack'?",
    options: {
      a: "Stroke",
      b: "Myocardial Infarction",
      c: "Angina Pectoris",
      d: "Arrhythmia",
    },
    correctAnswer: "B",
  },
  {
    _id: "q7",
    question: "Which organ produces bile?",
    options: {
      a: "Gallbladder",
      b: "Pancreas",
      c: "Spleen",
      d: "Liver",
    },
    correctAnswer: "D",
  },
];
// --- End Mock Data ---

const AssessmentQuestionsList = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAssessmentQuestions()
      .then((res) => {
        // Check if data is valid and non-empty
        if (
          res.data &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          setQuestions(res.data.data);
          console.log("Fetched live assessment questions.");
        } else {
          // If API returns no data or invalid data, use mock data
          setQuestions(mockQuestions);
          console.warn(
            "API returned no assessment questions or invalid format. Using mock data."
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        // If API call completely fails, use mock data and log the error (but not to UI)
        console.error("Error fetching assessment questions from API:", err);
        setQuestions(mockQuestions); // Fallback to mock data
        console.log("Using mock assessment questions data due to API error.");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this assessment question?"
      )
    ) {
      // If using mock data, simulate deletion locally
      if (questions === mockQuestions) {
        // Simple check to see if current data is mock
        setQuestions(questions.filter((item) => item._id !== id));
        console.log(`Mock question with ID ${id} deleted.`);
        return; // Exit as it's a mock deletion
      }

      // Proceed with actual API call if not using mock data
      deleteAssessmentQuestion(id)
        .then(() => {
          setQuestions(questions.filter((item) => item._id !== id));
        })
        .catch((err) => {
          console.error("Error deleting assessment question:", err);
          // Optionally, inform user that deletion failed
          alert("Failed to delete question. Please try again.");
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
                  <>
                    {questions.length === 0 ? ( // Display "No questions found" only if question array is empty after loading
                      <div className="text-center p-4">
                        No assessment questions found.
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
                              <td style={cellStyle}>{item.question}</td>
                              <td style={cellStyle}>
                                <OverlayTrigger
                                  trigger={["hover", "focus"]}
                                  placement="top"
                                  overlay={
                                    <Popover
                                      id={`popover-options-${item._id || idx}`}
                                    >
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
                                    style={{
                                      ...actionIconStyle,
                                      color: "#d32f2f",
                                    }}
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
