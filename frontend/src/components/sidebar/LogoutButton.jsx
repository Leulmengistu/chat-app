import React from 'react'
import { BiLogOut } from "react-icons/bi";
function LogoutButton() {
  return (
   <div className='mt-auto'>
    <button ><BiLogOut className='w-6 h-6 text-white cursor-pointer hover:text-slate-400'/></button>
        
   </div>
  )
}

export default LogoutButton