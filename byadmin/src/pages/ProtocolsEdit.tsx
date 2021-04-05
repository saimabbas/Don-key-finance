import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { AddActionModal } from "components/AddActionModal";
import { DashboardLayout } from "components/DashboardLayout";
import { ProtocolActionsTable } from "components/ProtocolActionsTable/ProtocolActionsTable";
import { api } from "helpers/api";
import { useGet } from "hooks/useGet";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Loader } from "rsuite";
import { useInputState } from "../hooks/useInputState";
import { useToastContext } from "../hooks/useToastContext";
import Select from "react-select";
import { ICategory } from "./ProtocolCategories";
export const ProtocolsEdit = () => {
    const { id } = useParams<{ id: string }>();

    const [name, setName] = useInputState("");
    const [description, setdescription] = useInputState("");
    const [toolbarImage, setToolbarImage] = useInputState("");
    const [website, setWebsiteUrl] = useInputState("");
    const [vertex, setVertexImage] = useInputState("");
    const [edgeColor, setEdgeColor] = useInputState("");
    const [showonToolbar, setshowontoolbar] = useState(false);

    const { showErrorToast, showSuccessToast } = useToastContext();

    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [isReady, setIsReady] = useState(false);
    const [actions, setActions] = useState([]);
    const [isAddActionOpen, setIsAddActionOpen] = useState(false);
    const { data: result, refetchData } = useGet<any>(
        "/api/v1/protocols/" + id,
        null,
        [id]
    );

    const {
        data: { data: cats },
    } = useGet<{ data: ICategory[] }>("/api/v1/categories", { data: [] });

    const [selectedCategories, setSelectedCat] = useState<ICategory[]>([]);

    useEffect(() => {
        if (result) {
            const data = result.data;
            setName(data.name);
            setWebsiteUrl(data.website);
            setToolbarImage(data.toolbarImageURL);
            setshowontoolbar(data.showOnToolbar === "1");
            setEdgeColor(data.edgeColor);
            setdescription(data.description);
            setVertexImage(data.vertexImageURL);
            setIsReady(true);
            setActions(data.actions);
            const relation = data.protocol_category_relation;
            if (relation) {
                setSelectedCat(
                    relation.map((item: any) => item.protocol_categories)
                );
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    const handleAddition = async () => {
        setLoading(true);
        try {
            await api.post("/api/v1/protocols", {
                name: name,
                website: website,
                toolbarImageURL: toolbarImage,
                showOnToolbar: showonToolbar ? "1" : "0",
                edgeColor: edgeColor,
                description: description,
                vertexImageURL: vertex,
            });
            showSuccessToast("Added New Protocol");
            history.push("/protocols");
        } catch (e) {
            showErrorToast("An Error Occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            await api.put("/api/v1/protocols/" + id, {
                name: name,
                website: website,
                toolbarImageURL: toolbarImage,
                showOnToolbar: showonToolbar ? "1" : "0",
                edgeColor: edgeColor,
                description: description,
                vertexImageURL: vertex,
            });
            showSuccessToast("Updated Protocol");
            history.push("/protocols");
        } catch (e) {
            showErrorToast("An Error Occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryUpdate = async (categories: ICategory[]) => {
        const catIds = categories.map((item) => item.id);
        try {
            await api.put(`/api/v1/protocols/${id}/categories`, {
                categories: catIds,
            });
            showSuccessToast("Categories Updated");
        } catch (e) {
            showErrorToast("An Error Occurred");
        }
    };

    const spinner = (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: 100 }}
        >
            <Loader />
        </div>
    );
    return (
        <DashboardLayout title="Protocols">
            <div className="p-3 mt-3">
                <div className="row">
                    <div className="col-sm-8  py-4">
                        <div
                            className="p-3"
                            style={{
                                border: "1px solid #d9d9d9",
                                background: "#fff",
                            }}
                        >
                            {!isReady && id ? (
                                spinner
                            ) : (
                                <>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                                label="ID"
                                                value={id}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <TextField
                                                variant="outlined"
                                                value={name}
                                                onChange={setName}
                                                fullWidth
                                                disabled={loading}
                                                label="Name"
                                            />
                                        </div>
                                        <div className="col-6 ">
                                            <TextField
                                                variant="outlined"
                                                className=" mb-3"
                                                fullWidth
                                                value={website}
                                                disabled={loading}
                                                onChange={setWebsiteUrl}
                                                label="Website URL"
                                            />
                                            <TextField
                                                variant="outlined"
                                                className=" mb-3"
                                                fullWidth
                                                value={toolbarImage}
                                                disabled={loading}
                                                onChange={setToolbarImage}
                                                label="Toolbar Image URL"
                                            />
                                            <TextField
                                                variant="outlined"
                                                className=" mb-3"
                                                fullWidth
                                                value={vertex}
                                                disabled={loading}
                                                onChange={setVertexImage}
                                                label="Vertex Image URL"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <TextField
                                                variant="outlined"
                                                multiline
                                                rows={6}
                                                className="mb-3"
                                                fullWidth
                                                value={description}
                                                disabled={loading}
                                                onChange={setdescription}
                                                label="Description"
                                            />
                                            <TextField
                                                variant="outlined"
                                                className="mb-3"
                                                fullWidth
                                                value={edgeColor}
                                                disabled={loading}
                                                onChange={setEdgeColor}
                                                label="Edge Color"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={showonToolbar}
                                                        onChange={() =>
                                                            setshowontoolbar(
                                                                (val) => !val
                                                            )
                                                        }
                                                        name="checkbox"
                                                        color="primary"
                                                    />
                                                }
                                                label="Show on Toolbar"
                                                labelPlacement="start"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-end">
                                            {id ? (
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    disabled={loading}
                                                    onClick={handleSave}
                                                >
                                                    Save
                                                </Button>
                                            ) : (
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    disabled={loading}
                                                    onClick={handleAddition}
                                                >
                                                    Add
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="col-sm-4 p-3 py-4">
                        <div
                            className="p-3"
                            style={{
                                border: "1px solid #d9d9d9",
                                background: "#fff",
                            }}
                        >
                            {!isReady && id ? (
                                spinner
                            ) : (
                                <>
                                    Add Categories
                                    <Select
                                        options={cats}
                                        isMulti
                                        getOptionLabel={(val) => val.name}
                                        getOptionValue={(val) => val.id}
                                        value={selectedCategories}
                                        onChange={(val) => {
                                            handleCategoryUpdate(val as any[]);
                                            setSelectedCat(val as any[]);
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <AddActionModal
                    protocolid={id}
                    onClose={() => setIsAddActionOpen(false)}
                    onDone={refetchData}
                    open={isAddActionOpen}
                />
                <div className="col-sm-8 p-3 py-4">
                    <Button
                        variant="outlined"
                        onClick={() => setIsAddActionOpen(true)}
                    >
                        Add Action
                    </Button>
                    <ProtocolActionsTable
                        refetchData={refetchData}
                        actions={actions}
                        loading={!isReady}
                        protocolid={id}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};
