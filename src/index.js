// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
// require ('dotenv').config({path:"./env"})  the standard which is given on the website
import dotenv from "dotenv";


dotenv.config({path:"./env"})


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('App running on port ${process.env.PORT}')
    })
}).catch((err)=>{
    console.log("Mongo dp connection error ",err);
})















/*
first approch
import express from "express";
const app = express()

;(async() =>{
    try {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error",(error)=>{
            console.log(error);
            throw error;
            
        })   
        
        app.listen(process.env.PORT,()=>{
            console.log('App running on port ${process.env.PORT}')
        } )
    } catch (error) {
        console.log(error);
    
    }
})()*/