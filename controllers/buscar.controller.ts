import { Request, Response } from 'express';
import MongoMethods from '../database/MongoMethods';

export default class BuscarController {
    static async allTasks(req: Request, res: Response) {
        const tasks = await MongoMethods.getAllTasks()
        res.status(200).json(tasks)
    }
}