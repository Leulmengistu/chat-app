import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDb from './DB/connectToMongoDB.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser())

app.get('/',(req,res)=>{
    //root route => http://localhost:PORT
    res.send("Hello world");
})

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/user',userRoutes);



app.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`server running on port ${PORT} ...`);
})