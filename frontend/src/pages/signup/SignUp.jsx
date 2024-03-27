import React from 'react'
import GenderCheckbox from './GenderCheckbox';
function SignUp() {
  return (
    <div className='flex flex-col item-center justify-center md:min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
                        bg-clip-padding backdrop-fiter backdrop-blur-lg bg-opacity-0 ' >
             <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                Sign Up
                <span className='text-blue-500'> Let's Chat</span>
            </h1>  
            <form >
                <div> 
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Username</span>
                    </label>
                    <input type="text" placeholder='Intrepid' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Password</span>
                    </label>
                    <input type="Password" placeholder='password' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                {/* Gender checkbox */}
                <GenderCheckbox />

                <a href="#" className='text-sm text-start text-white hover:underline hover:text-blue-500 m-2 inline-block'>Already have an account</a>
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

export default SignUp