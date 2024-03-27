import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <form className='flex items-center gap-1'>
        <input placeholder='Search' type='text' className="text-white bg-gray-700 input input-bordered rounded-full" />
        <button type='submit' className='btn  btn-circle border-none bg-sky-500 text-white hover:bg-sky-500 hover:text-gray-700'>
          <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput