const express=require('express');
const connectDB = require('./config/db');
const cors=require('cors')
const NotesRoute = require('./routes/notes.route');
const app=express();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'  // now only isko permission hai hamara backend ko access karne ki
}))
connectDB();

app.get('/',(req,res)=>{
    res.send('ok Ye lo tumhara data')
})

// for create
app.use('/notes',NotesRoute)

module.exports=app;