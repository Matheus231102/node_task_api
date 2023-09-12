import express from "express"
import { json, urlencoded } from "express"
import routes from "./routes/routes"
import { mongoManipulator } from "./database/MongoConnection"

const port = 3000
const app = express()

app.use(json())
app.use(routes)
app.use(urlencoded({
    extended: true 
}))

try {
    mongoManipulator.startConnection()
    app.listen(port, () => {
        console.log(`server is running at ${port}`)
    })
} catch (error) {
    console.log(error)
}
