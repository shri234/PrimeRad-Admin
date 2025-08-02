import React, { Fragment } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const coupons = [
  {
    code: "WELCOME10",
    discount: "10%",
    status: "Active",
    created: "01-08-2024 09:00 AM",
  },
  {
    code: "SUMMER20",
    discount: "20%",
    status: "Active",
    created: "05-08-2024 10:30 AM",
  },
  {
    code: "FALL30",
    discount: "30%",
    status: "Inactive",
    created: "10-08-2024 11:45 AM",
  },
];

const headerStyle = {
  background: "#e3f0fa",
  color: "#1a237e",
  fontWeight: 600,
  fontSize: "1rem",
  borderBottom: "2px solid #90caf9",
};

const actionIconStyle = {
  color: "#1976d2",
  fontSize: "1.1rem",
  transition: "color 0.2s",
};

const cellStyle = {
  color: "#222b45",
  background: "transparent",
};

const rowHoverStyle = {
  background: "#f5f7fa",
  color: "#222b45",
};

const CouponsList = () => (
  <Fragment>
    <Row>
      <Col sm="12">
        <Card>
          <Card.Header className="bg-light">
            <h4 className="mb-0">Coupons List</h4>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Link
                to="#"
                className="me-3"
                style={{ color: "#1976d2", fontWeight: 500 }}
              >
                Create Coupon
              </Link>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <select className="form-select w-auto me-2" defaultValue="10">
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
              <Table
                bordered
                hover
                className="mb-0"
                style={{ borderColor: "#90caf9" }}
              >
                <thead>
                  <tr>
                    <th style={headerStyle}>S.No.</th>
                    <th style={headerStyle}>Coupon Code</th>
                    <th style={headerStyle}>Discount</th>
                    <th style={headerStyle}>Status</th>
                    <th style={headerStyle}>Created Date</th>
                    <th style={headerStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((item, idx) => (
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
                      <td style={cellStyle}>{item.code}</td>
                      <td style={cellStyle}>{item.discount}</td>
                      <td style={cellStyle}>{item.status}</td>
                      <td style={cellStyle}>{item.created}</td>
                      <td style={cellStyle}>
                        <Button
                          variant="link"
                          size="sm"
                          style={{ padding: 0 }}
                          onMouseOver={(e) =>
                            (e.currentTarget.firstChild.style.color = "#0d47a1")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.firstChild.style.color = "#1976d2")
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
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>
                Showing 1 to {coupons.length} of {coupons.length} entries
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

export default CouponsList;
