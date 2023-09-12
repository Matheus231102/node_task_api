import mongoose, { mongo } from "mongoose";

const databaseName = 'node-task'
const uriConnection = `mongodb://127.0.0.1:27017/${databaseName}`

class MongoConnection {
    private uriString: string;
    constructor(uriString: string) {
        this.uriString = uriString
    }

    public startConnection() {
        mongoose.connect(this.uriString)
            .then((data) => {
                console.log(`MongoDB is connected!`)
            })
            .catch((err) => {
                console.log(`this is the data ${err}`)
            })
    }

}

const mongoManipulator = new MongoConnection(uriConnection) 

export {
    mongoManipulator
}