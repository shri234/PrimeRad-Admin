import React, { useState } from "react";

// react-bootstrap
import { Form, Button, Modal, Row, Col } from "react-bootstrap";

// components
import InputField from "./inputfield";

const SubtitleModalEdit = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button onClick={handleShow}>
    <i className="fa-solid fa-square-plus me-2"></i>Add Subtitle
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Add Subtitle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                  <Row >
                    <Col sm="12">
                    <div className="form-group px-3 d-flex flex-column">
                    <label className="form-label flex-grow-1" htmlFor="occupation"><strong>Occupation:</strong></label>
                            <select defaultValue="1" id="occupation" type="select" className="form-control select2-basic-multiple"
                                placeholder="Select Occupation">
                                <option value="1">Cast</option>
                                <option value="2">Crew</option>
                                <option value="3">Production</option>
                                <option value="4">Director</option>
                                <option value="5">Actor</option>
                            </select>
                    </div>
                    </Col>
                    <Col sm="12">
                    <InputField
                        isLabel={true}
                        isRequired={true}
                        label="Video"
                        type="file"
                      />
                    </Col>
                  </Row>
                </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}

export default SubtitleModalEdit