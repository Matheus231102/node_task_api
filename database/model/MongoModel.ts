import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    taskName: String,
})

const taskModel = model('task', taskSchema)

export {
    taskModel
}