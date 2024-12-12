import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import {Router, Route, RouterProvider, createBrowserRouter, BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
  </StrictMode>,
)
