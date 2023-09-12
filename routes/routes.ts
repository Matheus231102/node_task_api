import { Router } from "express"

import CreateController from "../controllers/criar.controller"
import DeleteController from "../controllers/deletar.controller"

const routes = Router()

routes.post('/createtask', CreateController.task)
routes.delete('/deletealltasks', DeleteController.all)

export default routes