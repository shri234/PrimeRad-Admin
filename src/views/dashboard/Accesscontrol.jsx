import React, { Fragment, useState } from "react";

//react bootstrap
import { Container, Row, Button, Table } from "react-bootstrap";

//component
import Card from "../../components/bootstrap/card";

import Collapse from "react-bootstrap/Collapse";

const Accesscontrol = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [openMore1, setOpenMore1] = useState(true);
  const [openMore2, setOpenMore2] = useState(true);

  const Manager = [
    { name: "Rating" },
    { name: "Comments" },
    { name: "Users" },
    { name: "Movie List" },
    { name: "Shows" },
    { name: "Seasons" },
    { name: "Episodes" },
    { name: "Setting", button: "true" },
  ];

  const Manager2 = [
    { name: "Sidebar" },
    { name: "header" },
    { name: "Live Customizer" },
  ];

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Card>
            <div
              className="permission-collapse border rounded p-3 mb-3 mt-3"
              id="permission_2"
            >
              <div className="d-flex align-items-center justify-content-between">
                <h6>Manager</h6>
                <div className="toggle-btn-groups">
                  <Button
                    className="btn btn-primary btn-xs collapsed"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Permission
                  </Button>
                </div>
              </div>

              <Collapse in={open}>
                <div>
                  <table className="table table-condensed table-striped mb-0 fixed-width-table">
                    <thead className="sticky-top">
                      <tr>
                        <th>Modules</th>
                        <th>View</th>
                        <th>Add</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th className="text-end">
                          <input
                            className="btn btn-md btn-secondary"
                            type="submit"
                            value="Save"
                          />
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Manager.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-view_branch"
                                name="permission[view_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-add_branch"
                                name="permission[add_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-edit_branch"
                                name="permission[edit_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-delete_branch"
                                name="permission[delete_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td className="text-end">
                              {item.button === "true" && (
                                <Button
                                  className="btn btn-primary btn-xs collapsed"
                                  onClick={() => setOpenMore1(!openMore1)}
                                  aria-controls="example-collapse-text"
                                  aria-expanded={openMore1}
                                >
                                  <i class="fa-solid fa-chevron-down me-2"> </i>
                                  More
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      {Manager2.map((item, index) => {
                        return (
                          <tr>
                            <td colSpan="12" className="hiddenRow">
                              <Collapse in={openMore1}>
                                <div className="accordian-body">
                                  <Table className="mb-0">
                                    <tbody>
                                      <tr key={index}>
                                        <td className="text-center">
                                          {item.name}
                                          <span className="ms-5">
                                            <input
                                              type="checkbox"
                                              id="sidebar"
                                              name="sidebar"
                                              value="manager"
                                              className="form-check-input"
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Collapse>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Collapse>
            </div>
          </Card>
        </Row>

        <Row>
          <Card>
            <div
              className="permission-collapse border rounded p-3 mb-3 mt-3"
              id="permission_2"
            >
              <div className="d-flex align-items-center justify-content-between">
                <h6>User</h6>
                <div className="toggle-btn-groups">
                  <Button
                    className="btn btn-primary btn-xs collapsed"
                    onClick={() => setOpen1(!open1)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                  >
                    Permission
                  </Button>
                </div>
              </div>

              <Collapse in={open1}>
                <div className="table-responsive">
                  <table className="table table-condensed table-striped mb-0">
                    <thead className="sticky-top">
                      <tr>
                        <th>Modules</th>
                        <th>View</th>
                        <th>Add</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th className="text-end">
                          <input
                            className="btn btn-md btn-secondary"
                            type="submit"
                            value="Save"
                          />
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Manager.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-view_branch"
                                name="permission[view_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-add_branch"
                                name="permission[add_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-edit_branch"
                                name="permission[edit_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="role-manager-permission-delete_branch"
                                name="permission[delete_branch][]"
                                value="manager"
                                className="form-check-input"
                              />
                            </td>
                            <td className="text-end">
                              {item.button === "true" && (
                                <Button
                                  className="btn btn-primary btn-xs collapsed"
                                  onClick={() => setOpenMore2(!openMore2)}
                                  aria-controls="example-collapse-text"
                                  aria-expanded={openMore2}
                                >
                                  <i class="fa-solid fa-chevron-down me-2"> </i>
                                  More
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      {Manager2.map((item, index) => {
                        return (
                          <tr>
                            <td colSpan="12" className="hiddenRow">
                              <Collapse in={openMore2}>
                                <div className="accordian-body">
                                  <Table className="mb-0">
                                    <tbody>
                                      <tr key={index}>
                                        <td className="text-center">
                                          {item.name}
                                          <span className="ms-5">
                                            <input
                                              type="checkbox"
                                              id="sidebar"
                                              name="sidebar"
                                              value="manager"
                                              className="form-check-input"
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Collapse>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Collapse>
            </div>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Accesscontrol;
