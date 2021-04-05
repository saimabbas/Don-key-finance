import { RequestHandler } from "express";
import { prisma } from "../database";
import { sendResponse, uuidv4 } from "../helpers";
import { Users as TypeUser } from "@prisma/client";
const Users = prisma.users;

const getUserSettings = (user: Partial<TypeUser>) => {
    const {
        farmer_strategy,
        firstname,
        middlename,
        lastname,
        birthdate,
        city,
        country,
        address,
        postalcode,
        passportnum,
        planned_investments,
        exp_crypto,
        exp_equities,
        exp_leveraged,
        farmer_knowledge,
        farmer_purpose,
        gender,
        income_sources,
        risk_limit,
        streetNo,
        birthsameascitizen,
    } = user;
    return {
        farmer_strategy,
        firstname,
        middlename,
        lastname,
        birthdate,
        city,
        country,
        address,
        postalcode,
        passportnum,
        planned_investments,
        exp_crypto,
        exp_equities,
        exp_leveraged,
        farmer_knowledge,
        farmer_purpose,
        gender,
        income_sources,
        risk_limit,
        streetNo,
        birthsameascitizen,
    };
};

export class UsersController {
    static getUsers: RequestHandler = async (req, res) => {
        const results = await Users.findMany();
        sendResponse(res, { data: results, user: req.user });
    };

    static getUsersById: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const result = await Users.findUnique({ where: { id: parseInt(id) } });
        if (!result) {
            return res.sendStatus(404);
        }

        return sendResponse(res, {
            data: result,
            user: req.user,
        });
    };
    static updateUser: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const date = new Date();
        const results = await Users.update({
            data: { ...req.body, updatedAt: date },
            where: { id: parseInt(id) },
        });
        return sendResponse(res, { data: results, user: req.user });
    };
    static deleteUser: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const user = await Users.delete({ where: { id: parseInt(id) } });
        sendResponse(res, { data: user, user: req.user });
    };
    static getUserSettings: RequestHandler = async (req, res) => {
        const user = req.user;
        if (!user) {
            return sendResponse(res, {
                data: null,
                code: 404,
                error: { msg: "User Not Found" },
            });
        }

        const userDetails = await Users.findFirst({
            where: { GUID: user.GUID },
        });
        if (userDetails) {
            return sendResponse(res, {
                data: getUserSettings(userDetails),
                user: req.user,
            });
        }
    };

    static updateUserSettings: RequestHandler = async (req, res) => {
        const user = req.user;
        if (!user) {
            return sendResponse(res, {
                data: null,
                code: 404,
                error: { msg: "User Not Found" },
            });
        }

        const body = req.body;
        const settings = getUserSettings(body);
        const result = await Users.update({
            where: { GUID: user.GUID },
            data: settings,
        });
        return sendResponse(res, {
            data: getUserSettings(result),
            user: req.user,
        });
    };
    static createUser: RequestHandler = async (req, res) => {
        const date = new Date();
        const user = await Users.create({
            data: {
                ...req.body,
                GUID: uuidv4(),
                createdAt: date,
                updatedAt: date,
            },
        });
        sendResponse(res, { data: user, user: req.user });
    };
}
