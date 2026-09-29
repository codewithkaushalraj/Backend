import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import RegisterPage from '../pages/registerPage'
import UserPage from '../pages/UserPage'
import App from '../App'
const AppRoutes = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/register",
            element:<RegisterPage/>
        },
        {
            path:"/user",
            element:<UserPage/>
        }
    ])
  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
