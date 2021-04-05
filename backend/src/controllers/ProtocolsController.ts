import { RequestHandler } from "express";
import { prisma } from "../database";
import sharp from "sharp";
import axios from "axios";
import { sendResponse } from "../helpers/sendResponse";

const Protocols = prisma.protocols;
const Categories = prisma.protocol_categories;
const Protocol_Relation = prisma.protocol_category_relation;

const convertoDataUri = async (url: string) => {
    try {
        const input = (await axios({ url, responseType: "arraybuffer" }))
            .data as Buffer;

        const uri = await sharp(input).toBuffer();

        return "data:image/png;base64," + uri.toString("base64");
    } catch (e) {
        return "";
    }
};

export class ProtocolsController {
    static addAction: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const { name, icon, description } = req.body;
        const updatedProtocol = await Protocols.update({
            where: { id: parseInt(id) },
            data: { actions: { create: { name, icon, description } } },
            include: { actions: true },
        });

        return sendResponse(res, { data: updatedProtocol, user: req.user });
    };
    static updateAction: RequestHandler = async (req, res) => {
        const { id, actionid } = req.params;
        const { name, icon, description } = req.body;
        const updatedProtocol = await Protocols.update({
            where: { id: parseInt(id) },
            data: {
                actions: {
                    update: {
                        data: { name, icon, description },
                        where: { id: parseInt(actionid) },
                    },
                },
            },
            include: { actions: true },
        });

        return sendResponse(res, { data: updatedProtocol, user: req.user });
    };

    static deleteAction: RequestHandler = async (req, res) => {
        const { id, actionid } = req.params;

        const updatedProtocol = await Protocols.update({
            where: { id: parseInt(id) },
            data: {
                actions: {
                    delete: {
                        id: parseInt(actionid),
                    },
                },
            },
            include: { actions: true },
        });

        return sendResponse(res, { data: updatedProtocol, user: req.user });
    };

    static getProtocols: RequestHandler = async (req, res, next) => {
        const { id } = req.params;
        if (id) {
            const result = await Protocols.findUnique({
                where: { id: parseInt(id) },
                include: { actions: true,protocol_category_relation: {include: {protocol_categories: true}} },
            });

            if (!result) {
                return res.sendStatus(404);
            }
            const url = await convertoDataUri(result.vertexImageURL as string);

            return sendResponse(res, {
                data: { ...result, base64: url },
                user: req.user,
            });
        }

        const results = await Protocols.findMany({
            where: { showOnToolbar: '1' },
            include: { actions: true },
        });

        const newResults: (typeof results[1] & { base64: string })[] = [];

        const base64Urls = results.map(({ vertexImageURL }) => {
            return convertoDataUri(vertexImageURL as string);
        });
        const uris = await Promise.all(base64Urls);

        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            newResults.push({ ...result, base64: uris[i] });
        }
        sendResponse(res, { data: newResults, user: req.user });
    };
    static updateProtocols: RequestHandler = async (req, res) => {
        let { id, ...rest } = req.body;
        if (req.params.id) {
            id = req.params.id;
        }
        if (!id) {
            return res.sendStatus(400);
        }
        const results = await Protocols.update({
            data: rest,
            where: { id: parseInt(id) },
        });
        return sendResponse(res, { data: results, user: req.user });
    };

    static deleteProtocols: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const count = await Protocols.delete({ where: { id: parseInt(id) } });
        sendResponse(res, { data: count, user: req.user });
    };

    static createProtocols: RequestHandler = async (req, res) => {
        const protcol = await Protocols.create({ data: req.body });
        sendResponse(res, { data: protcol, user: req.user });
    };

    static createCategory: RequestHandler = async (req, res) => {
        const { name } = req.body;

        const category = await Categories.create({ data: { name } });

        return sendResponse(res, { data: category, user: req.user });
    };

    static updateCategory: RequestHandler = async (req, res) => {
        const {categoryId} = req.params;
        const {name} = req.body;
        const cat = await Categories.findFirst({
            where: { id: { equals: parseInt(categoryId) } },
            include: {
                protocol_category_relation: {
                    select: {
                        category_id: false,
                        protocol_id: false,
                        Protocols: { include: { actions: true } },
                    },
                },
            },
        });
        if(!cat){
            return sendResponse(res, {data: {msg: "Category Not Found"}, user: req.user, code: 404})
        }
        const category = await Categories.update({ data: { name }, where: {id: parseInt(categoryId)} });
        return sendResponse(res, { data: category, user: req.user });
    }
    static deleteCategory: RequestHandler = async (req, res) => {
        const {categoryId} = req.params;
        const cat = await Categories.findFirst({
            where: { id: { equals: parseInt(categoryId) } },
            include: {
                protocol_category_relation: {
                    select: {
                        category_id: false,
                        protocol_id: false,
                        Protocols: { include: { actions: true } },
                    },
                },
            },
        });
        if(!cat){
            return sendResponse(res, {data: {msg: "Category Not Found"}, user: req.user, code: 404})
        }
        if(cat.protocol_category_relation.length !== 0){
            return sendResponse(res, {data: {msg: "Category Has Protocols"}, user: req.user,code:400});
        }

        const category = await Categories.delete({ where: {id: parseInt(categoryId)} });
        return sendResponse(res, { data: category, user: req.user });
    }

    static getProtocolCategories: RequestHandler = async (req, res) => {
        const categories = await Categories.findMany();
        return sendResponse(res, { data: categories, user: req.user });
    };

    static getProtocolByCategoryId: RequestHandler = async (req, res) => {
        const { categoryId } = req.params;

        const category = await Categories.findFirst({
            where: { id: { equals: parseInt(categoryId) } },
            include: {
                protocol_category_relation: {
                    select: {
                        category_id: false,
                        protocol_id: false,
                        Protocols: { include: { actions: true } },
                    },
                },
            },
        });
        return sendResponse(res, { data: category, user: req.user });
    };

    static addProtocolToCategories: RequestHandler = async (req, res) => {
        const { id } = req.params;

        const { categories } = req.body;

        let results = [];
      await Protocol_Relation.deleteMany({ where: {protocol_id: parseInt(id)} });
        
        for (let i = 0; i < categories.length; i++) {
            
            const data = {
                category_id: parseInt(categories[i]),
                protocol_id: parseInt(id),
            };
           
            const result =  await Protocol_Relation.create({
                    data,
            });
            
            results.push(result);
        }
        return sendResponse(res, { data: results, user: req.user });
    };
    static addProtocolToCategory: RequestHandler = async (req, res) => {
        const { categoryid, protocolid } = req.params;
        const data = {
            category_id: parseInt(categoryid),
            protocol_id: parseInt(protocolid),
        };
        let exists = await Protocol_Relation.findFirst({ where: data });
        let category = null;
        const include = {
            protocol_category_relation: {
                select: {
                    category_id: false,
                    protocol_id: false,
                    Protocols: { include: { actions: true } },
                },
            },
        };
        if (!exists) {
            category = await Categories.update({
                where: { id: parseInt(categoryid) },
                data: {
                    protocol_category_relation: {
                        create: {
                            protocol_id: parseInt(protocolid),
                        },
                    },
                },
                include,
            });
        } else {
            category = await Categories.findFirst({
                where: { id: parseInt(categoryid) },
                include,
            });
        }

        return sendResponse(res, { data: category, user: req.user });
    };

    static deleteProtocolFromCat: RequestHandler = async (req, res) => {
        const { categoryid, protocolid } = req.params;
        const data = {
            category_id: parseInt(categoryid),
            protocol_id: parseInt(protocolid),
        };

        await Protocol_Relation.deleteMany({ where: data });
        return sendResponse(res, {
            data: { msg: "Protocol Remove From Category" },
            user: req.user,
        });
    };
}
