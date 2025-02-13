import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



export const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected: " + conn.connection.host);
    } catch (error) {
        console.log("MongoDB not connected", error);
    }
};
