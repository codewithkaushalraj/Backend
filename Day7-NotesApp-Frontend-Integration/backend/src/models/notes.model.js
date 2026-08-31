const mongoose=require('mongoose');

const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minlength:[20,'Minimum 20 characters are requiered ..']
    }
})

const notesModel=mongoose.model('NotesData',notesSchema)

module.exports=notesModel