const express = require("express");
const connectDB=require('./config/db');
const notesModel = require("../model/notes.model");
const app = express();

app.use(express.json())


connectDB();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.post('/create',async(req,res)=>{
    // const data=req.body;
    // console.log(data)


    const {title,description}=req.body;

    const newNote=await notesModel.create({
        title,
        description
    })

    res.send({
        success:true,
        message:'Notes created Successfully',
        data:newNote
    })
})

module.exports=app;
