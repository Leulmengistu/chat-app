import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import { useMobileContext } from '../../context/MobileContext';


function Conversation(props) {

const {selectedConversations,setSelectedConversations} = useConversation();
const {onlineUsers} = useSocketContext();
const {setChatView} = useMobileContext();

  const isOnline = onlineUsers.includes(props.conversation._id)
  const isSelected = selectedConversations?._id == props.conversation._id;


  return (
  <>
    <div 
    onClick={()=>{
        setSelectedConversations(props.conversation)
        setChatView(false)
    }} 
    className={`flex gap-2 items-center ${isSelected?'bg-sky-500':'bg-slate-900'}  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
        <div className={`avatar ${isOnline?'online':''}`}>
            <div className='w-12 rounded-full'>
                <img src={props.conversation.profilePic}
                    alt="User Avatar" />
            </div>
        </div>  
        <div className='flex flex-col flex-1 '>
            <div className='flex gap-3 justify-between '>
                <p className='font-bold text-gray-200'>{props.conversation.userName}</p>
                <span className='text-xl'>{props.emoji}</span>
            </div>

        </div>
    </div>

    {props.lastIndex && <div className='divider divider-neutral my-0 py-0 h-1' />}
  </>
  )
}

export default Conversation