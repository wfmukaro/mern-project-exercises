import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const uri=process.env.DB_URI;
mongoose.connect(uri,{useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true})
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb database connection established");
})
const app=express(); 
const port=process.env.PORT||5000;
app.use(cors());
app.use(express.json());

import exerciseRouter from './routes/exercises.js';
import userRouter from './routes/users.js';
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);
app.listen(5000, () => {
    console.log(`App listening on port: ${port}`);
});