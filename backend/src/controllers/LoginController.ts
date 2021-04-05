import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { recoverPersonalSignature } from "eth-sig-util";
import { bufferToHex } from "ethereumjs-util";
import { prisma } from "../database";
import { uuidv4 } from "../helpers";
import { JWT_SECRET } from "../env";
import { sendResponse } from "../helpers/sendResponse";

const Users = prisma.users;

export class LoginController {
    static getNonce: RequestHandler = async (req, res) => {
        try {
            const { walletAddress } = req.body;
            if (!walletAddress) {
                return sendResponse(res, {
                    code: 400,
                    error: { msg: "No walletAddress provided" },
                });
            }
            let [user] = await Users.findMany({ where: { walletAddress } });
            if (!user) {
                const date = new Date();
                user = await Users.create({
                    data: { walletAddress, GUID: uuidv4(), createdAt: date, updatedAt: date},
                });
            }
         

            return sendResponse(res, { data: { nonce: user.GUID } });
        } catch (e) {
            res.status(500).send({ data: null, user: null, error: e.message });
        }
    };



    static handleSignIn: RequestHandler = async (req, res) => {
        try {
            const { walletAddress, signature } = req.body;
            if (!signature || !walletAddress) {
                return sendResponse(res, {
                    code: 400,
                    error: { msg: "Request should have signature and publicAddress" },
                });
            }
            let [user] = await Users.findMany({ where: { walletAddress } });
            const msgBufferHex = bufferToHex(Buffer.from(user.GUID, "utf8"));
            const address = recoverPersonalSignature({
                data: msgBufferHex,
                sig: signature,
            });

            if (address.toLowerCase() === walletAddress.toLowerCase()) {
                const token = jwt.sign(
                    { walletAddress, GUID: user.GUID, uid: user.id },
                    JWT_SECRET,
                    { expiresIn: "1d", algorithm: "HS256" }
                );
                return res.send({ data: { token }, user, error: null });
            }
        } catch (e) {
            return res
                .status(500)
                .send({ data: null, user: null, error: "Internal Server Error" });
        }
    };
}
