import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../env";
export const verifyToken = (token: string) => {
  const { walletAddress, GUID, uid } = jwt.verify(token, JWT_SECRET, {
    algorithms: ["HS256"],
  }) as any;
  return { walletAddress, GUID, uid };
};
