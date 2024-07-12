import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js '
import authRoutes from './routes/auth.route.js'

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

app.use(express.json());


app.listen(3000,()=>{
    console.log('server is running on port 3000 . Best of luck!')
});

app.use('/api/user' , userRoutes);
app.use('/api/auth' , authRoutes)


app.use((err , req , res , next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message
  })
});