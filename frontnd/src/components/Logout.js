import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout Successfully")
            setTimeout(()=>{
              window.location.reload()
            },3000)
        }catch(error){
           toast.error("error:", error)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}
