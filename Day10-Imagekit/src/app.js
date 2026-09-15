require('dotenv').config();
const express=require('express');
const connectDB = require('./config/db');
const postRoutes=require('./routes/post.route')

const app=express()
app.use(express.json())
app.use('/post',postRoutes)

connectDB();

module.exports=app;