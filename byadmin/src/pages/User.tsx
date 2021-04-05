import { Button } from "@material-ui/core";
import { DashboardLayout } from "components/DashboardLayout";
import { TableEditDeleteCell } from "components/TableEditDeleteCell";
import { api } from "helpers/api";
import { useGet } from "hooks/useGet";
import { IUserFromApi } from "interfaces";
import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

const UsersTable = ({
    users,
    loading,
}: {
    users: IUserFromApi[];
    loading: boolean;
}) => {
    const history = useHistory();

    const handleDelete = async (id: string) => {
        await api.delete("/api/v2/users/" + id);
    };

    return (
        <Table virtualized loading={loading} height={500} data={users}>
            <Column width={50}>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="id" />
            </Column>
            <Column width={100}>
                <HeaderCell>GUID</HeaderCell>
                <Cell dataKey="GUID" />
            </Column>
            <Column width={150}>
                <HeaderCell>User name</HeaderCell>
                <Cell dataKey="username" />
            </Column>
            <Column width={150}>
                <HeaderCell>Avatar</HeaderCell>
                <Cell dataKey="avatarURL" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>Wallet Address</HeaderCell>
                <Cell dataKey="walletAddress" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>Description</HeaderCell>
                <Cell dataKey="description" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>Buru Tokens Minted</HeaderCell>
                <Cell dataKey="buru_token_minted" />
            </Column>
            <Column flexGrow={1}>
                <HeaderCell>updatedAt</HeaderCell>
                <Cell dataKey="updatedAt" />
            </Column>
            <Column width={100} fixed="right">
                <HeaderCell></HeaderCell>
                <Cell>
                    {(rowData: any) => {
                        return (
                            <TableEditDeleteCell
                                onEdit={() => {
                                    history.push("/users/edit/" + rowData.id);
                                }}
                                onDelete={() => {
                                    handleDelete(rowData.id);
                                }}
                            />
                        );
                    }}
                </Cell>
            </Column>
        </Table>
    );
};

export const User = () => {
    const {
        data: { data },
        loading,
    } = useGet<{ data: IUserFromApi[] }>("/api/v1/users", { data: [] });

    const history = useHistory();

    const goToAdd = () => {
        history.push("/users/edit");
    };

    return (
        <DashboardLayout
            title="Users"
            button={
                <Button onClick={goToAdd} variant="outlined">
                    Add New User
                </Button>
            }
        >
            <div className="p-3">
                <UsersTable loading={loading} users={data} />
            </div>
        </DashboardLayout>
    );
};
