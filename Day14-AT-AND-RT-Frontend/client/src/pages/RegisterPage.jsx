import React, { useContext, useState } from "react";
import useApi from "../config/AxiosInstance";
import { MyContext } from "../context/MyContext";
import {useNavigate} from 'react-router'

const RegisterPage = () => {
  const api = useApi();
  const {form,setForm,accessToken,setAccessToken,setUser}=useContext(MyContext)
const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await api.post("/auth/register", form);
      console.log(res);
      setAccessToken(res.data.accessToken)
      setUser(res.data.data)
      navigate('/user')

    } catch (error) {
      console.error("Status:", error.response?.status);
  console.error("Backend error:", error.response?.data);
  console.error("Full error:", error);
    }

    setForm({
        name: "",
        email:"",
        password:""
    })
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Enter your name"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
