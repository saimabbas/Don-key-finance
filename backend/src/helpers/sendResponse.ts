import { Response } from "express";

export const sendResponse = (
  res: Response,
  {
    code = 200,
    error = null,
    user = null,
    data = null,
  }: {
    code?: number;
    error?: { [msg: string]: string } | null;
    user?: any;
    data?: any;
  }
) => {
  res.status(code).send({
    error,
    user,
    data,
  });
};
