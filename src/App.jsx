import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Donate from './components/Donate'
import Login from './components/Login'
import Layout from './components/Layout'
function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path:"",
       element:<Layout />,
       children:[
        {
          path:"",
          element:<Home />,
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"donate",
          element:<Donate />
        },
        {
          path:"login",
          element:<Login />
        }
       ]
    }
   ])
       return <RouterProvider router={browserRouterObj} />
       
}

export default App
