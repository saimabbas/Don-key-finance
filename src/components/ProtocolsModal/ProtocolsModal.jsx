import React from "react";
import { Button, Modal } from "react-bootstrap";
import ButtonComponent from "../Button/Button";

export default function ProtocolsModalPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="p-0">
        {/* <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="p-0">
        <p>{props.children}</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
