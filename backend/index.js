import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
import bodyParser from "body-parser";
const app = express(); 
dotenv.config();
app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI

try{
    mongoose.connect(URI)
    console.log("Database Connected")
}catch(err){
    console.log("error:", err)
}

app.use("/", bookRoute);
app.use("/", userRoute)

app.listen(PORT, () =>{
    console.log("listening on port :: 4001")
})

