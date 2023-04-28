import mongoose from "mongoose";
import config from "../config/index.js";

const { user, pass } = config.mongodb;

const mongooseRun = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.lnyq7c9.mongodb.net/?retryWrites=true&w=majority`)
        console.log('db is connected');
    } catch (error) {
        console.log(`cannot connect to db. Error: ${error}`);
    }
}

export default mongooseRun