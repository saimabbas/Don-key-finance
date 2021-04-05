import { ApiActions } from "actions/apiActions";
import { Reducer } from "redux";
import produce from "immer";
import { API_STATE } from "interfaces";


export const apiReducer: Reducer<API_STATE, ApiActions> = (
  state = { requests: {} },
  action
) => {
  switch (action.type) {
    case "API_REQUEST": {
      const req = action.payload;
      return produce(state, (draft) => {
        draft.requests[req.method + req.endpoint] = {
          endpoint: req.endpoint,
          method: req.method,
          status: "PENDING",
        };
      });
    }
    case "API_REQUEST_SUCCESS": {
      const res = action.payload;
      return produce(state, (draft) => {
        draft.requests[res.method + res.endpoint] = {
          endpoint: res.endpoint,
          method: res.method,
          status: "SUCCESS",
          response: res.data,
        };
      });
    }
    case "API_REQUEST_ERROR": {
      const res = action.payload;
      return produce(state, (draft) => {
        draft.requests[res.method + res.endpoint] = {
          endpoint: res.endpoint,
          method: res.method,
          status: "ERROR",
          error: res.err,
        };
      });
    }
  }
  return state;
};
