const express=require('express');
const { createNotesController, getAllNotesController, getSingleNotesController, updatedNotesController, deleteNotesController } = require('../controllers/notes.controllers');

const router=express.Router();

//create
router.post('/create',createNotesController);

//read
router.get('/allNotes',getAllNotesController);
router.get('/:id',getSingleNotesController)

//update
router.put('/:id',updatedNotesController)

// delete
router.delete('/:id',deleteNotesController)


module.exports=router;