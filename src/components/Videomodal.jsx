import React, { useState } from "react";

// react-bootstrap
import { Button, Modal, Row, Col } from "react-bootstrap";

// components
import InputField from "./inputfield";

const VideoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Button onClick={handleShow}>
     <i className="fa-solid fa-square-plus me-2"></i>Add Video
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                  <Row className="row">
                    <Col sm="12">
                    <div className="form-group px-3 d-flex flex-column">
                      <label className="form-label flex-grow-1"
                          htmlFor="quality"><strong>Quality:</strong></label>
                      <select defaultValue="1" id="quality" type="select" className="form-control select2-basic-multiple"
                          placeholder="Select Quality">
                          <option value="1">480p</option>
                          <option value="2">720p</option>
                          <option value="3">1080p</option>
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
                    <Col sm="12">
                    <InputField
                        label="Status"
                        type="toggle"
                        placeholder=""
                        className="d-flex align-self-start justify-content-between"
                        name="status"
                      />
                    </Col>
                  </Row>
                </form>
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
  );
};

export default VideoModal;
