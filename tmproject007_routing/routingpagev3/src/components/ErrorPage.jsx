import {useNavigate} from "react-router"
function ErrorPage() {
    const navTo = useNavigate()
  return (
    <>
    <div>hello</div>
    <h1>Error 404: Page not found</h1>
    <button className='p-2 bg-black text-white'
    onClick={() => navTo('/')}>Go Home</button>
    </>
  )
}

export default ErrorPage