import { RequestHandler } from "express";
import { sendResponse } from "../helpers/sendResponse";
import { verifyToken } from "../helpers";
import { API_SECRET } from "../env";

export const checkAuth = (): RequestHandler => (req, res, next) => {
  // return next();
  const authHeader = req.header("Authorization");
  const apiSecret = req.header("X-Api-Secret");
  if (apiSecret === API_SECRET) {
    return next();
  }
  if (!authHeader) {
    return sendResponse(res, { error: { msg: "Acccess Denied" }, code: 401 });
  }
  if (!authHeader.includes("Bearer ")) {
    return sendResponse(res, {
      error: { msg: "Invalid Auth Header" },
      code: 400,
    });
  }

  const token = authHeader.split("Bearer ")[1];

  if (!token) {
    return sendResponse(res, {
      error: { msg: "Invalid Auth Header" },
      code: 400,
    });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (e) {
    console.log(e);
    return sendResponse(res, { error: { msg: "Acccess Denied" }, code: 401 });
  }
};
