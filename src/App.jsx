import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Donate from './components/Donate';
import Login from './components/Login'
import Layout from './components/Layout';
import Donater from './components/Donater';
import Receiver from './components/Receiver';
import Volunteer from './components/Volunteer';
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
        },
        {
          path:"donater",
          element:<Donater />
        },
        {
          path:"receiver",
          element:<Receiver />
        },
        {
          path:"volunteer",
          element:<Volunteer />
        }
       ]
    }
   ])
       return <RouterProvider router={browserRouterObj} />
       
}

export default App
