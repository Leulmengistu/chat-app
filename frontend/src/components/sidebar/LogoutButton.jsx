import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
function LogoutButton() {
  const {loading,logout} = useLogout();

  const handleLogout= async (e)=>{
      e.preventDefault()
      logout()
  }

  return (
   <div className='mt-auto'>
    {!loading?
    <button ><BiLogOut onClick={handleLogout} className='w-6 h-6 text-white cursor-pointer hover:text-slate-400'/></button>
      :
      <span className='loading loading-spinner'></span>
  }
   </div>
  )
}

export default LogoutButton