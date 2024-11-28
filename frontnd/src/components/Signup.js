import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className="h-screen flex items-center justify-center"
        >
          <div className="modal-box dark:bg-slate-900 dark:text-white border">
            <form method="dialog">
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex items-center justify-around mt-4">
                <button
                  className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200"
                  onClick={handleSubmit(onSubmit)}
                >
                  Signup
                </button>
                <p>
                  Have account?
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="text-blue-500 underline"
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
