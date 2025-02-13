import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from './lib/db.js';

dotenv.config(); 

const app = express();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    
    console.log("Server is running on port " + PORT); // Corrected log message
    ConnectDB();
});
