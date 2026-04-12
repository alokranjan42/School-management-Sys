import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Login from './Features/Auth/Login'
import Dashboard from './Pages/Dashboard'
import Signup from './Features/Auth/Signup'
import StudentProfile from './Features/Student/StudentProfile'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
 
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
                element:( <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>)
            },
            
                {
           path: "/student/:id",
           element: (
             <ProtectedRoute>
           <StudentProfile/>
           </ProtectedRoute>)
           }
            
        ])
     
      
 
  

export default router
