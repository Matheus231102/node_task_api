import { taskModel } from "./model/MongoModel";

export default class MongoMethods {

    static async addTask(task: Object) {
        try {
            await taskModel.create(task)
            console.log(`tarefa adicionada com sucesso! ${task}`)
        } catch (error) {
            console.log("Erro ao adicionar tarefa: ", error)
        }
    }

    static async removeAllTasks() {
        try {
            await taskModel.deleteMany({})
            console.log(`As tasks foram deletas com sucesso!`)
        } catch (error) {
            console.log("Erro ao deletas todas as tarefas: ", error)
        }
    }

    static async removeOneTask(id: string) {
        try {
            await taskModel.findByIdAndRemove(id)
            console.log(`A task foi removida com sucesso!`)
        } catch (error) {
            console.log(`Erro ao remover task!`)
        }
    }

    static async getAllTasks() {
        try {
            const tasks = await taskModel.find({});
            return tasks
        } catch (error) {
            console.log(`Erro ao buscar as tasks!`)
        }
    }

}