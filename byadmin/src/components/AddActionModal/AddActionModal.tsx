import { Button } from "@material-ui/core";
import { usePost } from "hooks/usePost";
import { usePut } from "hooks/usePut";
import { useToastContext } from "hooks/useToastContext";
import React from "react";
import { useState } from "react";
import { Input, Modal } from "rsuite";
import { IAction } from "../ProtocolActionsTable/ProtocolActionsTable";

export const AddActionModal = ({
    open,
    onClose,
    action,
    protocolid,
    onDone,
}: {
    open?: boolean;
    action?: IAction;
    onDone?: () => void;
    protocolid: string;
    onClose: () => void;
}) => {
    const [name, setName] = useState(action?.name);
    const [description, setDescription] = useState(action?.description);
    const [icon, setIcon] = useState(action?.icon);

    const { sending, put } = usePut<IAction>(
        `/api/v1/protocols/${protocolid}/actions/${action?.id}`
    );
    const { sending: isAdding, post } = usePost<IAction>(
        `/api/v1/protocols/${protocolid}/actions`
    );

    const { showSuccessToast } = useToastContext();

    const handleEdit = async () => {
        if (name && description && icon) {
            await put({ description, name, icon });
            onDone && onDone();
            showSuccessToast("Action Updated");
            onClose();
        }
    };

    const handleAdd = async () => {
        if (name && description && icon) {
            await post({ description, name, icon });
            onDone && onDone();
            showSuccessToast("Action Created");
            onClose();
        }
    };

    const saving = sending || isAdding;

    return (
        <Modal show={open} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>
                    {action ? "Edit Action" : "Add New Action"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input
                    disabled={saving}
                    onChange={setName}
                    value={name}
                    placeholder="Name" />
                <Input
                    disabled={saving}
                    onChange={setDescription}
                    value={description}
                    className="mt-2"
                    placeholder="description" />
                <Input
                    disabled={saving}
                    onChange={setIcon}
                    value={icon}
                    className="mt-2"
                    placeholder="icon" />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    disabled={saving}
                    className="mr-2"
                    onClick={action ? handleEdit : handleAdd}
                    color="primary"
                >
                    {action ? "Update" : "Add"}
                </Button>
                <Button
                    disabled={saving}
                    onClick={onClose}
                    color="primary"
                    variant="outlined"
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
