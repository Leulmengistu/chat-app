import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

function Conversation(props) {

const {selectedConversations,setSelectedConversations} = useConversation();
const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(props.conversation._id)
  onlineUsers?.map(user=>{
    console.log("user: ",user)
  })
  const isSelected = selectedConversations?._id == props.conversation._id;
  console.log("ISONLINE: ",isOnline)
  console.log("props.coversations_id : ",props.conversation._id)
  console.log('onlineusersa: ',onlineUsers)

  return (
  <>
    <div onClick={()=>setSelectedConversations(props.conversation)} className={`flex gap-2 items-center ${isSelected?'bg-sky-500':'bg-slate-900'}  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
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