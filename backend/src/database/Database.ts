import { PrismaClient } from ".prisma/client";

export const prisma = new PrismaClient()

export class Database {

     

    static async connect() {

        try {
            await prisma.$connect();
            // await sequelize.sync({});
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    static async disconnect(){
        await prisma.$disconnect();
    }

}