import { RequestHandler } from "express";
import { prisma } from "../database";
import { sendResponse } from "../helpers";

const Strategies = prisma.strategies;

export class StrategiesController {
    static getStrategies: RequestHandler = async (req, res) => {
        let options = {};
        const id = parseInt(req.query.id as string);
        if (id) {
            options = { id };
        }
        const results = await Strategies.findMany({
            where: { userId: req.user?.uid, ...options },
        });
        if (results.length === 0) {
            return sendResponse(res, { data: null, user: req.user });
        }
        return sendResponse(res, { data: id ? results[0] : results, user: req.user });
    };
    static updateStrategies: RequestHandler = async (req, res) => {
        const { id, ...rest } = req.body;

        const results = await Strategies.update({
            data: {...rest, updatedAt: new Date()},
            where: { id: parseInt(id) },
        });
        return sendResponse(res, { data: results, user: req.user });
    };

    static deleteStrategies: RequestHandler = async (req, res) => {
        const { id } = req.body;
        const count = await Strategies.delete({ where: { id: parseInt(id) } });
        return sendResponse(res, {data: count, user: req.user})
    };

    static createStrategies: RequestHandler = async (req, res) => {
        const time = new Date();

        const strategy = await Strategies.create({
            data: {userId: req.user?.uid, createdAt: time, updatedAt: time, ...req.body },
        
        });
        return sendResponse(res, {data: strategy, user: req.user})
    };
}
