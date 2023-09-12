import { userModel } from "./model/MongoModel";

export default class MongoMethods {

    static async addTask(task: Object) {
        try {
            await userModel.create(task)
            console.log(`tarefa adicionada com sucesso! ${task}`)
        } catch (error) {
            console.log("Erro ao adicionar tarefa: ", error)
        }
    }

    static async removeAllTasks() {
        try {
            await userModel.deleteMany({})
            console.log(`As tasks foram deletas com sucesso!`)
        } catch (error) {
            console.log("Erro ao deletas todas as tarefas: ", error)
        }
    }

    static async getAllTasks() {
        try {
            const tasks = await userModel.find({});
            return tasks
        } catch (error) {
            console.log(`Erro ao buscar as tasks!`)
        }
    }

}