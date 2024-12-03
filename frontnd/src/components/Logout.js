import React from 'react'
import { useAuth } from '../context/AuthProvider';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
        }catch(error){

        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}
