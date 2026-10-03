import api from "../config/AxiosInstance"


export const fetchUrls= async()=>{
    const res=await api.get('/all')
    // console.log(res)
    return res.data
}

export const deleteUrl=async(id)=>{
    const res=await api.delete(`/${id}`);
    console.log(res)
    return res;
}