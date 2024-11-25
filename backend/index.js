const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv=require('dotenv');
const authRoutes =require ('./routes/auth.js');
const cookieParser =require('cookie-parser')

const app = express();
dotenv.config();
// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:3002", // Allow only frontend's origin
    methods: ["GET", "POST",'PUT','DELETE','PATCH'],  
    allowedHeaders:['Content-Type','Authorization'] ,    // Restrict allowed methods
    credentials: true,              // Allow credentials if needed
  })
);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://dhonirajput208:Govindrajput@cluster0.xfnnv.mongodb.net/jobportal"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.use('/api/auth',authRoutes);
app.use((err,req,res,next)=>{
    const  status=err.status||500;
    const message=err.message||"Something is wrong";
    return res.status(status).json({
        success:false,
        status,message
    })
})
// Start server
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
