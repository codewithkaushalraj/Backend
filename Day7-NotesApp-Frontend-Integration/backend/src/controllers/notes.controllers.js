const notesModel = require("../models/notes.model");

const createNotesController=async(req,res)=>{
  try {
    const {title,description}=req.body;
    let newNote=await notesModel.create({
        title,
        description
    })   

    return res.status(201).json({
        message:'Note Create Successfully',
        data:newNote,
    })
  } catch (error) {
    console.log('Error in While creating data',error)
     return res.status(500).json({
        message:"Intenal Server Error"
    })
  }
}

// getAll Notes from Database
const getAllNotesController=async(req,res)=>{
  try {
    const allNotes=await notesModel.find()
    res.status(200).json({
      message:'Fetched All Notes Successfully',
      data:allNotes,
    })
  } catch (error) {
    console.log('Error in fetching All Notes',error);
     return res.status(500).json({
        message:"Intenal Server Error"
    })
  }
}
const getSingleNotesController=async (req,res)=>{
    try {
        const noteId=req.params.id;
    const element=await notesModel.findById(noteId);
    res.status(200).json({
        message:'single Notes Fetched Successfully',
        data:element
    })
    } catch (error) {
        console.error('Error in feching single Notes api ',error)
         return res.status(500).json({
        message:"Intenal Server Error"
    })
}
}
const updatedNotesController=async (req,res)=>{
  try {
      const notesId=req.params.id;
    const body=req.body;
    const updatedNotes=await notesModel.findByIdAndUpdate(notesId,body,{new:true});
    res.status(200).json({
        message:"Notes updated successfully",
        data:updatedNotes
    })
    
  } catch (error) {
    return res.status(500).json({
        message:"Intenal Server Error"
    })
  }
}
const deleteNotesController=async(req,res)=>{
   try {
    const notesId=req.params.id;
    const deletedNotes=await notesModel.findByIdAndDelete(notesId);
    res.status(200).json({
        message:"Delete Notes Successfully ..",
        data:deletedNotes
    })
   } catch (error) {
    return res.status(500).json({
        message:'Internal Server Error'
    })
   }
}



module.exports={
    getAllNotesController,
    createNotesController,
    getSingleNotesController,
    updatedNotesController,
    deleteNotesController
}