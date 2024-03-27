import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessage } from "react-icons/tb";
function MessageContainer() {
    const noChatSelected = false;
  return (
    <div className='flex flex-col md:min-w-[450px]'>
        { noChatSelected ? <NoChatSelected/> :
            
            <>
                <>
                    <div className='bg-slate-700 px-4 py-2 mb-2'>
                        <span className='label-lext'>To: <span className="text-gra-900 font-bold">John Doe</span></span>
                    </div>
                </>
                <Messages />
                <MessageInput />
            </>
            
         }

        

    </div>
  )
}


const NoChatSelected = ()=>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
               <p>
                Welcome 😃 John Doe ⚽ 
               </p>
               <p>Select a chat to start messaging</p>
               <TbMessage className='text-3xl md:text-6xl text-center'/>

            </div>

        </div>
    )
}

export default MessageContainer