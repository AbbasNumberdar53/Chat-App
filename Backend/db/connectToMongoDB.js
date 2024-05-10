import mongoose from "mongoose";

const connectToMongoDB= async () =>{
    try {
        console.log("connecting to database...");
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to database.");
    } catch (error) {
        console.log("Error connecting MongoDB", error.message)
    }
}

export default connectToMongoDB;