import React ,{useEffect, useState}from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessage } from "react-icons/tb";
import useConversation from '../../zustand/useConversation';
import { getRandomEmoji } from '../../utils/emojes';
import { useAuthContext } from '../../context/AuthContext';

function MessageContainer() {
    
   
    const {selectedConversations,setSelectedConversations} = useConversation();
    
    useEffect(()=>{
        return ()=>setSelectedConversations(null)
      },[])
    

  return (
    <div className='flex flex-col h-full  md:min-w-[450px]'>
        {!selectedConversations? <NoChatSelected/> :
            
            <>
                <>
                    <div className='bg-slate-700 px-4 py-2 mb-2'>
                        <span className='label-lext'>To: <span className="text-gra-900 font-bold">{selectedConversations.fullName}</span></span>
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

    const {authUser} = useAuthContext();
    const [currentUser,setCurrentUser] = useState(authUser)
    useEffect(()=>{
        setCurrentUser(currentUser)
    },[authUser])
 
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
               <p>
                Welcome {getRandomEmoji()} {currentUser.userName} {getRandomEmoji()}
               </p>
               <p>Select a chat to start messaging</p>
               <TbMessage className='text-3xl md:text-6xl text-center'/>

            </div>

        </div>
    )
}

export default MessageContainer