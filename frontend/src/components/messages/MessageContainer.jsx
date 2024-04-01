import React ,{useEffect, useState}from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessage } from "react-icons/tb";
import useConversation from '../../zustand/useConversation';
import { getRandomEmoji } from '../../utils/emojes';
import { useAuthContext } from '../../context/AuthContext';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useMobileContext } from '../../context/MobileContext';

function MessageContainer() {
    
   
    const {selectedConversations,setSelectedConversations} = useConversation();
    const {chatView,setChatView} = useMobileContext();
    
    useEffect(()=>{
        return ()=>setSelectedConversations(null)
      },[])
    

  return (
    <div className='flex flex-col h-full  md:min-w-[450px]'>
        {!selectedConversations? <NoChatSelected/> :
            
            <>
                <>
                    <div className='bg-slate-700 px-4 py-2 mb-2'>
                        <div className='flex items-center gap-2'>
                            <div onClick={()=>{setChatView(true)}} className='sm:hidden flex items-center gap-2'>
                                <IoArrowBackCircleSharp className='text-white text-4xl'/>
                                <span className='text-white'>Chats</span>
                            </div>
                            <span className='label-lext text-slate-300'>To: <span className="text-gray-400 font-bold">{selectedConversations.fullName}</span></span>
                        </div>
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
    const {chatView,setChatView} = useMobileContext();
    useEffect(()=>{
        setCurrentUser(currentUser)
    },[authUser])
 
    return(
        <div className='flex flex-col  w-full h-full'>
            <div onClick={()=>{setChatView(true)}} className='sm:hidden flex items-center gap-2'>
                <IoArrowBackCircleSharp className='text-slate-200 text-4xl'/>
                <span className='text-white'>Chats</span>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                
                <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
                <p>
                    Welcome {getRandomEmoji()} {currentUser.userName} {getRandomEmoji()}
                </p>
                <p>Select a chat to start messaging</p>
                <TbMessage className='text-3xl md:text-6xl text-center'/>

                </div>

            </div>
        </div>
    )
}

export default MessageContainer