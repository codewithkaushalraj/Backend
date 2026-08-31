import axiosInstance from "../../config/axiosInstence";

export const getAllNotes = async () => {
  const res = await axiosInstance.get("/allNotes");
  console.log(res);
  return res.data;
};

export const deleteNoteAPI=async(id)=>{
    const res= await axiosInstance.delete(`/${id}`)
    // console.log(res);
    return res.data;
}
export const updatedNotesAPI=async(id,formValues)=>{
     const res= await axiosInstance.put(`/${id}`,formValues)
    console.log(res);
    return res.data;
}
