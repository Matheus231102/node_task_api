import { Request, Response } from 'express';
import MongoMethods from '../database/MongoMethods';

export default class AlterarController {
    static async changeComplete(req: Request, res: Response) {
        const id = req.params.id;
        const tasks = await MongoMethods.chancePropComplete(id)
        res.status(200).json(tasks)
    }
}