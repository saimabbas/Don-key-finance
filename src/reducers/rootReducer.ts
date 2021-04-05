import { IStoreState } from "interfaces";
import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers<IStoreState>({
  auth: authReducer,
  api: apiReducer,
});
