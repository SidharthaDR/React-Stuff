import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router'
import {Home, NavBar, Footer, About} from "./components/MyComponents.js"
import { StrictMode } from 'react'
import LayoutOne from './layouts/LayoutOne.jsx'

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutOne/>,

    children:[
      {
          path: "home",
          element: <Home/>, 
      },

      {
        path: "about",
        element:<About/>,
      }
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={myRouter}/>
  </StrictMode>
)
