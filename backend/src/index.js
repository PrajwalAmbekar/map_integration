import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from './lib/db.js';
import pinroute from "./routes/pin.route.js"
import cors from "cors"
dotenv.config(); 

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api",pinroute)


const PORT = process.env.PORT;
app.listen(PORT, () => {
    
    console.log("Server is running on port " + PORT); // Corrected log message
    ConnectDB();
});
