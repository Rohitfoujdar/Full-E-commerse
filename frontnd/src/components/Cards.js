import React from "react";

export default function Cards({item}) {
  return (
    <>
      <div className="mt-4 mb-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl order-2 cursor-pointer hover:scale-105 duration-200 dark:bg-slate-700 dark:text-white">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
