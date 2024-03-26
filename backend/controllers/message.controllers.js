import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
export const sendMessage = async(req,res)=>{
        try {
                const {message} = req.body;
                const {id:recieverId} = req.params; //destructuring instead of const id = req.params.id
                const senderId =  req.user._id
                let  conversation = await Conversation.findOne({participants: {$all: [senderId,recieverId]}})
                if(!conversation){
                      conversation  = await Conversation.create({
                        participants: [senderId,recieverId],
                      })
                }
                // When using  await Conversation.create() it returns a promise and go directly to the database and create the document
                // But when using new Message() it creates an instance of a model and it will not directly create the document in the database unless we use the .save() method
                const newMessage = new Message({
                        senderId,
                        recieverId,
                        message
                })
                
                console.log("newMessage_Id: ", newMessage)
                if (newMessage){
                        conversation.messages.push(newMessage._id)       
                }

                // await conversation.save() 
                // await newMessage.save()
                
                //when using Promise.all() the async functions run in paralle and don't have to wait for each other
                await Promise.all([conversation.save(),newMessage.save()])
                res.status(201).json(newMessage)


        } catch (error) {
                console.log("Error in sendMessage controller",error.message);
                res.status(500).json({error:"Internal server error"});     
        }
}

export const getMessage = async(req,res)=>{

        try {

                const {id:userToChatId} = req.params;
                const senderId = req.user._id;
                const conversation = await Conversation.findOne({participants:{$all: [senderId,userToChatId]}}).populate("messages");
                //populate() method returns the messages instead of a reference to the messages
                if(!conversation){
                        return res.status(200).json([])
                }
                res.status(200).json(conversation.messages)
                
        } catch (error) {
                console.log("Error in getMessage controller",error.message);
                res.status(500).json({error:"Internal server error"});       
        }
}