import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router'
import Home from './Components/home/Home.jsx'
import About from './Components/about/About.jsx'
import Number from './Components/contact/Number.jsx'

import PageNotFound from './Components/PageNotFound.jsx'
import ProfilesPage from './Components/profiles/ProfilesPage.jsx'
import ProfilePage from './Components/profiles/ProfilePage.jsx'
import Contacts from './Components/contact/Contacts.jsx'
import Something from './Components/Something.jsx'



const myRouter = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
  // errorElement: <div>Error 404</div>
},

{
  path: "/contact",
  element: <Contacts/>,
},

{
  path: "/profiles",
  element: <ProfilesPage/>,

  children : [
    {
      path: "/profiles/:profileId",
      element: <ProfilePage/>,

      children: [
        {
          path: "/profiles/:profileId/something",
          element: <Something/>
        }
      ]

    },
  ],
    
},



{
  path: "/about",
  element: <About/>,
},


{
  path: "*",
  element: <PageNotFound/>
}

])

createRoot(document.getElementById('root')).render(

  <RouterProvider router = {myRouter}/>

)
