import {useNavigate} from "react-router"
function ErrorPage() {
    const navTo = useNavigate()
  return (
    <>
    <div className="h-screen flex flex-col justify-center bg-red-500 items-center gap-10">

    <h1 className="font-mono text-lg">Error 404: Page not found</h1>
    
    <button className='p-2 bg-black text-white'
    onClick={() => navTo('/')}>Go Home</button>

    </div>
    </>
  )
}

export default ErrorPage