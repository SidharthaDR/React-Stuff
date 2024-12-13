# Router in React
   ## basic way/ setting up:

     - install react-router with "npm i react-router"
  
        1. import createBrowserRouter from react-router
        
        2. then, create a const of any name and use createBrowserRouter([])
        
        => const router = createBrowserRouter([{//add objects here path: , element: ,}])

        3. then, import RouteProvider from react-router
           - in ReactDOM.createRoot: replace everything unnecessary with
              <RouterProvider router = {router} />  


- Navigate clicking on a button:
  const something = useNavigate()
    onClick= () => something("/A path")

- Dynamic Paths:

  1. in path= "something/:id" -> here :id is dynamic.

  2. useParams() gives vlaues of :id entered for that particular <page/>
    
    - eg. path: "something/:id" element: <page/>
      - then <page/> can catch ":id" entered like this.
      -  then using const a = useParams(); console.log();
      
      - xyz.com/something/1
      - - console: id: 1
       
      - xyz.com/something/2
      - - console: id: 2
       
      - xyz.com/something/DFADSF
      - - console: id: DFADSF
  
      - xyz.com/something/Daef3
      - - console: id: Daef3
    
      
      
      
      
      