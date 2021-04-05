import { apiRequest } from "actions/apiActions";
import { AppThunk, CallBackorVal, IUser } from "interfaces";
import { action } from "typesafe-actions";

export const updateUserSettings = (args: CallBackorVal<IUser["settings"]>) => {
    return action("UPDATE_USER_SETTINGS", args);
};

export const saveUserSettings = (): AppThunk => {
    return (dispatch, getState) => {
        const settings = getState().auth.user?.settings;
        if (settings) {
            dispatch(
                apiRequest({
                    method: "PUT",
                    data: settings,
                    endpoint: `/api/v1/users/settings`,
                })
            );
        }
    };
};

export const getUserSettings = (checkState?: boolean): AppThunk => {
    return (dispatch, getState) => {
        if(checkState){
            const settings = getState().auth?.user?.settings;
            if(settings){
                return;
            }
        }
        dispatch(
            apiRequest({
                method: "GET",
                endpoint: `/api/v1/users/settings`,
                onDone: (res) => {
                    dispatch(updateUserSettings(res.data.data));
                },
            })
        );
    };
};
