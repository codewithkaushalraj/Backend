import { useContext } from 'react'
import UseNotesHook from '../hooks/UseNotesHook'
import { MyContext } from '../context/MyContext'

const Notes = () => {
    const {formValues,setFormValues}=useContext(MyContext)
  const {handleChange,handleSubmit}= UseNotesHook()

  return (
    <div className='flex flex-col gap-10 rounded-3xl  w-130 items-center bg-pink-900 px-5 py-10'>
      <h1 className='text-4xl font-bold'>Notes App</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
        <input value={formValues.title} name='title' onChange={handleChange} className='text-xl py-2 px-3 focus:border focus:border-white border border-black bg-red-900 opacity-0.1 ' type="text" placeholder='title' />
        <input value={formValues.description} name='description' onChange={handleChange} className='text-xl py-2 px-3 focus:border focus:border-white border border-black bg-red-900 opacity-0.1 ' type="text" placeholder='description' />
        <button className='bg-blue-600  py-2 text-xl font-bold'>Submit </button>
      </form>
    </div>
  )
}

export default Notes
