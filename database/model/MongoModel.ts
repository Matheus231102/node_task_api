import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    taskName: String,
})

const userModel = model('task', taskSchema)

export {
    userModel
}