import express from "express"
import dotenv from "dotenv";
dotenv.config();

import ConnectDB from "./DB/index.js"
import app from "./app.js";

ConnectDB().then(()=> {
    app.listen(process.env.PORT || 5000,()=> {
        console.log("server is running on locahost //"+process.env.PORT)
    })
}).catch(err=>{
    console.log(err)
})