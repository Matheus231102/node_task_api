import { Request, Response } from 'express';
import MongoMethods from '../database/MongoMethods';

export default class CreateController {
    static task(req: Request, res: Response) {

        const { taskName, completed } = req.body
        
        MongoMethods.addTask({ taskName, completed })
        res.status(200).send('Criado exemplo teste')
    }
}