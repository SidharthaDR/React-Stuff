import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } 
from 'react-router'
import {Header,Footer,Home,About,Company} from './components/index.js'
import Layout from './layout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="about/" element = {<About/>}>
        <Route path="company" element = {<Company />}></Route>
      </Route>
    </Route>
    

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
