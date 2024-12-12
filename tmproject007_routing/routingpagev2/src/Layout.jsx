import Header from "./Components/Header.jsx"
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>

      <Header/>
      <Outlet/>
        
    </>
  )
}

export default Layout