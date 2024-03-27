import React from 'react'

function Message() {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1711524836~exp=1711525436~hmac=f8f5e6cb763f65417dd6bb44b28608051b52fbdd44524a3bd41fe6524ae4d2c0" 
                    alt="User Image" />
            </div>
        </div>

        <div className='chat-bubble text-white bg-blue-500'>
            Whatzzzzz up!
        </div>
    </div>
  )
}

export default Message