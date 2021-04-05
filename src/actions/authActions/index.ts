import { ActionType } from "typesafe-actions";
import * as authActions from "./authActions";

export * from "./authActions";
export * from "./authActionTypes";
export type AuthActions = ActionType<typeof authActions>;