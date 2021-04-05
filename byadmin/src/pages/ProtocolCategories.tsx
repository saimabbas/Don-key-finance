import { Button } from "@material-ui/core";
import { DashboardLayout } from "components/DashboardLayout";
import { DialogComp } from "components/DialogComp";
import { TableEditDeleteCell } from "components/TableEditDeleteCell";
import { api } from "helpers/api";
import { useGet } from "hooks/useGet";
import { useToastContext } from "hooks/useToastContext";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Table } from "rsuite";
const { Column, Cell, HeaderCell } = Table;

export type ICategory = { name: string; id: string };

const CategoryTable = ({
    loading,
    categories,
    reload,
}: {
    loading: boolean;
    categories: ICategory[];
    reload: () => void;
}) => {
    const history = useHistory();

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { showSuccessToast, showErrorToast } = useToastContext();

    const handleDelete = async () => {
        try {
            await api.delete("/api/v1/categories/" + selectedId);
            setSelectedId(null);
            reload();
            showSuccessToast("Protocol Deleted");
        } catch (e) {
            showErrorToast("An Error Occurred");
        }
    };

    return (
        <>
            <Table virtualized loading={loading} height={400} data={categories}>
                <Column width={50} align="center" fixed>
                    <HeaderCell>ID</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column flexGrow={1}>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column width={100} fixed="right">
                    <HeaderCell></HeaderCell>
                    <Cell>
                        {(rowData: any) => {
                            return (
                                <TableEditDeleteCell
                                    onEdit={() => {
                                        history.push(
                                            "/categories/edit/" + rowData.id
                                        );
                                    }}
                                    onDelete={() => {
                                        setSelectedId(rowData.id);
                                    }}
                                />
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
            <DialogComp
                title="Are you sure ?"
                description="Deleting Protocol"
                onClose={() => setSelectedId(null)}
                open={selectedId !== null}
                onSuccess={handleDelete}
            />
        </>
    );
};

export const ProtocolCategories = () => {
    const history = useHistory();

    const {
        data: { data },
        loading,
        refetchData,
    } = useGet<{data: ICategory[]}>("/api/v1/categories", { data: [] });

    return (
        <DashboardLayout
            title="Categories"
            button={
                <Button
                    onClick={() => history.push("/categories/edit")}
                    variant="outlined"
                >
                    Add New Category
                </Button>
            }
        >
            <div className="p-3">
                <CategoryTable
                    reload={refetchData}
                    loading={loading}
                    categories={data}
                />
            </div>
        </DashboardLayout>
    );
};
