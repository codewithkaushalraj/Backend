const express=require('express');
const connectDB = require('./config/db');
const NotesRoute = require('./routes/notes.route');
const app=express();
app.use(express.json())

connectDB();

app.get('/',(req,res)=>{
    res.send('ok Ye lo tumhara data')
})

// for create
app.use('/notes',NotesRoute)

module.exports=app;