const mongoose=require('mongoose');

const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minlength:10
    }
})


const notesModel=mongoose.model('Notes',notesSchema);

module.exports=notesModel