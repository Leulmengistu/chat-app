import React from 'react'
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojes';
import useConversation from '../../zustand/useConversation';

function Conversations() {
  const {loading,conversations} = useGetConversations()
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation,index)=>{
        return(<Conversation 
          conversation={conversation}
          key={conversation._id}
          emoji={getRandomEmoji()}
          lastIndex = {index ===( conversation.length - 1)}
          />)
      })}

      {loading?<span className='loading loading-spinner mx-auto h-full flex item-center text-white'></span>
        :
          null
    }
    </div>
  )
}

export default Conversations