import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router'
import Home from './Components/home/Home.jsx'
import Contact from './Components/contact/Contact.jsx'
import About from './Components/about/About.jsx'
import Number from './Components/contact/Number.jsx'


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
    <Route index element = {<Home/>}/>
    <Route path = "contact" element = {<Contact/>}/>
    <Route path = "about" element = {<About/>}/>
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
 <RouterProvider router={myRouter}/>

  </StrictMode>
)
