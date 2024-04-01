import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import path from 'path'
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDb from './DB/connectToMongoDB.js';
import { app, server } from './socket/sockets.js';


dotenv.config();

const PORT = process.env.PORT;

const __dirName = path.resolve();

app.use(express.json());
app.use(cookieParser())


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/user',userRoutes);
app.use(express.static(path.join(__dirName,'/frontend/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirName,'frontend','dist','index.html'))
})

server.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`server running on port ${PORT} ...`);
})