import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center md:min-w-96  md:mx-auto sm:mx-0 '>
       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
                        bg-clip-padding backdrop-fiter backdrop-blur-lg bg-opacity-0 '>
            <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                Login
                <span className='text-blue-500'> Let's Chat</span>
            </h1>   
            <form className='flex flex-col gap-1 min-w-90'>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-slate-400'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10 bg-gray-900 text-white hover:border-blue-700 " />
                </div>
                <div>
                   <label className='label p-2'>
                        <span className='text-base label-text text-slate-400'>Password</span>

                   </label>
                   <input type="text" placeholder='Password' className="w-full input input-bordered h-10 bg-gray-900 text-white hover:border-blue-700 " />
                </div>
                <a href="#" className='text-sm text-start text-white hover:underline hover:text-blue-500 m-2 inline-block'>Don't have any account</a>
            
                <div>
                    <button className='btn btn-block btn-sm m-2 text-center h-10 border-gray-900 hover:bg-gray-900 bg-gray-900 text-white hover:border-blue-700'>
                        Login
                    </button>
                </div>
            </form>             
       </div>
    </div>
  )
}

export default Login