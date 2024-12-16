import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router'
import {Home, NavBar, Footer, About, ErrorPage} from "./components/MyComponents.js"
import { StrictMode } from 'react'
import LayoutOne from './layouts/LayoutOne.jsx'
import Something from './components/Something.jsx'
import Github from './components/Github.jsx'
import GithubV2, { githubInfoLoader } from './components/GithubV2.jsx'
// import ErrorPage from './components/ErrorPage.jsx'

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayoutOne/>,
//     errorElement:<ErrorPage/>,

//     children:[
//       {
//           path: "/",
//           element: <Home/>, 
//       },

//       {
//         path: "about",
//         element:<About/>,
//       },

//       {
//         path: "github",
//         element: <Github/>
//       },
//       {
//         loader: {githubInfoLoader},
//         path: "githubv2",
//         element: <GithubV2/>
//       }
//     ]
//   },



//   {//Temp path for testing
//     path: "/something",
//     element: <Something/>
//   }


// ])


//other way

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<LayoutOne/>} errorElement = {<ErrorPage/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='github' element = {<Github/>}/>
      <Route path='githubv2' element = {<GithubV2/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={myRouter}/>
  </StrictMode>
)
