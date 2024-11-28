import React, { useEffect, useState } from "react";
// import List from "../list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

export default function Course() {
  const [book, setBook] = useState([ ]);

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async() => {
    try{
      const Url = "http://localhost:4001/book"
      const response= await fetch(Url)
      const data = await response.json()
      setBook(data);
      console.log("++=", data)
    }catch(err){
      console.log("Error using fetching the data: ", err)
    }
  }

  return (
    <div className="min-h-screen max-w-screen-2xl container mx-auto mt-[-44px] md:px-20 px-4 pt-16">
      <div className="items-center justify-center text-center">
        <h1 className=" text-2xl mt-28 md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500 font-semibold">Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, neque non suscipit dignissim, lacus risus vestibulum ante,
          non ultrices enim sapien id risus. Curabitur laoreet metus in lectus
          tincidunt facilisis. Ut at sapien nec quam fermentum rhoncus. Fusce
          euismod, nisl ac tristique cursus, justo lorem aliquam magna, vitae
          facilisis lorem elit nec nulla.
        </p>
        <Link to="/">
         <button className="mt-6 rounded bg-pink-500 text-white px-4 py-2 hover:bg-pink-700">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(<Cards item={item} key={item.id}/>))
        }
      </div>
    </div>
  );
}
