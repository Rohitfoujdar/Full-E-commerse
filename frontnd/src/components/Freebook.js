import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import List from "../list.json";
import Cards from "./Cards";

export default function Freebook() {
  const [book, setBook] = useState([ ]);

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async() => {
    try{
      const Url = "http://localhost:4001/book"
      const response= await fetch(Url)
      const data = await response.json()
      const filterData = data.filter((data) => data.category === "Free")
      setBook(filterData);
      console.log("++=", filterData)
    }catch(err){
      console.log("Error using fetching the data: ", err)
    }
  }
  // const filterData = List.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h2 className="font-semibold text-xl pb-2">Free Offered Courses</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam?
        </p>
        </div>
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
      </div>
    </>
  );
}
