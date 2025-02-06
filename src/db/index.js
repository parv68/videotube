import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`connection successfully ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("error connecting");
        process.exit(1)
    }
}

export default connectDB;