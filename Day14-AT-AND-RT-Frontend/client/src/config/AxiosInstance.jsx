import axios from 'axios'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const api=axios.create({
    baseURL:"http://localhost:5173/api",
    withCredentials:true,
})

const useApi=()=>{
    const {accessToken,setAccessToken,setUser}=useContext(MyContext);

    api.interceptors.request.use(
        (config)=>{
            if(accessToken){
                config.headers.Authorization= `Bearer ${accessToken}`
            }
              return config; // ⭐ VERY IMPORTANT
        },
            (error)=>{
                return Promise.reject(error)
            }
        
    )
    api.interceptors.response.use((response)=>response,async(error)=>{
        if(error.response && error.response.status==401){
            console.log('Unauthorized, need to refresh Token')
            const res=await api.post('/auth/refresh')
            console.log('Refreshing AccessToken', res);
            setAccessToken(res.data.accessToken)
            error.config.headers.Authorization=`Bearer ${res.data.accessToken}`
            setUser(res.data.data)

            return axios(error.config)
        }
        return Promise.reject(error)
    }
)


    return api
}

export default useApi;
