import React from 'react'

function Conversation() {
  return (
  <>
    <div className='flex gap-2 items-center bg-slate-800 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1711524836~exp=1711525436~hmac=f8f5e6cb763f65417dd6bb44b28608051b52fbdd44524a3bd41fe6524ae4d2c0" 
                    alt="User Avatar" />
            </div>
        </div>  
        <div className='flex flex-col flex-1 '>
            <div className='flex gap-3 justify-between '>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-xl'>😊</span>
            </div>

        </div>
    </div>

    <div className='divider divider-neutral my-0 py-0 h-1' />
  </>
  )
}

export default Conversation