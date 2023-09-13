import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    taskName: String,
    completed: Boolean
})

const taskModel = model('task', taskSchema)

export {
    taskModel
}