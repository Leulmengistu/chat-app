import React, {useRef,useEffect} from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';
function Messages() {
  
  const {messages,loading} = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef()
  useEffect(()=>{
      setTimeout(()=>{lastMessageRef.current?.scrollIntoView({behavior:"smooth"})},100)
  },[messages])

  return (
    <div className='px-4 h-full overflow-auto'>
        {!loading && messages.length > 0 && 
          messages.map((message,index)=>{
         return(<div key={message._id}  ref={lastMessageRef}>
            <Message message={message}/>
         </div>)
          } 
          )
        }
        {loading?[...Array(5)].map((_,index)=><MessageSkeleton />):null}
        {!loading && messages.length===0 && <p className='text-slate-300 text-center'>Start sending message to start a converstion!</p>}
    </div>  
  )
}

export default Messages