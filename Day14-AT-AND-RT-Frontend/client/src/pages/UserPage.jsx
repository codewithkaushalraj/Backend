import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import useApi from "../config/AxiosInstance";

const UserPage = () => {
  const api=useApi()
    const {user}=useContext(MyContext)
    const fetchUser=async()=>{
      try {
        const res= await api.get('/auth/me')
      } catch (error) {
         console.error("Status:", error.response?.status);
  console.error("Backend error:", error.response?.data);
  console.error("Full error:", error);
      }
    }
    useEffect(()=>{
      fetchUser()
    },[])
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {" "}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        {" "}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {" "}
          Welcome 👋{" "}
        </h1>{" "}
        <div className="space-y-4">
          {" "}
          <div>
            {" "}
            <p className="text-sm text-gray-500">Name</p>{" "}
            <p className="text-lg font-medium text-gray-800">
              {" "}
              {user?.name}{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="text-sm text-gray-500">Email</p>{" "}
            <p className="text-lg font-medium text-gray-800">
              {" "}
              {user?.email}{" "}
            </p>{" "}
          </div>{" "}
          <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            {" "}
            Logout{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default UserPage;
