import { Request, Response } from "express"
import MongoMethods from "../database/MongoMethods"

export default class DeleteController {
    static all(req: Request, res: Response) {
        MongoMethods.removeAllTasks()
        res.status(200).send('todas as tasks foram deletadas!')
    }

    static one(req: Request, res: Response) {
        const id = req.params.id
        console.log(id)
        MongoMethods.removeOneTask(id)
        res.status(201).json('task foi excluida com sucesso!')
    }

}