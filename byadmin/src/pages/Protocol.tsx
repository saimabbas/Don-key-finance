import { Button } from "@material-ui/core";
import { DashboardLayout } from "components/DashboardLayout";
import { DialogComp } from "components/DialogComp";
import { TableEditDeleteCell } from "components/TableEditDeleteCell";
import { api } from "helpers/api";
import { useGet } from "hooks/useGet";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {  Table } from "rsuite";
import { useToastContext } from "../hooks/useToastContext";

const { Column, Cell, HeaderCell } = Table;






const ProtocolActions = ({ rowData, reload }: any) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { showSuccessToast, showErrorToast } = useToastContext();

  const handleDelete = async () => {
    try {
      await api.delete(`/api/v1/protocols/${rowData.id}`);
      setOpen(false);
      reload();
      showSuccessToast("Protocol Deleted");
    } catch (e) {
      showErrorToast("An Error Occurred");
    }
  };
  return (
    
    < >
      <TableEditDeleteCell 
        onEdit={() => history.push(`/protocols/edit/${rowData.id}`)}
        onDelete={() => setOpen(true)}
      />
      
      <DialogComp
        title="Are you sure ?"
        description="Deleting Protocol"
        onClose={() => setOpen(false)}
        open={open}
        onSuccess={handleDelete}
      />

    </>
  );
};

const ProtocolTable = ({
  protocols = [],
  loading,
  reload,
}: {
  protocols: any;
  loading: boolean;
  reload: () => void;
}) => {
  return (
    <Table virtualized loading={loading} height={700} data={protocols}>
      <Column width={50} align="center" fixed>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={100} align="center" fixed>
        <HeaderCell>Toolbar Image</HeaderCell>
        <Cell>
          {(rowData: any) => {
            return (
              <div className="d-flex justify-content-center">
                <img
                  alt="protocol img"
                  style={{ width: 30 }}
                  className="img-fluid"
                  src={rowData.toolbarImageURL}
                />
              </div>
            );
          }}
        </Cell>
      </Column>
      <Column flexGrow={1}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column align="center" flexGrow={1}>
        <HeaderCell>Edge Color</HeaderCell>
        <Cell>
          {(row: any) => {
            return (
              <div className="d-flex justify-content-center">
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 3,
                    backgroundColor: row.edgeColor,
                  }}
                />
              </div>
            );
          }}
        </Cell>
      </Column>
      <Column align="center" flexGrow={1}>
        <HeaderCell>showOnToolbar</HeaderCell>
        <Cell>
          {(row: any) => {
            return row.showOnToolbar === "1" ? "Yes" : "No";
          }}
        </Cell>
      </Column>
      <Column flexGrow={3}>
        <HeaderCell>Website</HeaderCell>
        <Cell dataKey="website" />
      </Column>
      <Column flexGrow={3}>
        <HeaderCell>Description</HeaderCell>
        <Cell dataKey="description" />
      </Column>
      <Column width={100} fixed="right">
        <HeaderCell></HeaderCell>
        <Cell>
          {(rowData: any) => {
            return <ProtocolActions reload={reload} rowData={rowData} />;
          }}
        </Cell>
      </Column>
    </Table>
  );
};

export const Protocol = () => {
  const { data, loading, refetchData } = useGet<{data: any}>(
    "/api/v1/protocols",
    {data: []}
  );

  const history = useHistory();

  return (
    <DashboardLayout
      title="Protocols"
      button={
        <Button
          onClick={() => history.push("/protocols/edit")}
          variant="outlined"
        >
          Add New Protocol
        </Button>
      }
    >
      <div className="p-3">
        <ProtocolTable
          reload={refetchData}
          loading={loading}
          protocols={data.data}
        />
      </div>
    </DashboardLayout>
  );
};
