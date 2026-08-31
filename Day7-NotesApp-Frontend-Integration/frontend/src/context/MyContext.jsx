import { createContext } from "react";
import { useState } from "react";

export const MyContext=createContext();

export const ContextProvider=({children})=>{
    const [formValues,setFormValues]=useState({
            title:'',
            description:''
        })
         const [allNotes,setAllNotes]=useState([])
          const [updatedData,setUpdatedData]=useState(null);

    return <MyContext.Provider value={{formValues,setFormValues,allNotes,setAllNotes,updatedData,setUpdatedData}}>{children}</MyContext.Provider>
}