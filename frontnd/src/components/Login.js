import React from "react";
import { useForm } from "react-hook-form";
import toast, {Toaster} from "react-hot-toast"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      // Define the API endpoint
      const API = "http://localhost:4001/login";
  
      // Perform the fetch request with method, headers, and body
      const response = await fetch(API, {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Ensure JSON data format
        },
        body: JSON.stringify(userInfo), // Convert data to JSON string
      });
  
      // Parse the API response
      const apiData = await response.json();
  
      // Handle response and show result in the console
      console.log("API Response:", apiData);
  
      // Handle success (You can redirect, show a message, etc.)
      if (response.ok) {
        toast.success('login Successful!')
      } else {
        toast.error("invalid username & password");
      }
      localStorage.setItem("User",JSON.stringify(apiData))
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form  method="dialog" >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              >
                ✕
              </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="Email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br/>
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
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
                {errors.password&& <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex items-center justify-around mt-4">
              <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200" onClick={handleSubmit(onSubmit)} >
                Login
              </button>
             <p>
                Not registered?
                <a href="/signup" className="text-blue-500 underline" 
                >
                  SignUp
                </a>
              </p>
            </div>
            </form>
          </div>
        </dialog>
    </div>
  );
}
