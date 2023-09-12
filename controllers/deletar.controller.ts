import { Request, Response } from "express"
import MongoMethods from "../database/MongoMethods"

export default class DeleteController {
    static all(req: Request, res: Response) {
        MongoMethods.removeAllTasks()
        res.status(200).send('todas as tasks foram deletadas!')
    }
}