import React, { useState } from 'react'
import { BsSendFill} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';
function MessageInput() {

  const [message,setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessage(message);
    setMessage('')
  }

  return (
   
   <form className="px-4 my-3 flex-end" onSubmit={handleSubmit}>
        <div className='w-full relative'> 
            <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Send a message' className='border pr-10 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading?<span className='loading loading-spinner'></span>:<BsSendFill className='text-green-500'/>}
            </button>
        </div>
    </form>
  )
}




export default MessageInput