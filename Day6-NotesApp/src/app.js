const express=require('express');
const connectDB = require('./config/db');
const createNotesController = require('./controllers/notes.controllers');
const NotesRoute = require('./routes/notes.route');
const getAllNotes=require('./routes/notes.route')
const app=express();
app.use(express.json())

connectDB();

app.get('/',(req,res)=>{
    res.send('ok Ye lo tumhara data')
})

// for create
app.use('/notes',NotesRoute)

module.exports=app;