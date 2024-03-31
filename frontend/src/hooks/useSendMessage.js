import {useState} from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
function useSendMessage() {
    const [loading,setLoading] = useState(false);  
    const {messages,setMessages,selectedConversations} = useConversation();

    const sendMessage = async(message)=>{
        const success = handleInputError(message);
        if(!success){
            return
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversations._id}`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            });

            
            const data =await res.json();
  
            if(data.error){
         
                throw new Error(data.error)
            }

            setMessages([...messages,data])
            
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)   
        }
        
    }

    return {loading,sendMessage}
  
}


const handleInputError = (message)=>{
    if(!message){
       toast.error("Message is Empty!");
       return false
    }
    return true
}

export default useSendMessage