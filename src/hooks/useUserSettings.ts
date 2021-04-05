import { updateUserSettings } from "actions/userActions";
import { CallBackorVal, IStoreState, IUser } from "interfaces";
import { useDispatch, useSelector } from "react-redux";

export const useUserSettings = <
    T extends Required<IUser>["settings"][k],
    k extends keyof Required<IUser>["settings"]
>(
    key: k,
) => {
    const settings =
        useSelector((state: IStoreState) => state.auth.user?.settings) || {};
    const dispatch = useDispatch();
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement> | CallBackorVal<T>
    ) => {
        if (typeof e === "string" || typeof e === "boolean" || !e) {
            return dispatch(updateUserSettings({ [key]: e }));
        }
        if (typeof e === "function") {
            return dispatch(
                updateUserSettings((old) => {
                    if (!old) {
                        return { [key]: e("" as T) };
                    }
                    const prev = old[key];
                    return { ...old, [key]: e((prev || "") as T) };
                })
            );
        }
        dispatch(updateUserSettings({ [key]: e.target.value }));
    };
    const res = (settings[key] || "") as Exclude<Exclude<T,undefined>, null>;
    return [res, onChange] as const;
};
