import { ActionType } from "typesafe-actions";

export * from "./userActions";

export type IUserActions = ActionType<typeof import("./userActions")>