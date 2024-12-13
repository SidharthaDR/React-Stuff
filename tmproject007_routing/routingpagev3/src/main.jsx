import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router'
import {Home, NavBar, Footer, About, ErrorPage} from "./components/MyComponents.js"
import { StrictMode } from 'react'
import LayoutOne from './layouts/LayoutOne.jsx'
import Something from './components/Something.jsx'
// import ErrorPage from './components/ErrorPage.jsx'

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutOne/>,
    errorElement:<ErrorPage/>,

    children:[
      {
          path: "/",
          element: <Home/>, 
      },

      {
        path: "about",
        element:<About/>,
      }
    ]
  },

  {//Temp path for testing
    path: "/something",
    element: <Something/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={myRouter}/>
  </StrictMode>
)
