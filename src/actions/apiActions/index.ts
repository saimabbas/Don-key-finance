import { ActionType } from "typesafe-actions";
import * as apiActions from "./request";

export * from "./request";
export type ApiActions = ActionType<typeof apiActions>;