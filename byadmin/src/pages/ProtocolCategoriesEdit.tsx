import { Button, TextField } from "@material-ui/core";
import { DashboardLayout } from "components/DashboardLayout";
import { api } from "helpers/api";
import { useGet } from "hooks/useGet";
import { useInputState } from "hooks/useInputState";
import { useToastContext } from "hooks/useToastContext";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Loader } from "rsuite";
import { ICategory } from "./ProtocolCategories";


export const ProtocolCategoriesEdit = () => {

    const { id } = useParams<{ id: string }>();
    const [name, setName] = useInputState("");
    const [isReady, setIsReady] = useState(false);
    const {data} = useGet<{data: ICategory | null}>(`/api/v1/categories/${id}`, {data: null}, [id]);

    useEffect(() => {
      
            if(data.data){
                setName(data.data.name as any);
                setIsReady(true)
            }
        
    }, [data])
    const { showErrorToast, showSuccessToast } = useToastContext();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        try {
            await api.put("/api/v1/categories/" + id, {
                name: name,
            });
            showSuccessToast("Updated Category");
            history.push("/categories");
        } catch (e) {
            showErrorToast("An Error Occurred");
        } finally {
            setLoading(false);
        }
    }
    const handleAddition = async () => {
        setLoading(true);
        try {
            await api.post("/api/v1/categories", {
                name: name,
            });
            showSuccessToast("Added New Category");
            history.push("/categories");
        } catch (e) {
            showErrorToast("An Error Occurred");
        } finally {
            setLoading(false);
        }
    }


    return  <DashboardLayout title="Protocol Categories">
    <div className="p-3 mt-3">
        <div
            style={{ border: "1px solid #d9d9d9", background: "#fff" }}
            className="col-sm-8 p-3 py-4"
        >
            {!isReady && id ? (
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: 100 }}
                >
                    <Loader />
                </div>
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
</DashboardLayout>

}