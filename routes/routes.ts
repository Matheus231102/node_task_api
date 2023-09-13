import { Router } from "express"

import CreateController from "../controllers/criar.controller"
import DeleteController from "../controllers/deletar.controller"
import BuscarController from "../controllers/buscar.controller"

const routes = Router()

routes.get('/getalltasks',  BuscarController.allTasks)
routes.post('/createtask', CreateController.task)
routes.delete('/deletealltasks', DeleteController.all)
routes.delete('/deletetask/:id', DeleteController.one)


export default routes