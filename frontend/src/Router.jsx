import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Login from './Features/Auth/Login'
import Dashboard from './Pages/Dashboard'
import Signup from './Features/Auth/Signup'
 
 const router=createBrowserRouter([
            {
                path:"/",
                element: <Signup/>

            },
            {
                path:"/login",
                element:<Login/>
            },{
                path:"/dashboard",
                element:<Dashboard/>
            }
        ])
     
      
 
  

export default router
