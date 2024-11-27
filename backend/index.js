import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
const app = express(); 
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI

try{
    mongoose.connect(URI)
    console.log("Database Connected")
}catch(err){
    console.log("error:", err)
}

app.use("/book", bookRoute);

app.listen(PORT, () =>{
    console.log("listening on port :: 4001")
})

