import express from"express";
import { pin } from "../models/pin.model.js";

const routes=express.Router();

routes.post("/pin",async (req,res)=>{
    const newPin=new pin(req.body);
    try{
        const savedPin=await newPin.save();
        res.status(200).json(savedPin);
    }catch(error){
        res.status(500).json(error)
    }
});

routes.get("/pin",async (req,res)=>{
    try{
        const pins= await pin.find();
        res.status(200).json(pins);
    }catch(error){
        res.status(500).json(error)
    }
})
export default routes;



