import { Button, TextField } from "@material-ui/core";
import { DashboardLayout } from "components/DashboardLayout";
import { useGet } from "hooks/useGet";
import { usePost } from "hooks/usePost";
import { usePut } from "hooks/usePut";
import { IUserFromApi } from "interfaces";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Loader } from "rsuite";

export const UserEdit = () => {
    const { id } = useParams<{ id: string }>();
    const { sending: isCreating, post } = usePost<Partial<IUserFromApi>>(
        `/api/v1/users`
    );
    const {
        loading: isFetching,
        data: { data },
    } = useGet<{ data: IUserFromApi | null }>(
        `/api/v1/users/${id}`,
        { data: null },
        [id]
    );
    const history = useHistory();
    const { sending: isUpdating, put } = usePut<Partial<IUserFromApi>>(
        `/api/v1/users/${id}`
    );

    const [
        {
            buru_token_minted,
            description,
            GUID,
            avatarURL,
            username,
            walletAddress,
        },
        setState,
    ] = useState<IUserFromApi>(
        data || {
            buru_token_minted: null,
            description: null,
            GUID: "",
            avatarURL: null,
            createdAt: null,
            updatedAt: null,
            username: null,
            walletAddress: "",
            id: 0,
        }
    );

    const handleSave = async () => {
        await put({
            buru_token_minted: buru_token_minted
                ? parseInt(buru_token_minted as any)
                : null,
            description,

            avatarURL,
            username,
            walletAddress,
        });
    };
    const handleAddition = async () => {
        const res = await post({
            buru_token_minted,
            description,
            avatarURL,
            username,
            walletAddress,
        });
        if (res?.data) {
            history.push(`/users/edit/` + res.data.id);
        }
    };

    const loading = isCreating || isUpdating;

    const onChange = (key: keyof IUserFromApi) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setState((old) => ({ ...old, [key]: e.target.value }));
    };

    return (
        <DashboardLayout title="Edit User">
            <div className="p-3 mt-3">
                <div
                    style={{ border: "1px solid #d9d9d9", background: "#fff" }}
                    className="col-sm-8 p-3 py-4"
                >
                    {isFetching && id ? (
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
                                        className=" mb-3"
                                    />
                                    <TextField
                                        variant="filled"
                                        fullWidth
                                        label="GUID"
                                        value={GUID}
                                        disabled
                                        className=" mb-3"
                                    />
                                    <TextField
                                        variant="outlined"
                                        value={username}
                                        className=" mb-3"
                                        onChange={onChange("username")}
                                        fullWidth
                                        disabled={loading}
                                        label="Username"
                                    />
                                    <TextField
                                        variant="outlined"
                                        className=" mb-3"
                                        fullWidth
                                        value={buru_token_minted}
                                        disabled={loading}
                                        onChange={onChange("buru_token_minted")}
                                        label="Buru Tokens Minted"
                                    />

                                    <TextField
                                        variant="outlined"
                                        className=" mb-3"
                                        fullWidth
                                        value={avatarURL}
                                        disabled={loading}
                                        onChange={onChange("avatarURL")}
                                        label="Avatar"
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <TextField
                                        variant="outlined"
                                        value={walletAddress}
                                        className=" mb-3"
                                        onChange={onChange("walletAddress")}
                                        fullWidth
                                        disabled={loading}
                                        label="Wallet Address"
                                    />
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        rows={6}
                                        className="mb-3"
                                        fullWidth
                                        value={description}
                                        disabled={loading}
                                        onChange={onChange("description")}
                                        label="Description"
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
    );
};
