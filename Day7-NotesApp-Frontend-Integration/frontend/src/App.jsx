import React from 'react'
import Notes from './components/Notes'
import Card from './components/Card'
import { useState } from 'react'
import { deleteNoteAPI, getAllNotes } from './apis/notesAPI'
import { useContext } from 'react'
import { MyContext } from './context/MyContext'
import UseNotesHook from './hooks/UseNotesHook'
import { useEffect } from 'react'

const App = () => {
  const {allNotes,setAllNotes,setUpdatedData,updatedData}=useContext(MyContext);
const {deleteNote,getallnotes}=UseNotesHook()

  useEffect(()=>{
    getallnotes()
  },[]);
  return (
    <div className='p-0.1 bg-black text-white min-h-screen w-full flex flex-col gap-10'>
      <div className='flex justify-center h-100 pt-10'>
        <Notes/>
      </div>
      <div className='flex justify-center gap-3 flex-wrap '>
        {
          allNotes.map((data)=>{
            return <Card key={data._id} data={data} deleteNote={deleteNote} setUpdatedData={setUpdatedData} />
          })
        }
      </div>
    </div>
  )
}

export default App
