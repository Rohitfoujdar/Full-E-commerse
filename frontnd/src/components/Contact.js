import React from "react";
import { Link } from "react-router-dom";

export default function contact() {
  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className="h-screen mt-[30px] flex items-center justify-center"
        >
          <div className="modal-box dark:bg-slate-900 dark:text-white border">
            <form method="dialog">
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">May I Help You</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                />
              </div>
              <div className="mt-[20px] space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Enter your message"
                  className="w-80 h-32 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                ></textarea>
              </div>
              <div className="flex items-center justify-around mt-4">
                <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
