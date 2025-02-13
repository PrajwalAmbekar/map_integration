import mongoose from"mongoose";

const PinSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        min:3,
    },
    desc:{
        type:String,
        required:true,
        min:3
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    lat:{
        type:Number,
        require:true,
    },
    long:{
        type:Number,
        require:true,
    },
   
});
export const pin=mongoose.model("pins",PinSchema);