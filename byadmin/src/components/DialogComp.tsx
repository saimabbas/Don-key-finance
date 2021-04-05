import { Modal } from "rsuite";
import React from "react";
import { Button } from "@material-ui/core";

export const DialogComp = ({
    open,
    onClose,
    title,
    description,
    onSuccess,
    cancelText = "Cancel",
    saveText = "Ok",
  }: {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    onSuccess: () => void;
    cancelText?: string;
    saveText?: string;
  }) => {
    return (
      <Modal show={open} onHide={onClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={onSuccess} color="primary">
            {saveText}
          </Button>
          <Button onClick={onClose} color="primary" variant="outlined">
            {cancelText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };