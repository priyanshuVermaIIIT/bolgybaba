import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js '

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://vermapriyanshu0004:Priyanshu014@blogy-baba.4ytudao.mongodb.net/?retryWrites=true&w=majority&appName=Blogy-Baba"
  )
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app =express();


app.listen(3000,()=>{
    console.log('server is running on port 3000 . Best of luck!')
});

app.use('/api/user' , userRoutes);