import React ,{useState} from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

function SignUp() {
 const [input, setInput] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword: '',
    gender:''
 })


 const {loading,signup} = useSignup()

 const handleCheckboxChange = (gender)=>{
        setInput({...input,gender})
 }

 const handleSubmit = async(e)=>{
    e.preventDefault()
    await signup(input)
 }

  return (
    <div className='flex flex-col item-center justify-center md:min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
                        bg-clip-padding backdrop-fiter backdrop-blur-lg bg-opacity-0 ' >
             <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                Sign Up
                <span className='text-blue-500'> Let's Chat</span>
            </h1>  
            <form onSubmit={handleSubmit}>
                <div> 
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Full Name</span>
                    </label>
                    <input type="text" value={input.fullName} onChange={(e)=>{setInput({...input,fullName:e.target.value})}}
                     placeholder='John Doe' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Username</span>
                    </label>
                    <input type="text" value={input.userName} onChange={(e)=>{setInput({...input,userName:e.target.value})}}
                     placeholder='Intrepid' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Password</span>
                    </label>
                    <input type="Password" value={input.password} onChange={(e)=>{setInput({...input,password:e.target.value})}}
                      placeholder='password' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text  text-slate-400'>Confirm Password</span>
                    </label>
                    <input type="password" value={input.confirmPassword}  onChange={(e)=>{setInput({...input,confirmPassword:e.target.value})}}
                         placeholder='Confirm Password' className='w-full input input-bordered h-10  bg-gray-900 text-white hover:border-blue-700 '/>
                </div>
                {/* Gender checkbox */}
                <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={input.gender}/>

                <Link to="/login" className='text-sm text-start text-white hover:underline hover:text-blue-500 m-2 inline-block'>Already have an account</Link>
                <div>
                    <button disabled={loading} className='btn btn-block btn-sm m-2 text-center h-10 border-gray-900 hover:bg-gray-900 bg-gray-900 text-white hover:border-blue-700'>
                       {loading ?  <span className='loading loading-spinner'></span>:"Sign Up"}
                    </button>
                </div>
            </form>

        </div>
        

    </div>
  )
}

export default SignUp