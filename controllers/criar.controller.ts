import { Request, Response } from 'express';
import MongoMethods from '../database/MongoMethods';

export default class CreateController {
    static task(req: Request, res: Response) {

        const { taskName } = req.body
        
        MongoMethods.addTask({ taskName })
        res.status(200).send('Criado exemplo teste')
    }
}