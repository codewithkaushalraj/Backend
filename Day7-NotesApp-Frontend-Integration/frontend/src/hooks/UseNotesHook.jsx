import { useState } from "react";
import axiosInstance from "../../config/axiosInstence";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { deleteNoteAPI, getAllNotes, updatedNotesAPI } from "../apis/notesAPI";

const UseNotesHook = () => {
  const {
    formValues,
    setFormValues,
    updatedData,
    setUpdatedData,
    allNotes,
    setAllNotes,
  } = useContext(MyContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updatedData) {
      const res = await updatedNotesAPI(updatedData._id, formValues);
      console.log(res.data);
      setUpdatedData(null);
    } else {
      console.log(formValues);
      //  api call
      let res = await axiosInstance.post("/create", formValues);
      console.log(res);
    }
    setFormValues({
      title: "",
      description: "",
    });
    getallnotes();
  };

  // delete note
  const deleteNote = async (id) => {
    const res = await deleteNoteAPI(id);
    console.log(res);
    getallnotes();
  };

  const getallnotes = async () => {
    const res = await getAllNotes();
    //  console.log(res.data)
    setAllNotes(res.data);
  };
  return {
    handleChange,
    handleSubmit,
    deleteNote,
    getallnotes,
  };
};

export default UseNotesHook;
