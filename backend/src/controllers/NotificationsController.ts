
import { RequestHandler } from "express";
import { prisma } from "../database";
import { sendResponse } from "../helpers";

const Notifications = prisma.notifications;
export class NotificationController {
    static getNotifications: RequestHandler = async (req, res) => {

        const results = await Notifications.findMany();
        sendResponse(res, {data: results, user: req.user});
      
    }
    static updateNotification: RequestHandler = async (req, res) => {
        const {
            id,
            ...rest
        } = req.body;

        const results = await Notifications.update({data: rest,  where: {id:parseInt(id)} });
        sendResponse(res, {data: results, user: req.user});
    }

    static deleteNotification: RequestHandler = async (req, res) => {
        const { id } = req.body;
        const results = await Notifications.delete({ where: { id: parseInt(id) } });
        sendResponse(res, {data: results, user: req.user});
    }

    static createNotification: RequestHandler = async (req, res) => {

        const results = await Notifications.create({data: req.body});
        sendResponse(res, {data: results, user: req.user});
    }

}