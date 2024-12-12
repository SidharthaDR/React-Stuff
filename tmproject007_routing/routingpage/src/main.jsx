import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router' 
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Layout />
  </BrowserRouter>


)
