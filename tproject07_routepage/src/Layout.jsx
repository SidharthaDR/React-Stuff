import { Outlet } from 'react-router'
import { Header,Footer,Home } from './components/index.js'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/> 
    </>
)
}

export default Layout