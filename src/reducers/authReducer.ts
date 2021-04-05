import { AuthActions, USER_LOGIN, USER_LOGOUT } from "actions/authActions";
import { IUserActions } from "actions/userActions";
import produce from "immer";
import { IStoreState } from "interfaces";
import { Reducer } from "redux";

const INITIAL_STATE = {
    isLoggedIn: false,
    user: null,
};

export const authReducer: Reducer<
    IStoreState["auth"],
    AuthActions | IUserActions
> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const { user } = action.payload;
            return {
                ...state,
                isLoggedIn: true,
                user,
            };
        }
        case "UPDATE_USER_SETTINGS": {
            const oldSettings = state.user?.settings || {};
            const settings = action.payload;

            const newSettings =
                typeof settings === "function"
                    ? settings(oldSettings)
                    : { ...oldSettings, ...settings };
            return produce(state, (draft) => {
                if (draft.user) {
                    draft.user.settings = newSettings;
                    
                }
            });
        }
        case USER_LOGOUT: {
            return INITIAL_STATE;
        }

        default: {
            return state;
        }
    }
};
