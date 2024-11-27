import mongoose from "mongoose";

const bookSchema = new mongoose.Schema ({
    title:String,
    image:String,
    price:Number,
    name:String,
    category:String
})

const Book = mongoose.model("Book",bookSchema);
export default Book;