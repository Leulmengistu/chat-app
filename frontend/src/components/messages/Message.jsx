import React,{useEffect} from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {

  const {authUser} = useAuthContext();
  const {selectedConversations} = useConversation();
  const fromMe =  authUser._id === message.senderId;
  console.log("User _id: ",authUser._id)
  console.log("reciverId: ",selectedConversations._id)
  const chatClassName = fromMe?'chat-end':'chat-start';
  console.log("fromMe: ",fromMe)
  const profilePic = fromMe?authUser.profilePic:selectedConversations?.profilePic;
  const bubbleBackground = fromMe?"bg-slate-900":'bg-sky-500';
  console.log("Profile pic: ",profilePic)
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} 
                    alt="User Image" />
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBackground}`}>
              {message.message}
        </div>
        <div className=' chat-footer flex gap-1 items-center opacity-50 text-xs text-slate-200 pb-1'>
          {extractTime(message.createdAt)}
        </div>
    </div>
  )
}

export default Message