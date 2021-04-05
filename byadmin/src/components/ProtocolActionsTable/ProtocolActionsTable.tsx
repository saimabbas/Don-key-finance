import { DialogComp } from "components/DialogComp";
import { TableEditDeleteCell } from "components/TableEditDeleteCell";
import { api } from "helpers/api";
import React from "react";
import { useState } from "react";
import { Table } from "rsuite";
import { AddActionModal } from "../AddActionModal";
const { Column, Cell, HeaderCell } = Table;

export type IAction = {
    id?: number;
    icon: string;
    name: string;
    description: string;
};

const EditDeleteCell = ({
    rowData,
    refetchData,
    protocolid
}: {
    rowData: IAction;
    refetchData?: () => void;
    protocolid: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDelete = async () => {
        await api.delete(`/api/v1/protocols/${protocolid}/actions/${rowData.id}`);
        refetchData && refetchData()
        setIsDeleteOpen(false)
    };

    return (
        <>
            <TableEditDeleteCell
                onEdit={() => setIsOpen(true)}
                onDelete={() => setIsDeleteOpen(true)}
            />
            <AddActionModal
                action={rowData}
                open={isOpen}
                protocolid={protocolid}
                onDone={refetchData}
                onClose={() => setIsOpen(false)}
            />

            <DialogComp
                title="Are you sure ?"
                description="Deleting Action"
                onClose={() => setIsDeleteOpen(false)}
                open={isDeleteOpen}
                onSuccess={handleDelete}
            />
        </>
    );
};

export const ProtocolActionsTable = ({
    loading,
    actions,
    refetchData,
    protocolid
}: {
    loading: boolean;
    actions: IAction[];
    protocolid: string;
    refetchData?: () => void;
}) => {
    return (
        <Table virtualized loading={loading} height={400} data={actions}>
            <Column width={50} align="center" fixed>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column flexGrow={1}>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>Icon</HeaderCell>
                <Cell dataKey="icon" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>Description</HeaderCell>
                <Cell dataKey="description" />
            </Column>
            <Column width={100} fixed="right">
                <HeaderCell></HeaderCell>
                <Cell>
                    {(rowData: any) => {
                        return (
                            <EditDeleteCell
                                refetchData={refetchData}
                                key={rowData.id}
                                protocolid={protocolid}
                                rowData={rowData}
                            />
                        );
                    }}
                </Cell>
            </Column>
        </Table>
    );
};
