import { AxiosResponse } from "axios";
import { action } from "typesafe-actions";
import { BuruRequest } from "interfaces";

export const apiRequest = (
  args: {
    onDone?: (res: AxiosResponse) => void;
    onFail?: (res: AxiosResponse) => void;
  } & BuruRequest
) => {
  return action("API_REQUEST", args);
};

export const onApiSuccess = <T extends any>(args: {
  data: T;
  statusCode: number;
} & BuruRequest) => {
  return action("API_REQUEST_SUCCESS", args);
};

export const onApiError = (args: {err: any} & BuruRequest) => {
  return action("API_REQUEST_ERROR", args);
};
